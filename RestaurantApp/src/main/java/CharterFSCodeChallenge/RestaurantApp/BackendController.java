package CharterFSCodeChallenge.RestaurantApp;

import java.util.ArrayList;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class BackendController {
	 @Autowired
	  RestaurantRepo repo;

    @RequestMapping("/home")
    public ArrayList<Restaurant> sendAllData() {
    	
    	ArrayList<Restaurant> allData = (ArrayList<Restaurant>) repo.findAll();
    	System.out.println(allData.size());
    	String[] str = {"Sent From Back End"};
    	Restaurant r = new Restaurant("1","1","1","1","1",1,1.0,1.0,"1","1","1","1","1","1");
    	Restaurant r2 = new Restaurant("1","1","1","1","1",1,1.0,1.0,"1","1","1","1","1","1");
        Restaurant[] send = {r,r2};
       	return allData;

   

    }
    
    @PostMapping("/test")
    String newEmployee(@RequestBody String newEmployee) {
    	System.out.print(newEmployee);
      return "test";
    }

	
}
 