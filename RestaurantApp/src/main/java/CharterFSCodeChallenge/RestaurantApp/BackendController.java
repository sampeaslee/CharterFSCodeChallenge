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
 
    @RequestMapping("sendAllData")
    public ArrayList<Restaurant> sendAllRestaurantData() {
    	ArrayList<String> allGenres = new ArrayList<String>();
    	ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();
    	
    	/*for(Restaurant restaurant: allData) {
    		String genre = restaurant.genre;
    		String[] brokenup = genre.split(",");
    		for(int i = 0; i < brokenup.length; i++) {
    			if(!allGenres.contains(brokenup[i])) {
    				allGenres.add(brokenup[i]);
    			}
    		}	
    	}
    	Collections.sort(allGenres);;
    	for(String s: allGenres){
    		System.out.println(s);
    	}*/
    	
    	return allData;   		

    }
    
    @RequestMapping("/sortByName")
    public ArrayList<Restaurant> sendSortedByName() {
    	
    	ArrayList<Restaurant> dataSortedByName = (ArrayList<Restaurant>) repo.sortByName();
    	 
    	return dataSortedByName;   		
    }

    @RequestMapping("/filterByState")
    public ArrayList<Restaurant> sendFilteredByState(@RequestParam(value = "state", defaultValue = "") String state) {

    	
    	ArrayList<Restaurant> dataByState = (ArrayList<Restaurant>) repo.getRestaurantsByState(state);
    	
    	return dataByState;
    	
 	
    }
    
    
    @RequestMapping("/filterByGenre")
    public ArrayList<Restaurant> sendFilteredByGenre(@RequestParam(value = "genre", defaultValue = "") String genre) {

    	
    	ArrayList<Restaurant> dataByGenre = (ArrayList<Restaurant>) repo.getRestaurantByGenre(genre);
    	
    	return dataByGenre;
    	
    	
 	
    }
}
 