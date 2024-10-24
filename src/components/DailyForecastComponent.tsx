import { Calendar } from 'iconsax-react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import SectionComponent from './SectionComponent';
import CardItemComponent from './CardItemComponent';

const DailyForecast = () => (
    <SectionComponent>
        <RowComponent justify="flex-start">
            <Calendar size={20} color={colors.white} />
            <TextComponent text=" Daily forecast" size={20} color={colors.white} />
        </RowComponent>
        <RowComponent styles={{ marginTop: -10 }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {Array(6).fill(0).map((_, index) => (
                    <CardItemComponent key={index} />
                ))}
            </ScrollView>
        </RowComponent>
    </SectionComponent>
);

export default DailyForecast;
