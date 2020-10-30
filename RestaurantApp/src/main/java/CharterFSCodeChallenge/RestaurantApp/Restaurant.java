package CharterFSCodeChallenge.RestaurantApp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "restaurant")
public class Restaurant {
	@Id
	public String id;
	
	public String name;
	
	public String address1;
	
	public String city;
	
	public String state;
	
	public int zip;
	
	public Double lat;
	
	public Double lng;
	
	public String telephone;
	
	public String tags;
	
	@Column(length  = 500)
	public String website;
	
	public String genre;
	
	public String hours;
	
	public String attire;
	
	public Restaurant() {
	        //Need default constructor for JPA to function correctly
    }

////////////////////////////////////////////////////////////////////////////////
	public Restaurant(String id, String name, String address1, 
			String city, String state, int zip, Double lat, Double lng, 
			String telephone, String tags, String website, String genre, 
			String hours, String attire) {
		
		this.id  = id;
		this.name = name;
		this.address1 = address1;
		this.city = city;
		this.state = state;
		this.zip = zip;
		this.lat = lat;
		this.lng = lng;
		this.telephone = telephone;
		this.website = website;
		this.tags = tags;
		this.genre = genre;
		this.hours = hours;
		this.attire = attire;
		
	}
	
}
