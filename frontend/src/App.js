import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data.message));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
                {/* Display the data from Flask API here */}
                <h1>{data}</h1>

                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
