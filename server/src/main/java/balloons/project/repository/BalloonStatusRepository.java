package balloons.project.repository;

import balloons.project.model.BalloonStatus;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BalloonStatusRepository extends JpaRepository<BalloonStatus, Long> {
}
