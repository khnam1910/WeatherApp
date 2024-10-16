/* eslint-disable quotes */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ReactNode } from 'react';
import { StyleProp, TouchableOpacity, View, ViewStyle } from 'react-native';
import globalStyles from '../utils/styles/globalStyles.js';

interface Props {
    children: ReactNode;
    justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | undefined;
    onPress?: () => void;
    styles?: StyleProp<ViewStyle>
}

const RowComponent = (props: Props) => {

    const { children, justify, onPress, styles } = props;

    const localStyle =
        [
            globalStyles.row,
            { justifyContent: justify ?? 'center' },
            styles,
        ]
    return onPress ?
        (
            <TouchableOpacity style={localStyle} onPress={onPress ? () => onPress() : undefined}>{children}</TouchableOpacity>
        ) : (
            <View style={localStyle}>
                {children}
            </View>
        )
}


export default RowComponent;


