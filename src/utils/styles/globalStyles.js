import { StyleSheet } from 'react-native';
import color from '../constants/colors';

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
    inputContainer: {
        backgroundColor: color.gray2,
        borderRadius: 12,
        paddingVertical: 12,
        paddingHorizontal: 12,
    },
    section: {
        marginBottom: 16,
        paddingHorizontal: 20,
    },
    tag: {
        paddingHorizontal: 20,
        paddingVertical: 4,
        borderRadius: 100,
        backgroundColor: color.blue,
    },
    card:
    {
        borderRadius: 12,
    },
    iconContainer: {
        width: 40,
        height: 40,
        borderRadius: 100,
        backgroundColor: 'rgba(0,0,0,0.2)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15
    }
});

export default globalStyles
