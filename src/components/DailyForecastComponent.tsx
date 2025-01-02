import { Calendar } from 'iconsax-react-native';
import React from 'react';
import { ScrollView } from 'react-native';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';
import TextComponent from './TextComponent';
import SectionComponent from './SectionComponent';
import CardItemComponent from './CardItemComponent';

const DailyForecast = ({ weather }) => {
    // In dữ liệu vào console
    console.log('Forecast data:', JSON.stringify(weather?.forecast?.forecastday, null, 2));


    return (
        <SectionComponent>
            <RowComponent justify="flex-start">
                <Calendar size={20} color={colors.white} />
                <TextComponent text=" Daily forecast" size={20} color={colors.white} />
            </RowComponent>
            <RowComponent styles={{ marginTop: -10 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {weather?.forecast?.forecastday?.map((day, dayIndex) => (
                        day.hour.map((hourData, hourIndex) => (
                            <CardItemComponent
                                key={`${dayIndex}-${hourIndex}`}
                                day={day.date} // Ngày
                                date={hourData.time} // Giờ
                                icon={`https:${hourData.condition.icon}`} // Biểu tượng
                                temperature={hourData.temp_c} // Nhiệt độ
                                description={hourData.condition.text} // Mô tả
                            />
                        ))
                    ))}
                </ScrollView>
            </RowComponent>
        </SectionComponent>
    );
};

export default DailyForecast;
