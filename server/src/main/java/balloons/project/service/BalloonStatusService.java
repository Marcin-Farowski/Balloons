package balloons.project.service;

import balloons.project.dto.BalloonDto;
import balloons.project.model.BalloonName;
import balloons.project.model.BalloonStatus;
import balloons.project.repository.BalloonNameRepository;
import balloons.project.repository.BalloonStatusRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class BalloonStatusService {

    private final BalloonStatusRepository balloonStatusRepository;
    private final BalloonNameRepository balloonNameRepository;

    @Transactional
    public void saveBalloonStatus(BalloonDto balloonDTO) {
        BalloonName balloonName = balloonNameRepository.findByName(balloonDTO.getName())
                .orElseGet(() -> balloonNameRepository.save(new BalloonName(balloonDTO.getName())));
        BalloonStatus balloonStatus = new BalloonStatus();
        balloonStatus.setLatitude(balloonDTO.getLatitude());
        balloonStatus.setLongitude(balloonDTO.getLongitude());
        balloonStatus.setCurrentTime(balloonDTO.getCurrentTime());
        balloonStatus.setAltitude(balloonDTO.getAltitude());
        balloonStatus.setTemperature(balloonDTO.getTemperature());
        balloonStatus.setPressure(balloonDTO.getPressure());
        balloonStatus.setHumidity(balloonDTO.getHumidity());
        balloonStatus.setWindSpeed(balloonDTO.getWindSpeed());
        balloonStatus.setBalloonName(balloonName);

        balloonStatusRepository.save(balloonStatus);
    }
}
