import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    button: {
        width: '100%',
        minHeight: 65,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 15,
        paddingHorizontal: 10,
    },
    buttonText: {
        fontSize: 22,
        lineHeight: 22,
        textAlign: 'center',
        letterSpacing: -0.5,
    },
    // Варианты кнопок
    grayButton: {
        backgroundColor: '#333333',
    },
    whiteButton: {
        backgroundColor: 'white',
    },
    // Варианты текста
    whiteText: {
        color: '#FFFFFF',
    },
    blackText: {
        color: '#000000',
        fontWeight: '500',
        fontSize: 20,
    },
}); 