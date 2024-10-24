import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextComponent from './TextComponent';
import { fontFamily } from '../utils/constants/fontFamily';
import colors from '../utils/constants/colors';

const CardItemComponent = () => (
    <View style={localStyles.forecastItem}>
        <Image source={require('../../assets/image/maxresdefault.jpg')} style={localStyles.forecastImage} />
        <TextComponent text="Monday" color={colors.white} font={fontFamily.semiBold} flex={0} />
        <TextComponent text={`23\u00B0`} size={20} color={colors.white} font={fontFamily.semiBold} flex={0} />
    </View>
);

export default CardItemComponent;


const localStyles = StyleSheet.create({
    forecastImage: {
        width: 44,
        height: 44,
        aspectRatio: 1,
    },
    forecastItem: {
        marginHorizontal: 5,
        flexShrink: 1,
        marginTop: 30,
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor: colors.gray2,
        alignItems: 'center',
        padding: 10,
        width: 96,
    },
}) 
