import React from 'react';

const RestaurantTable = ({ restaurantData }) => {

    const items = [];

    return (

        <table id="simple-board">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Genres</th>
                    <th>City</th>
                    <th>State</th>
                    <th>Phone Number</th>             
                </tr>
                {restaurantData.map(data => (
                    <tr>
                        <td>{data.name}</td>
                        <td>{data.genre}</td>
                        <td>{data.city}</td>
                        <td>{data.state}</td>
                        <td>{data.telephone}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default RestaurantTable;
