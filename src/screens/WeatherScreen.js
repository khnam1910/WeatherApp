import React, { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import SectionComponent from '../components/SectionComponent';
import RowComponent from '../components/RowComponent';
import WeatherDetail from '../components/WeatherDetail';
import DailyForecast from '../components/DailyForecastComponent';
import TitleComponent from '../components/TitleComponent';
import TextComponent from '../components/TextComponent';
import colors from '../utils/constants/colors';
import { Wind, Clock } from 'iconsax-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fontFamily } from '../utils/constants/fontFamily';
import { fetchLocations, fetchWeatherForecast } from '../api/weatherAPI';
import SearchComponent from '../components/SearchComponent';
import LocationList from '../components/LocationListComponent';
import { weatherImages } from '../utils/constants/apiKey';


const WeatherScreen = () => {
    const [locations, setLocations] = useState([]);
    const [weather, setWeather] = useState({})

    const handleLocationSearch = value => {
        if (value.length > 2) {
            fetchLocations({ cityName: value }).then(data => {
                console.log('value: ', data)
                setLocations(data)
            })
        }

    };

    const handleLocationSelect = loc => {
        setLocations([]);
        fetchWeatherForecast({
            cityName: loc.name,
            days: '7'
        }).then(data => {
            setWeather(data);
            console.log('got forecast: ', data)
        })
    };

    const { current, location } = weather
    return (
        <View style={{ flex: 1 }}>
            <SectionComponent>
                <RowComponent justify="flex-end">
                    <SearchComponent onSearch={handleLocationSearch} />
                </RowComponent>
                <LocationList locations={locations} onLocationSelect={handleLocationSelect} />
            </SectionComponent>

            <SectionComponent>
                <RowComponent>
                    <TitleComponent text={location?.name} styles={{ marginRight: 5 }} color={colors.white} font={fontFamily.bold} />
                    <TextComponent text={location?.country} color={colors.white} size={20} font={fontFamily.semiBold} flex={0} />
                </RowComponent>
            </SectionComponent>

            <SectionComponent style={localStyles.forecastContainer}>
                <View style={localStyles.centeredContent}>
                    <Image source={{ uri: "https:" + current?.condition?.icon }} style={[localStyles.image, { flex: 0 }]} />
                    <TitleComponent text={current?.temp_c !== undefined ? `${current.temp_c}\u00B0` : ""} size={70} styles={{ flex: 0 }} />
                    <TextComponent text={current?.condition?.text} size={32} color={colors.white} flex={0} />
                </View>
            </SectionComponent>

            <SectionComponent>
                <RowComponent justify="space-between">
                    <WeatherDetail icon={<Wind size={20} color={colors.white} />} text="22km" />
                    <WeatherDetail icon={<Ionicons name="water-outline" size={20} color={colors.white} />} text="87%" />
                    <WeatherDetail icon={<Clock size={20} color={colors.white} />} text="5:05 AM" />
                </RowComponent>
            </SectionComponent>

            <DailyForecast />
        </View>
    );
};

export default WeatherScreen;

const localStyles = StyleSheet.create({
    image: {
        width: 200,
        height: 200,
        aspectRatio: 1,
    },
    centeredContent: {
        alignItems: 'center',
    },
    forecastContainer: {
        marginBottom: 30,
    },
})
