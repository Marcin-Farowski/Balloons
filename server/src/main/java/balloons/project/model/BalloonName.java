package balloons.project.model;

import lombok.*;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Data
@NoArgsConstructor
@RequiredArgsConstructor
@Table(name = "balloon_names")
public class BalloonName {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NonNull
    @Column(unique = true, nullable = false)
    private String name;

    @OneToMany(mappedBy = "balloonName", cascade = CascadeType.ALL)
    private Set<BalloonStatus> balloonStatuses;
}
