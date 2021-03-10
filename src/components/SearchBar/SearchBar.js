import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from '../../store/weather/actions';

import './SearchBar.css';

export default function SearchBar() {
    const [valueSearch, setValueSearch] = useState('');
    const { error } = useSelector((state) => state.weather);
    const dispatch = useDispatch();

    const onSearchChange = (event) => {
        const { value } = event.target;

        setValueSearch(value)
    };

    const onSearchClick = (city) => {
        dispatch(fetchWeather(city))
    };

    return (
        <>
            <label>City</label>
            <input
                value={valueSearch}
                placeholder="Enter the place"
                onChange={(e) => onSearchChange(e)}
                className={error ? "error search-input" : "search-input"}
            />
            <button onClick={() => onSearchClick(valueSearch)}>Search</button>
        </>
    )
};
