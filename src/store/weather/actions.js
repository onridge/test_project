import {
    SET_WEATHER_DATA,
    FETCH_LOADING,
    SET_ERRORS,
} from './types';

import axios from 'axios';

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';

export const fetchWeather = (city) => {
    return (dispatch) => {
        dispatch(setFetchLoading());

        axios
            .post(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
            .then((res) => {
                if (res.status === 200) {
                    const { list } = res.data;

                    dispatch(getWeatherData(list));
                }

                dispatch(getErrors(res.data.message));
            })
            .catch(({ message }) => {
                dispatch(getErrors(message));
            });
    };
};

const getWeatherData = (payload) => ({
    type: SET_WEATHER_DATA,
    payload,
});

const setFetchLoading = () => ({
    type: FETCH_LOADING
});

const getErrors = (error) => ({
    type: SET_ERRORS,
    payload: error
});