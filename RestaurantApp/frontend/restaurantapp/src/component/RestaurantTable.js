import React from 'react';
import  '../css/table.css';


const RestaurantTable = ({ restaurantData, genre,state,city }) => {

    const items = [];

    if (state == "") {
        state = "";
    } else {
        state = "State: " + state;
    }

    if (city == "") {
        city = "";
    } else {
        city = "City: " + city;
    }

    if (genre == "") {
        genre = "";
    } else {
        genre = "Genre: " + genre;
    }


    if (restaurantData.length == 0) {
        return (
            <div className = "searchstatus">
                <p>Sorry no restaurants match your search parameters</p>
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
                            <td>{data.genre.trim()}</td>
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

