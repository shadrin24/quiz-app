import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface Props {
    title: string;
    buttonText: string;
    onPress: () => void;
    disabled?: boolean;
}

const UserDataCard: React.FC<Props> = ({ title, buttonText, onPress, disabled = false }) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity 
                style={[styles.button, disabled && styles.buttonDisabled]}
                onPress={onPress}
                disabled={disabled}
            >
                <Text style={[styles.buttonText, disabled && styles.buttonTextDisabled]}>
                    {buttonText}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
    },
    button: {
        backgroundColor: '#000000',
        borderRadius: 8,
        padding: 12,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#CCCCCC',
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
    },
    buttonTextDisabled: {
        color: '#666666',
    },
});

export default UserDataCard; 