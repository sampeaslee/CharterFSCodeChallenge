import React, { useState, useEffect, Dropdown } from 'react';

import './App.css';
import  './css/style.css'
import RestaurantTable from "./component/RestaurantTable.js";
import axios from "axios";
import Pagination from './component/Pagination.js';
import StateFilterMenu from './component/StateFilterMenu.js';
import GenreFilterMenu from './component/GenreFilterMenu.js'


const App = () => {
    var dataFromBackend = "";


    const [restData, setRestData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [restsPerPage] = useState(10);
    const [searchType, setSearchType] = useState("");
    const [fiterByState, setFilterByState] = useState("");
    const [fiterByGenre, setFilterByGenre] = useState("");
    const [filterByName, setFilterByName] = useState("");


    //Initial loading of the page (Loads all restaurant data)
    useEffect(async () => {

        if (searchType == "") {

            let response = await fetch('/sendAllData');;
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        }

    }, []);

    //Get data sorted by name
    async function sortByName() {
        let response = await fetch('/sortByName');
        dataFromBackend = await response.json();
        setRestData(dataFromBackend);
    }

    // Get 10 Retaurants 
    const indexOfLastRest = currentPage * restsPerPage;

    const indexOfFirstRest = indexOfLastRest - restsPerPage;

    const currentRests = restData.slice(indexOfFirstRest, indexOfLastRest);


    // Change page nuumber when clicked 
    const paginate = (pageNumber) =>  setCurrentPage(pageNumber);
    
    const  setStateFilter = async (state) => {
        setFilterByState(state)
        let response = await fetch('/filterByState?state=' + state);
        dataFromBackend = await response.json();
        console.log(dataFromBackend);
        setRestData(dataFromBackend);
    }

    const setGenreFilter = async (genre) => {
        setFilterByGenre(genre)
        let response = await fetch('/filterByGenre?genre=' + genre);
        dataFromBackend = await response.json();
        console.log(dataFromBackend)
        setRestData(dataFromBackend);
    }

    const setNameFilter = async (name) => {
        setFilterByName(name);
        let response = await fetch('/filterByName?name=' + name);
        dataFromBackend = await response.json();
        console.log(dataFromBackend)
        setRestData(dataFromBackend);
    }


    return (
        <div>
            <h1 id="title"> Restaurant Information</h1>
            <div className="row" >
                <div className="column1" >
                    
                    <p> Filter By Genre</p>

                    <GenreFilterMenu genreFilter={setGenreFilter} />  

                    <p> Filter By State</p>
                    <StateFilterMenu stateFilter={setStateFilter} />
                </div>
                <div className="column2" >
                    <RestaurantTable restaurantData={currentRests} />
                </div>
     
            { /*  <button onClick={filterByState}>Filter By State</button>
            / <input onChange={event => filterByState(event.target.value)} />
            */}
                <div className="column3" >
                    <form>
                    <button onClick={setNameFilter}>Search By City</button>
                        <input onKeyPress={event => setNameFilter(event.target.value)} />
                        </form>

                          
                </div>
            </div>
            <Pagination
                restsPerPage={restsPerPage}
                totalRests={restData.length}
                paginate={paginate}
            />
            <button onClick={sortByName}>Sort By Name</button>
        </div>
    );
};

export default App;