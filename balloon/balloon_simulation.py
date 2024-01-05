import numpy as np
import requests
import threading
import time
import json


class StratosphericBalloonSimulation:
    def __init__(self, name, start_latitude, start_longitude):
        self.name = name
        self.latitude = start_latitude
        self.longitude = start_longitude
        self.altitude = 0  # altitude in meters
        self.max_altitude = 30000  # maximum altitude for the simulation
        self.temperature = -50  # temperature in Celsius
        self.pressure = 1013.25  # pressure in hPa
        self.humidity = 50  # humidity in percent
        self.wind_speed = 10  # wind speed in km/h
        self.is_ascending = True  # flag to check if the balloon is ascending or descending

    def update_conditions(self):
        """ Update the environmental conditions and balloon position. """
        # Update altitude
        if self.is_ascending:
            self.altitude += np.random.randint(5, 10)
            if self.altitude >= self.max_altitude:
                self.is_ascending = False
        else:
            self.altitude -= np.random.randint(5, 10)
            if self.altitude <= 0:
                self.altitude = 0

        # Update other conditions
        self.temperature += np.random.uniform(-0.5, 0.5)
        self.pressure -= np.random.uniform(0, 0.5) if self.is_ascending else np.random.uniform(0, 0.5)
        self.humidity += np.random.uniform(-1, 1)
        self.wind_speed += np.random.uniform(-1, 1)

    def send_status(self, jwt_token, current_time):
        status = {
            "name": self.name,
            "latitude": self.latitude,
            "longitude": self.longitude,
            "currentTime": current_time,
            "altitude": self.altitude,
            "temperature": self.temperature,
            "pressure": self.pressure,
            "humidity": self.humidity,
            "windSpeed": self.wind_speed
        }
        headers = {"Authorization": f"Bearer {jwt_token}"}
        response = requests.post("http://localhost:8080/api/v1/balloon/status", json=status, headers=headers)
        print("Status sent:", status)
        print("Status sent, response:", response.status_code)

    def report(self, current_time):
        """ Print the current state of the balloon. """
        print(
            f"Time: {current_time}, Altitude: {self.altitude}m, Latitude: {self.latitude}, Longitude: {self.longitude}, "
            f"Temperature: {self.temperature}C, Pressure: {self.pressure}hPa, Humidity: {self.humidity}%, Wind Speed: {self.wind_speed}km/h")

    def start_simulation(self, jwt_token):
        start_time = time.time()
        while self.altitude > 0 or self.is_ascending:
            current_time = time.time() - start_time
            self.update_conditions()
            self.send_status(jwt_token, current_time)
            self.report(current_time)
            # Log to JSON file
            with open("balloon_status.json", "a") as file:
                json.dump({"Time": current_time, "Altitude": self.altitude}, file)
                file.write("\n")
            time.sleep(5)


def authenticate_and_get_token():
    response = requests.post("http://localhost:8080/api/v1/auth/authenticate",
                             json={"email": "m.farowski@gmail.com", "password": "password"})
    print("Authenticate response:", response.json())
    print("Authenticate response code:", response.status_code)
    return response.json().get("token")


from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/start-balloon-simulation', methods=['POST'])
def start_balloon_simulation():
    data = request.json
    name = data.get("name")
    latitude = data.get("latitude")
    longitude = data.get("longitude")

    jwt_token = authenticate_and_get_token()

    simulation = StratosphericBalloonSimulation(name, latitude, longitude)
    thread = threading.Thread(target=simulation.start_simulation, args=(jwt_token,))
    thread.start()

    return jsonify({"message": "Balloon simulation started"})


if __name__ == '__main__':
    app.run(port=5050)
