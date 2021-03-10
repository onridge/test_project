import { SET_WEATHER_DATA, FETCH_LOADING, SET_ERRORS } from './types';

const initialState = {
    isLoading: false,
    weatherData: [],
    error: '',
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SET_WEATHER_DATA:
            return {
                ...state,
                isLoading: false,
                weatherData: action.payload,
            };
        case FETCH_LOADING:
            return {
                ...state,
                isLoading: true,
            };
        case SET_ERRORS:
            return {
                ...state,
                error: action.payload
            };
        default:
            return state;
    }
}