package CharterFSCodeChallenge.RestaurantApp;

import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;

@RestController
public class BackendController {
	
	 @Autowired
	 RestaurantRepo repo;
	/**
	 * Executes SQL query that extracts all the data from the database 
	 * @return
	 */
    @RequestMapping("sendAllData")
    public ArrayList<Restaurant> sendAllRestaurantData() {
    	
    	ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();	    	
    	
    	return allData;   		
    }
    
    /**
     * Executes SQL query that extracts data from database based on state, city and genre 
     * @param state
     * @param city
     * @param genre
     * @return
     */
    @RequestMapping("/filterData")
    public ArrayList<Restaurant> sendFilteredByState(@RequestParam(value = "state", defaultValue = "") String state,
    		@RequestParam(value = "city", defaultValue = "") String city, @RequestParam(value = "genre", defaultValue = "") String genre ) {
		
    	ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.filterStateCityAndGenre(genre, city,state);	   	
	  	
    	return allData;  
      	
    }
    
    

}
 