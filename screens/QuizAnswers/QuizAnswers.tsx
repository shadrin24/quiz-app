import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { quizQuestions } from '../Quiz/quizData';
import { styles } from './styles';
import { QuizAnswerItem } from './components/QuizAnswerItem';
import { BackHeader } from '../../components/BackHeader';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'QuizAnswers'>;
}

interface QuizAnswer {
    question: string;
    answer: string;
}

const QuizAnswers: React.FC<Props> = ({ navigation, route }) => {
    const [answers, setAnswers] = useState<QuizAnswer[]>([]);

    useEffect(() => {
        const { answers: answerData } = route.params;
        if (answerData) {
            const questionScreens = quizQuestions.filter(q => 
                q.type === 'question' && 
                !q.options?.includes('Next') && 
                !q.options?.includes('Continue')
            );
            
            const formattedAnswers = questionScreens
                .map(question => {
                    const answer = answerData[question.id];
                    if (answer) {
                        return {
                            question: question.question,
                            answer: answer
                        };
                    }
                    return null;
                })
                .filter((answer): answer is QuizAnswer => answer !== null);
            
            setAnswers(formattedAnswers);
        }
    }, [route.params]);

    return (
        <View style={styles.container}>
            <BackHeader title="TradeGenius" navigation={navigation} />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentHeader}>
                    <Text style={styles.subtitle}>Your Quiz Answers</Text>
                </View>
                <View style={styles.answersContainer}>
                    {answers.map((item, index) => (
                        <QuizAnswerItem
                            key={index}
                            question={item.question}
                            answer={item.answer}
                        />
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default QuizAnswers; 