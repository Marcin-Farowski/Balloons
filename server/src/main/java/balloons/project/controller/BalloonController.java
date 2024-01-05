package balloons.project.controller;

import balloons.project.dto.BalloonDto;
import balloons.project.dto.BalloonLaunchDto;
import balloons.project.service.BalloonStatusService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.reactive.function.client.WebClient;
import reactor.core.publisher.Mono;

@RestController
@RequestMapping("/api/v1/balloon")
@RequiredArgsConstructor
@Slf4j
public class BalloonController {

    private WebClient webClient;

    @Autowired
    public void BalloonLaunchController(WebClient webClient) {
        this.webClient = webClient;
    }

    private final BalloonStatusService balloonStatusService;

    @PostMapping("/status")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<?> receiveBalloonStatus(@RequestBody BalloonDto balloonStatusDto) {
        try {
            log.info("Received balloon status update: {}", balloonStatusDto);
            balloonStatusService.saveBalloonStatus(balloonStatusDto);
            return ResponseEntity.ok().build();
        } catch (Exception e) {
            log.error("Error processing balloon status update", e);
            return ResponseEntity.status(500).body("Error processing request");
        }
    }

    @PostMapping("/launch")
    @PreAuthorize("hasRole('ADMIN')")
    public Mono<ResponseEntity<String>> launchBalloon(@RequestBody BalloonLaunchDto balloonLaunchDto) {
            String url = "http://127.0.0.1:5050/start-balloon-simulation";

            return webClient.post()
                    .uri(url)
                    .body(Mono.just(balloonLaunchDto), BalloonLaunchDto.class)
                    .retrieve()
                    .toEntity(String.class)
                    .onErrorReturn(ResponseEntity.status(500).body("Error sending data to the simulation service."));
    }
}