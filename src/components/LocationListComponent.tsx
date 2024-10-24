import { Location } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../utils/constants/colors';
import { fontFamily } from '../utils/constants/fontFamily';
import SectionComponent from './SectionComponent';
import TextComponent from './TextComponent';


const LocationList = ({ locations, onLocationSelect }: any) => {
    if (locations.length === 0) return null;

    return (
        <SectionComponent styles={localStyles.locationList}>
            {locations.map((loc: any, index: number) => {
                const borderStyle = index + 1 !== locations.length ? localStyles.borderBottom : {};
                return (
                    <TouchableOpacity
                        key={loc?.id || index}
                        onPress={() => onLocationSelect(loc)}
                        style={[localStyles.locationItem, borderStyle]}
                    >
                        <Location size={20} color={colors.blue} />
                        <TextComponent
                            text={`${loc?.name}, ${loc?.country}`}
                            flex={0}
                            font={fontFamily.semiBold}
                            color={colors.gray}
                            styles={localStyles.locationText}
                        />
                    </TouchableOpacity>
                );
            })}
        </SectionComponent>
    );
};

export default LocationList;


const localStyles = StyleSheet.create({
    locationText: {
        marginLeft: 10,
    },
    borderBottom: {
        borderBottomColor: colors.gray2,
        borderBottomWidth: 2,
    },
    locationItem: {
        flexDirection: 'row',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    locationList: {
        backgroundColor: colors.white,
        borderRadius: 15,
        position: 'absolute',
        top: 70,
        marginHorizontal: 20,
        width: '100%',
        elevation: 10,
        zIndex: 100,
    },
})