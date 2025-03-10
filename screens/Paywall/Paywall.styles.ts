import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 16,
        justifyContent: 'space-between',
    },
    mainContent: {
        flex: 1,
        justifyContent: 'space-between',
        paddingTop: 150,
        paddingBottom: 70,
    },
    titleText: {
        fontSize: 34,
        fontFamily: 'SF-Pro',
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 41,
        letterSpacing: -1.2,
    },
    descriptionText: {
        fontSize: 24,
        fontFamily: 'SF-Pro',
        fontWeight: '600',
        color: '#fff',
        textAlign: 'center',
        marginBottom: 40,
        lineHeight: 28,
        letterSpacing: -1.1,
    },
    priceContainer: {
        marginBottom: 30,
    },
    priceRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        gap: 40,
    },
    priceColumn: {
        alignItems: 'center',
        gap: 10,
    },
    oldPrice: {
        fontSize: 24,
        fontFamily: 'SF-Pro',
        lineHeight: 28,
        color: '#fff',
        fontWeight: '700',
        textDecorationLine: 'line-through',
        transform: [{ scaleX: 1.1 }],
    },
    newPrice: {
        fontSize: 24,
        fontFamily: 'SF-Pro',
        lineHeight: 28,
        letterSpacing: -1.1,
        color: '#fff',
        fontWeight: '600',
    },
    priceDetails: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 15,
    },
    priceNote: {
        fontSize: 17,
        fontFamily: 'SF-Pro',
        color: '#fff',
        transform: [{ scaleX: 1.1 }],
    },
    guaranteeText: {
        fontSize: 17,
        fontFamily: 'SF-Pro',
        color: '#fff',
        textAlign: 'center',
        lineHeight: 20,
    },
    bottomContent: {
        gap: 20,
        marginBottom: 20,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    footerText: {
        fontSize: 15,
        lineHeight: 18,
        fontFamily: 'SF-Pro',
        color: '#fff',
        textDecorationLine: 'underline',
    },
}); 