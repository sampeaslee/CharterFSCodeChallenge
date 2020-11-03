import React from 'react';

const GenreFilterMenu = ({ genreFilter }) => {

    function onChange(event) {
        var index = event.nativeEvent.target.selectedIndex;
        console.log(event.nativeEvent.target[index].text);
        genreFilter(event.nativeEvent.target[index].text);
    }
    return (

        <select onChange={onChange} >
            <option value="All Genres" >All Genres</option>
            <option value="American">American</option>
            <option value="Asian">Asian</option>
            <option value="Bakery">Bakery</option>
            <option value="Belgian">Belgian</option>
            <option value="Bistro">Bistro</option>
            <option value="British">British</option>
            <option value="Cafe">Cafe</option>
            <option value="Coffee">Coffee</option>
            <option value="Contemporary">Contemporary</option>
            <option value="Continental">Continental</option>
            <option value="Eclectic">Eclectic</option>
            <option value="European">European</option>
            <option value="French">French</option>
            <option value="Fusion">Fusion</option>
            <option value="Grill">Grill</option>
            <option value="Hawaiian">Hawaiian</option>
            <option value="International">International</option>
            <option value="Irish">Irish</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Kosher">Kosher</option>
            <option value="Oysters">Oysters</option>
            <option value="Pacific Rim">Pacific Rim</option>
            <option value="Pasta">Pasta</option>
            <option value="Polynesian">Polynesian</option>
            <option value="Sandwiches">Sandwiches</option>
            <option value="Seafood">Seafood</option>
            <option value="Steak">Steak</option>
            <option value="Sushi">Sushi</option>
            <option value="Tea">Tea</option>
            <option value="Traditional">Traditional</option>
            <option value="Vegetarian">Vegetarian</option>
            <option value="Vietnamese">Vietnamese</option>
        </select>

    );

};

export default GenreFilterMenu;

