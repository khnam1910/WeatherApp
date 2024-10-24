import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextComponent from './TextComponent';
import colors from '../utils/constants/colors';

const WeatherDetail = ({ icon, text }) => (
    <View style={localStyles.detailContainer}>
        {icon}
        <TextComponent text={` ${text}`} size={20} color={colors.white} flex={0} />
    </View>
);


export default WeatherDetail;


const localStyles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
    },
})