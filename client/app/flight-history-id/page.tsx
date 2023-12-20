import React from "react";
import Header from "@components/Header"
import FlightHistoryComponent from "@components/flight-history-id/FlightHistory"

function FlightHistory() {
  return (
    <div>
      <Header/>
      <FlightHistoryComponent/>
    </div>
  );
}

export default FlightHistory;