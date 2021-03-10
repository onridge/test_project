import React from 'react';
import { useSelector } from 'react-redux';
import SearchBar from './components/SearchBar/SearchBar'
import ChartPanel from './components/ChartPanel/ChartPanel';

import './App.css';

function App() {
    const { weatherData, error } = useSelector((state) => state.weather);

    return (
        <div className="App">
            <SearchBar />
            {error ?
                <div className="error-label">City is not found</div> :
                <>
                    {!!weatherData.length && <ChartPanel/>}
                </>
            }
            </div>
    );
}

export default App;
