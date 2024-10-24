import { StyleSheet } from 'react-native';
import color from '../constants/colors';
import colors from '../constants/colors';

const globalStyles = StyleSheet.create({

    text: {
        fontSize: 14,
        color: color.text,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    section: {
        marginBottom: 16,
        paddingHorizontal: 20,
    },
   
});

export default globalStyles
