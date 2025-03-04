import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    symbol: string;
    description: string;
    onPress: () => void;
}

const WatchlistItem: React.FC<Props> = ({ symbol, description, onPress }) => {
    return (
        <View style={styles.watchlistItem}>
            <Text style={styles.stockSymbol}>{symbol}</Text>
            <Text style={styles.stockDescription}>{description}</Text>
            <TouchableOpacity style={styles.button} onPress={onPress}>
                <Text style={styles.buttonText}>See {symbol} Report</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    watchlistItem: {
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        paddingVertical: 12,
    },
    stockSymbol: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginBottom: 4,
    },
    stockDescription: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
        lineHeight: 20,
    },
    button: {
        backgroundColor: '#000000',
        padding: 12,
        borderRadius: 8,
        alignItems: 'center',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
    },
});

export default WatchlistItem; 