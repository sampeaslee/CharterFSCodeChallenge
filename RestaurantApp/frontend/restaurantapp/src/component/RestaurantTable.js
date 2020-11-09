import React from 'react';
import  '../css/table.css';

/**
 * Table to display restaurant data 
 * @param {array} restaurantData- array of restaurant data 
 * @param {string} genre - string containing genre filter state 
 * @param {string} state - string containing state filter state
 * @param {string} city -  string containing city filter state
 */

const RestaurantTable = ({ restaurantData, genre, state, city }) => {
    //Set message to display if users search/filters do no have any matches
    if (state == "") {
    } else {
        state = "State: " + state;
    }

    if (city == "") {
    } else {
        city = "City: " + city;
    }

    if (genre == "") {
    } else {
        genre = "Genre: " + genre;
    }

    if (restaurantData.length == 0) {
        return (
            <div className = "searchstatus">
                <p>Sorry no restaurants match your search parameters.</p>
                <p>{state}</p>
                <p>{city}</p>
                <p>{genre}</p>
            </div>

        );
    } else {

        return (        
            <table id  =  "restTable">
                <tbody  >
                    <tr>
                        <th>Name</th>
                        <th>Genres</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Phone Number</th>
                    </tr>
                    {restaurantData.map(data => (         
                        <tr>
                            <td>{data.name.trim()}</td>
                            <td>{data.genre.trim().split(",").join(", ")}</td>
                            <td>{data.city.trim()}</td>
                            <td>{data.state.trim()}</td>
                            <td>{data.telephone.trim()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
}

export default RestaurantTable;

