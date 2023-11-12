package balloons.project.controller;

import balloons.project.dto.BalloonDto;
import balloons.project.service.BalloonStatusService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/balloon")
@RequiredArgsConstructor
@Slf4j
public class BalloonStatusController {

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
}