import React, { useState, useEffect, Dropdown} from 'react';
import './App.css';
import style from './css/style.css'
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


  /*  useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { title: 'React Hooks POST Request Example' };
        axios.post('http://localhost:8080/test', article)
            .then(console.log("Sam"));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);*/




    // Get 10 Retaurants 
    const indexOfLastRest = currentPage * restsPerPage;

    const indexOfFirstRest = indexOfLastRest - restsPerPage;

    const currentPosts = restData.slice(indexOfFirstRest, indexOfLastRest);


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
        setRestData(dataFromBackend);
    }


    return (

        <div className='container mt-5'>
            <h1 className='text-primary mb-3'> Restaurant Information</h1>
            <RestaurantTable restaurantData={currentPosts} />
            <Pagination
                restsPerPage={restsPerPage}
                totalRests={restData.length}
                paginate={paginate}
            />

            <button onClick={sortByName}>Sort By Name</button>

            { /*  <button onClick={filterByState}>Filter By State</button>
            / <input onChange={event => filterByState(event.target.value)} />
            */}
            <StateFilterMenu stateFilter={setStateFilter} />
            <GenreFilterMenu genreFilter={setGenreFilter}/>
        </div>
    );
};

export default App;