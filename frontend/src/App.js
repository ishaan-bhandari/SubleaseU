import React, { useState, useEffect } from 'react';
import axios from "axios";
//import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState({'message':'nothing'});

    useEffect(() => {
        axios({
          method: "GET",
          url:"/api",
        })
        .then((response) => {
          const res =response.data
          setData(({
            message: res.message}))
        }).catch((error) => {
          if (error.response) {
            console.log(error.response)
            console.log(error.response.status)
            console.log(error.response.headers)
            }
        })}, [])
        //end of new line 

    return (
        <div className="App">
                
                {/* Display the data from Flask API here */}
                <h1>{data.message}</h1>
        </div>
    );
}

export default App;
