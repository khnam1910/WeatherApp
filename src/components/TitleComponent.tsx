/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleProp, ViewStyle } from 'react-native'
import React from 'react'
import TextComponent from './TextComponent';
import { fontFamily } from '../utils/constants/fontFamily';

interface Props {
    text: string,
    font?: string,
    size?: number,
    color?: string,
    marginBottom?: number
    styles?: StyleProp<ViewStyle>
}

const TitleComponent = (props: Props) => {

    const { text, font, size, color, marginBottom, styles } = props;
    return (
        <TextComponent
            marginBottom={marginBottom ?? 0}
            size={size ?? 20}
            font={font ?? fontFamily.bold}
            color={color}
            text={text}
            styles={styles}
        />
    )
}

export default TitleComponent