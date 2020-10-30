package CharterFSCodeChallenge.RestaurantApp;

import org.springframework.boot.SpringApplication;

import java.io.FileReader;
import java.util.Iterator;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
////////////////////////////////////////////////////////////////////////////////
@SpringBootApplication
public class ResturantAppApplication {

	public static void main(String[] args) {
		SpringApplication.run(ResturantAppApplication.class, args);
	}
	
  /*@Bean
  public String CommandLineRunner(RestaurantRepo repo) throws Exception{
      //Reading in the JSON File 
      Object obj = new JSONParser().parse(new FileReader
          ("C:\\Users\\peasl\\SalmoPrograms\\restaurantData.json"));
      //Casting to JSONObject
      JSONObject jsonObj = (JSONObject) obj;
      JSONArray restData  = (JSONArray) jsonObj.get("data");
      
      Iterator<JSONObject> iterator = restData.iterator();
      while(iterator.hasNext()) {
    	  JSONObject currentData = (JSONObject) iterator.next();
    	  Restaurant restaurant = new Restaurant((String) currentData.get("id"),
    			  (String)  currentData.get("name"),(String) currentData.get("address1"),
    			  (String)  currentData.get("city"),(String)  currentData.get("state"),
    			  Integer.parseInt((String)currentData.get("zip")), Double.parseDouble((String)currentData.get("lat")), 
    			  Double.parseDouble((String)currentData.get("long")),(String)  currentData.get("telephone"),
    			  (String) currentData.get("tags"),(String) currentData.get("website"),
    			  (String) currentData.get("genre"),(String) currentData.get("hours"),
    			  (String) currentData.get("attire"));
    	  repo.save(restaurant);
    	}
      

      System.out.println("DONE LOADING IN RESTUARANT DATA!!!");
     return "Has to have non void return type";
  }*/

}
