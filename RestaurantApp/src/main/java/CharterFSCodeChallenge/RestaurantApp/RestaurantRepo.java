package CharterFSCodeChallenge.RestaurantApp;

import org.springframework.data.jpa.repository.JpaRepository;

public interface RestaurantRepo extends  JpaRepository<Restaurant, String> {

}
