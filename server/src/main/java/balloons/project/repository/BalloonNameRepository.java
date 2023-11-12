package balloons.project.repository;

import balloons.project.model.BalloonName;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.Optional;

public interface BalloonNameRepository extends JpaRepository<BalloonName, Long> {
    Optional<BalloonName> findByName(String name);
}
