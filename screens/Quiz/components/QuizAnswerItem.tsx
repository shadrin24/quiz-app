import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface QuizAnswerItemProps {
    question: string;
    answer: string;
}

export const QuizAnswerItem: React.FC<QuizAnswerItemProps> = ({ question, answer }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answer}>{answer}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 32,
    },
    question: {
        fontSize: 31,
        lineHeight: 37,
        color: 'white',
        marginBottom: 18,
        fontFamily: 'SF-Pro',
        fontWeight: '700',
    },
    answer: {
        fontSize: 20,
        lineHeight: 31,
        color: 'white',
        fontFamily: 'SF-Pro',
        paddingBottom: 15,
    },
}); 