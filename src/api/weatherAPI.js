import axios from "axios";
import { apiKey } from '../utils/constants/apiKey'
import { ReceiptText } from "iconsax-react-native";

const forecastEndPoint = params => `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=10&aqi=no&alerts=no`
const locationsEndPoint = params => `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint) => {
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    }
    catch (err) {
        console.log('error:', err);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecastEndPoint(params));
}

export const fetchLocations = params => {
    return apiCall(locationsEndPoint(params));
}

