import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import TextComponent from './TextComponent';
import { fontFamily } from '../utils/constants/fontFamily';
import colors from '../utils/constants/colors';

const CardItemComponent = ({ day, date, icon, temperature, description }) => (
    <View style={localStyles.cardContainer}>
        {/* Ngày và giờ */}
        <TextComponent
            text={new Date(day).toLocaleDateString('en-US', {
                weekday: 'short',
                month: 'short',
                day: 'numeric',
            })}
            color={colors.white}
            font={fontFamily.semiBold}
            flex={0}
            styles={localStyles.dateText}
        />
        <TextComponent
            text={new Date(date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })}
            color={colors.white}
            font={fontFamily.regular}
            flex={0}
            styles={localStyles.timeText}
        />

        {/* Biểu tượng thời tiết */}
        <Image source={{ uri: icon }} style={localStyles.iconStyle} />

        {/* Nhiệt độ */}
        <TextComponent
            text={`${temperature.toFixed(1)}\u00B0`}
            size={22}
            color={colors.white}
            font={fontFamily.bold}
            flex={0}
            styles={localStyles.tempText}
        />

        {/* Mô tả thời tiết */}
        <TextComponent
            text={description}
            color={colors.white}
            font={fontFamily.regular}
            flex={0}
            styles={localStyles.descriptionText}
        />
    </View>
);

export default CardItemComponent;

const localStyles = StyleSheet.create({
    cardContainer: {
        marginHorizontal: 10,
        marginVertical: 20,
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // Giữ nền mờ
        alignItems: 'center',
        justifyContent: 'center',
        width: 110,
    },
    dateText: {
        marginBottom: 5,
        fontSize: 14,
    },
    timeText: {
        marginBottom: 10,
        fontSize: 13,
    },
    iconStyle: {
        width: 44,
        height: 44,
        marginBottom: 10,
    },
    tempText: {
        marginBottom: 5,
        fontSize: 20,
    },
    descriptionText: {
        fontSize: 12,
        textAlign: 'center',
    },
});

