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
    public ArrayList<Restaurant> sendFilteredByState(@RequestParam(value = "state", defaultValue = "") String state,
    		@RequestParam(value = "city", defaultValue = "") String city, @RequestParam(value = "genre", defaultValue = "") String genre ) {
    	System.out.println("city " + city);
    	System.out.println("state " + state);
    	System.out.println("genre " + genre);
    	
		
	   	ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.filterStateCityAndGenre(genre, city,state);
	   	
	  	return allData;  
	 //Filter State	
    	/*
    	//ALL DATA
    	if(state.equals("") && city.equals("") && genre.equals("")) {
    		
    	   	ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();
    	   	
    	  	return allData;  
    	 //Filter State	
    	}else if(!state.equals("") && city.equals("") && genre.equals("")) {
    		
    		ArrayList<Restaurant> dataByState = (ArrayList<Restaurant>) repo.getRestaurantsByState(state);
    		
    	 	return dataByState;
    	//Filter City
    	}else if(state.equals("") && !city.equals("") && genre.equals("")) {
        	
        	ArrayList<Restaurant> dataByCity= (ArrayList<Restaurant>) repo.getRestaurantCity(city);
        	
        	return dataByCity;
        //Filter Genre	
    	}else if(state.equals("") && city.equals("") && !genre.equals("")) {
    		
        	ArrayList<Restaurant> dataByGenre = (ArrayList<Restaurant>) repo.getRestaurantByGenre(genre);
        	
        	return dataByGenre;
        //Filter City and Genre
    	}else if(state.equals("") && !city.equals("") && !genre.equals("")) {
    		System.out.println("SAM");
        	ArrayList<Restaurant> dataByGenreCity = (ArrayList<Restaurant>) repo.getRestaurantByGenreAndCity(genre,city);
        	
        	return dataByGenreCity;
        //Filter City and State
    	}else if(!state.equals("") && !city.equals("") && genre.equals("")) {
    		System.out.println("SAM");
        	ArrayList<Restaurant> dataByStateCity = (ArrayList<Restaurant>) repo.getRestaurantCityandState(city,state);
        	
        	return dataByStateCity;
        
    	}else if(!state.equals("") && !city.equals("") && genre.equals("")) {
    		System.out.println("SAM");
        	ArrayList<Restaurant> dataByStateCity = (ArrayList<Restaurant>) repo.getRestaurantCityandState(city,state);
        	
        	return dataByStateCity;
        
    	}
    	
    
    		ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();
    	  	return allData;   	
   */
    	
    
    	
   
    	
 	
    }
    
    
    @RequestMapping("/filterByGenre")
    public ArrayList<Restaurant> sendFilteredByGenre(@RequestParam(value = "genre", defaultValue = "") String genre) {

     	if(genre.equals("All Genres")) {
    		ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();
    	  	return allData;   	
    	}
    	
    	ArrayList<Restaurant> dataByGenre = (ArrayList<Restaurant>) repo.getRestaurantByGenre(genre);
    	
    	return dataByGenre;
    
    }
    
    @RequestMapping("/filterByCity")
    public ArrayList<Restaurant> sendFilteredByCity(@RequestParam(value = "city", defaultValue = "") String city) {
    	System.out.println("filterByCIty");
    	System.out.println(city);
     	if(city.equals("")) {
    		ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();
    	  	return allData;   	
    	}
    	
    	ArrayList<Restaurant> dataByGenre = (ArrayList<Restaurant>) repo.getRestaurantCity(city);
    	
    	return dataByGenre;
    	
    	
 	
    }
}
 