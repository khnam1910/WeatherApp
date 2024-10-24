/* eslint-disable comma-dangle */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import globalStyles from '../utils/styles/globalStyles'
import colors from '../utils/constants/colors'
import { fontFamily } from '../utils/constants/fontFamily'


interface Props {
    text: string,
    size?: number,
    color?: string,
    font?: string,
    flex?: number,
    marginBottom?: number,
    styles?: StyleProp<TextStyle>
}

const TextComponent = (props: Props) => {

    const { text = "", size, color, font, flex, marginBottom, styles } = props

    return (
        <View>
            <Text style={[
                globalStyles.text,
                {
                    marginBottom: marginBottom ?? 0,
                    flex: flex ?? 1,
                    fontSize: size ?? 14,
                    color: color ?? colors.desc,
                    fontFamily: font ?? fontFamily.regular,
                },
                styles
            ]}>
                {text ? text : ""}
            </Text>
        </View>
    )
}



export default TextComponent