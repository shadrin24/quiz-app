import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';

interface Props {
    question: string;
    answer: string;
}

export const QuizAnswerItem: React.FC<Props> = ({ question, answer }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.question}>{question}</Text>
            <Text style={styles.answer}>{answer}</Text>
        </View>
    );
}; 