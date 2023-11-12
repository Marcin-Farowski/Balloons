package balloons.project.dto;

import lombok.Data;

@Data
public class BalloonDto {
    private String name;
    private Double latitude;
    private Double longitude;
    private Double currentTime;
    private Double altitude;
    private Double temperature;
    private Double pressure;
    private Double humidity;
    private Double windSpeed;
}