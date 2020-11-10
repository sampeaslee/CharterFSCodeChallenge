package CharterFSCodeChallenge.RestaurantApp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RestaurantRepo extends  JpaRepository<Restaurant, String> {
	

	@Query(value = "SELECT * FROM restaurant WHERE (restaurant.genre LIKE CONCAT('%,', :userInput, '%') " +
			"OR restaurant.genre LIKE :userInput%) AND restaurant.city LIKE :userInput2% AND state LIKE :userInput3%",  nativeQuery = true)
			public List<Restaurant> filterStateCityAndGenre(@Param("userInput") String userInput, @Param("userInput2") String userInput2, @Param("userInput3") String userInput3);
}
