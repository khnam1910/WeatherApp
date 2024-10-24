/* eslint-disable react-hooks/exhaustive-deps */
import { GlobalSearch } from 'iconsax-react-native';
import React, { useState, useCallback } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../utils/constants/colors';
import { debounce } from 'lodash';

const SearchComponent = ({ onSearch }: any) => {

    const [showSearch, setShowSearch] = useState(false);

    const handleSearch = useCallback(debounce(onSearch, 1200), []);

    return (
        <View style={[localStyles.containerInput, { backgroundColor: showSearch ? colors.gray2 : 'transparent' }]}>
            {showSearch && (
                <TextInput
                    onChangeText={handleSearch}
                    style={localStyles.input}
                    placeholder="Search city"
                    placeholderTextColor={colors.desc}
                />
            )}
            <TouchableOpacity onPress={() => setShowSearch(!showSearch)} style={localStyles.containerIcon}>
                <GlobalSearch size={20} color={colors.text} />
            </TouchableOpacity>
        </View>
    );
};

export default SearchComponent;

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
    containerIcon: {
        paddingHorizontal: 20,
        backgroundColor: colors.gray2,
        borderRadius: 100,
        paddingVertical: 20,
        justifyContent: 'space-between',
    },
});
