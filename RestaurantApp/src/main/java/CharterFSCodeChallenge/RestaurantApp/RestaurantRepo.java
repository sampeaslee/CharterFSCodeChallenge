package CharterFSCodeChallenge.RestaurantApp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RestaurantRepo extends  JpaRepository<Restaurant, String> {
	
	@Query(value = "select * from restaurant order by name;", nativeQuery = true)
    public List<Restaurant> sortByName();
	
	@Query(value = "SELECT * FROM restaurant WHERE state = :userInput",  nativeQuery = true)
    public List<Restaurant> getRestaurantsByState(@Param("userInput") String userInput);

	@Query(value = "SELECT * FROM restaurant WHERE restaurant.state LIKE :userInput%",  nativeQuery = true)
	public List<Restaurant> getRestaurantByStatesFirstLetter(@Param("userInput") String userInput);
	
	@Query(value = "SELECT * FROM restaurant WHERE restaurant.genre LIKE CONCAT('%,', :userInput, '%') OR restaurant.genre LIKE :userInput%",  nativeQuery = true)
	public List<Restaurant> getRestaurantByGenre(@Param("userInput") String userInput);
}
