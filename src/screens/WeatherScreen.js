import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import InputComponent from '../components/InputComponent'
import RowComponent from '../components/RowComponent'
import colors from '../utils/constants/colors'
import { Drop, GlobalSearch, Location, Sun1, Wind } from 'iconsax-react-native';
import SectionComponent from '../components/SectionComponent'
import TextComponent from '../components/TextComponent'
import { fontFamily } from '../utils/constants/fontFamily'
import TitleComponent from '../components/TitleComponent'
import { Ionicons } from 'react-native-vector-icons/Ionicons'

const WeatherScreen = () => {
    const [showSearch, setShowSearch] = useState(false);
    const [locations, setLocations] = useState([1, 2, 3]);
    const handelLocation = (loc) => {
        console.log('location, ', loc);
    }

    return (
        <View style={{ flex: 1 }}>
            {/* Input Component */}
            <SectionComponent>
                <RowComponent justify='flex-end'>
                    <View style={[localStyles.containerInput, { backgroundColor: showSearch ? colors.gray2 : 'transparent' }]}>
                        {
                            showSearch ? (
                                <TextInput
                                    style={[
                                        localStyles.input,
                                    ]}
                                    placeholder={'Search city'}
                                    placeholderTextColor={colors.desc}
                                />
                            ) : null
                        }
                        <TouchableOpacity
                            onPress={() => setShowSearch(!showSearch)}
                            style={localStyles.containerIcon}>
                            <GlobalSearch size={20} color={colors.text} />
                        </TouchableOpacity>
                    </View>
                </RowComponent>

                {/* Location List */}
                {
                    locations.length > 0 && showSearch ? (
                        <SectionComponent
                            styles={{
                                backgroundColor: colors.white,
                                borderRadius: 15,
                                position: 'absolute',
                                top: 70,
                                marginHorizontal: 20,
                                width: '100%',
                                elevation: 10,
                                zIndex: 100,
                            }}>
                            {
                                locations.map((loc, index) => {
                                    let showBorder = index + 1 != locations.length;
                                    let borderClass = showBorder ? { borderBottomColor: colors.gray2, borderBottomWidth: 2 } : {};
                                    return (
                                        <TouchableOpacity
                                            onPress={() => handelLocation(loc)}
                                            key={index}
                                            style={[
                                                {
                                                    flexDirection: 'row',
                                                    paddingVertical: 15,
                                                    paddingHorizontal: 10,
                                                },
                                                borderClass,
                                            ]}>
                                            <Location size={20} color={colors.blue} />
                                            <TextComponent
                                                text='Ho Chi Minh City, Viet Nam'
                                                flex={1}
                                                font={fontFamily.semiBold}
                                                color={colors.gray}
                                                styles={{ marginLeft: 10 }}
                                            />
                                        </TouchableOpacity>
                                    );
                                })
                            }
                        </SectionComponent>
                    ) : null
                }

            </SectionComponent>

            {/* Forecast Section */}
            <SectionComponent>
                <RowComponent>
                    <TitleComponent
                        text='Ho Chi Minh City, '
                        color={colors.white}
                        styles={{ flex: 0 }}
                        font={fontFamily.bold}
                    />
                    <TextComponent
                        text='Viet Nam'
                        color={colors.white}
                        size={20}
                        flex={0}
                        font={fontFamily.semiBold}
                    />
                </RowComponent>
            </SectionComponent>

            <SectionComponent styles={{ marginBottom: -200 }}>
                <RowComponent
                    styles={{ flexDirection: 'column' }}
                    justify='flex-start'
                >
                    <Image
                        source={require('../../assets/image/maxresdefault.jpg')}
                        style={{ width: '50%', height: '50%', flex: 0 }}
                    />
                    <TitleComponent
                        text={`23\u00B0`}
                        styles={{ flex: 0 }}
                        size={70}
                    />
                    <TextComponent
                        text='Nhiều mây'
                        styles={{ flex: 0 }}
                        size={32}
                    />
                </RowComponent>
            </SectionComponent>
            <SectionComponent>
                <RowComponent justify='space-between'>
                    <View style={{ flexDirection: 'row' }}>
                        <Wind size={25} color={colors.white} />
                        <TextComponent flex={0} text=' 22km' size={25} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Ionicons name='water-outline' size={25} color={colors.white} />
                        <TextComponent flex={0} text=' 22km' size={25} />
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Sun1 size={25} color={colors.white} />
                        <TextComponent flex={0} text=' 22km' size={25} />
                    </View>
                </RowComponent>
            </SectionComponent>
        </View >
    );
};

export default WeatherScreen;



const localStyles = StyleSheet.create({
    input: {
        paddingHorizontal: 20,
        flex: 1,
        fontSize: 16,
        color: colors.text,
    },
    containerInput: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
    },
    containerIcon:
    {
        paddingHorizontal: 20,
        backgroundColor: colors.gray2,
        borderRadius: 100,
        paddingVertical: 20,
        justifyContent: 'space-between'
    }
});