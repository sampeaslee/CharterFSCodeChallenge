import React, { useState, useEffect} from 'react';
import './App.css';
import style from './css/style.css'
import RestaurantTable from "./component/RestaurantTable.js";
import axios from "axios";
import Pagination from './component/Pagination.js';



const App = () => {

    useEffect(async () => {
        let response = await fetch('/home');;
        let body = await response.json();
        console.log(body)



        setRestData(body);


    }, []);

  /*  useEffect(() => {
        // POST request using axios inside useEffect React hook
        const article = { title: 'React Hooks POST Request Example' };
        axios.post('http://localhost:8080/test', article)
            .then(console.log("Sam"));

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, []);*/

    const [restData, setRestData] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [restsPerPage] = useState(10);



    // Get 10 Retaurants 
    const indexOfLastRest = currentPage * restsPerPage;
    const indexOfFirstRest = indexOfLastRest - restsPerPage;
    const currentPosts = restData.slice(indexOfFirstRest, indexOfLastRest);
    console.log(currentPosts);
    // Change page nuumber when clicked 
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (

        <div className='container mt-5'>
            <h1 className='text-primary mb-3'> Restaurant Information</h1>
            <RestaurantTable restaurantData={currentPosts} />
            <Pagination
                restsPerPage={restsPerPage}
                totalRests={restData.length}
                paginate={paginate}
            />
        </div>
    );
};

export default App;