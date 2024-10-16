/* eslint-disable react-native/no-inline-styles */
import { GlobalSearch } from 'iconsax-react-native';
import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import colors from '../utils/constants/colors';
import RowComponent from './RowComponent';

interface Props {
    placeholder?: string,
    onPress?: () => void,
    value?: string,
    onChange?: (name: string, value: string) => void,
}

const InputComponent = (props: Props) => {
    const { placeholder, onPress, value } = props;

    const [showSearch, setShowSearch] = useState(false);

    return (
        <View>
            <RowComponent justify='flex-end'>
                <View style={[localStyles.containerInput, { backgroundColor: showSearch ? colors.gray2 : 'transparent' }]}>
                    {
                        showSearch ? (
                            <TextInput
                                style={[
                                    localStyles.input,
                                ]}
                                placeholder={placeholder}
                                placeholderTextColor={colors.desc}
                                value={value}
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

        </View>
    );
};

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
        marginHorizontal: 20
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

export default InputComponent;
