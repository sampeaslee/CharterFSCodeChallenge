import React, { useState, useEffect  } from 'react';
import './App.css';
import  './css/style.css'
import RestaurantTable from "./component/RestaurantTable.js";
import Pagination from './component/Pagination.js';
import StateFilterMenu from './component/StateFilterMenu.js';
import GenreFilterMenu from './component/GenreFilterMenu.js';
import mergeSort from "./sort.js"



const App = () => {

    var dataFromBackend = "";

    //Intialize states of the application 
    const [isLoading, setLoading] = useState([true])
    const [restData, setRestData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [restsPerPage] = useState(10);
    const [filterByState, setFilterByState] = useState("");
    const [filterByGenre, setFilterByGenre] = useState("");
    const [filterByCity, setFilterByCity] = useState("");
    const [filterStatus, setFilterStatus] = useState("Filters On")
    const [checkBox, setCheckBox] = useState("checked")

    //Retrieves all restaurant data from the database
    const getAllData = async () => {
        let response = await fetch('/sendAllData');;
        dataFromBackend = await response.json();
        setRestData(dataFromBackend);
    }

    //Initial loading of the page (Loads all restaurant data)
    useEffect(() => {
        setRestData("Loading");
        getAllData();
        setLoading(false)
    }, []);

    // Get 10 Retaurants from array containing restaurant data
    const indexOfLastRest = currentPage * restsPerPage;
    const indexOfFirstRest = indexOfLastRest - restsPerPage;
    const currentRests = restData.slice(indexOfFirstRest, indexOfLastRest);

    // Make call to backend to get restaurant data filtered by state
    const setStateFilter = async (state) => {
        setFilterByState(state)
        if (checkBox === "checked") {
            console.log(filterByCity)
            let response = await fetch('/filterData?state=' + state
                + "&city=" + filterByCity + "&genre=" + filterByGenre);
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        } else {
            let response = await fetch('/filterData?state='
                + "&city=" + filterByCity + "&genre=");
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);

        }
    }

    //Make call to backend to get restaurant data filtered by genre 
    const setGenreFilter = async (genre) => {
        setFilterByGenre(genre)
        if (checkBox === "checked") {
            let response = await fetch('/filterData?state=' + filterByState
                + "&city=" + filterByCity + "&genre=" + genre);
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        } else {
            let response = await fetch('/filterData?state='
                + "&city=" + filterByCity + "&genre=");
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        }
      
    }
    //Make call to backend to get restaurant data filtered by city
    const searchByCity = async (event) => {
        event.preventDefault();
        if (checkBox === "checked") {
            let response = await fetch('/filterData?state=' + filterByState
                + "&city=" + filterByCity + "&genre=" + filterByGenre);
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        } else {
            let response = await fetch('/filterData?state='
                + "&city=" + filterByCity + "&genre=");
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        }      
    }

    //Sorts the current restaurant data
    const sortByName = () => {
        var sortedData = mergeSort(restData)
        setRestData(sortedData); 
    }

    //Turns on and off filters 
    const checkAddress = async () => {
        if (checkBox === "checked") {
            setCheckBox("uncheck")
            setFilterStatus("Filters Off")
            if (filterByState !== "" || filterByGenre !== "") {
                let response = await fetch('/filterData?state='
                    + "&city=" + filterByCity + "&genre=");
                dataFromBackend = await response.json();
                setRestData(dataFromBackend);
            }         
        } else {
            setCheckBox("checked")
            setFilterStatus("Filters On")
            let response = await fetch('/filterData?state=' + filterByState
                + "&city=" + filterByCity + "&genre=" + filterByGenre);
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
        }
    }

    return (
        <div>
            <div className="header">          
                <p className="title"> Restaurant Information </p>            
            </div> 
            <div class="row">
                <div class="column">
                    <GenreFilterMenu genreFilter={setGenreFilter} />
                    <StateFilterMenu stateFilter={setStateFilter} />
                    <button onClick={sortByName} className="sortbutton">Sort By Name</button>                 
                </div>
                <div class="column">
                    <form>
                        <input type="checkbox" onChange={checkAddress} defaultChecked={checkBox} />
                        <label>{filterStatus}</label>
                    </form>
                </div>
                <div class="column">
                    <form onSubmit={searchByCity} action="filterByCity" className="cityform" >
                        <input type="text" name="city" placeholder="Search By City"
                            onChange={event => setFilterByCity(event.target.value)} className="cityinput" />
                        <input type="submit" value="Submit" className="citysubmitbutton" />
                    </form>
                </div>             
            </div> 
            <div  >
               <RestaurantTable restaurantData={currentRests} state={filterByState}
                    genre={filterByGenre} city={filterByCity} />
                </div>
            <Pagination
                restsPerPage={restsPerPage}
                totalRests={restData.length}
                paginate={setCurrentPage}
            />
        </div>
    );
};

export default App;