import React, { useState, useEffect, Dropdown } from 'react';
import './App.css';
import  './css/style.css'
import RestaurantTable from "./component/RestaurantTable.js";
import Pagination from './component/Pagination.js';
import StateFilterMenu from './component/StateFilterMenu.js';
import GenreFilterMenu from './component/GenreFilterMenu.js';
import mergeSort from "./sort.js"



const App = () => {

 

    var dataFromBackend = "";


    const [restData, setRestData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [restsPerPage] = useState(10);
    const [searchType, setSearchType] = useState("");
    const [fiterByState, setFilterByState] = useState("");
    const [fiterByGenre, setFilterByGenre] = useState("");
    const [filterByCity, setFilterByCity] = useState("");


    //Initial loading of the page (Loads all restaurant data)
    useEffect(async () => {

        if (searchType == "") {

            let response = await fetch('/sendAllData');;
            dataFromBackend = await response.json();
            setRestData(dataFromBackend);
            
            
        }

    }, []);

   /* //Get data sorted by name
    async function sortByName() {
        let response = await fetch('/sortByName');
        dataFromBackend = await response.json();
        setRestData(dataFromBackend);
    }*/

    // Get 10 Retaurants 
    const indexOfLastRest = currentPage * restsPerPage;

    const indexOfFirstRest = indexOfLastRest - restsPerPage;

    const currentRests = restData.slice(indexOfFirstRest, indexOfLastRest);


    // Change page nuumber when clicked 
    const paginate = (pageNumber) =>  setCurrentPage(pageNumber);
    
    const setStateFilter = async (state) => {
       
        setFilterByState(state)

        let response = await fetch('/filterByState?state=' + state
            + "&city=" + filterByCity + "&genre=" + fiterByGenre);
       dataFromBackend = await response.json();
       setRestData(dataFromBackend);



    }

    const setGenreFilter = async (genre) => {
        setFilterByGenre(genre)
        console.log(filterByCity)
        let response = await fetch('/filterByState?state=' + fiterByState
            + "&city=" + filterByCity + "&genre=" + genre);
        dataFromBackend = await response.json();
        setRestData(dataFromBackend);
    }

    const searchByCity = async (event) => {
        event.preventDefault();

        let response = await fetch('/filterByState?state=' + fiterByState
            + "&city=" + filterByCity + "&genre=" + fiterByGenre);
        dataFromBackend = await response.json();
        setRestData(dataFromBackend); 
        var a = await mergeSort(dataFromBackend)
        console.log(a);
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
                </div>
                <div class="column">
                    <p className="statusmessage"> Restaurant Information </p>
                </div>
                <div class="column">
                    <form onSubmit={searchByCity} action="filterByCity" className="cityform" >

                        <input type="text" name="city" placeholder="Search By City"
                            onChange={event => setFilterByCity(event.target.value)} className="cityinput" />
                        <input type="submit" value="Submit" className="citysubmitbutton" />
                    </form>
                </div>
               
            </div> 

           
            {/** <div className="row" >

       

                <GenreFilterMenu genreFilter={setGenreFilter} />

         
                <StateFilterMenu stateFilter={setStateFilter} />
   
      
                <button onClick={sortByName} className="sortbutton">Sort By Name</button>
            </div>**/}

            <div className="column2" >


                <RestaurantTable restaurantData={currentRests} state={fiterByState}
                    genre={fiterByGenre} city={filterByCity} />
                </div>
         
            <Pagination
                restsPerPage={restsPerPage}
                totalRests={restData.length}
                paginate={paginate}
            />
        
        </div>
    );
};

export default App;