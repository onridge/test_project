import { combineReducers } from 'redux';
import weatherReducers from './weather/reducers';

export default combineReducers({
    weather: weatherReducers,
});