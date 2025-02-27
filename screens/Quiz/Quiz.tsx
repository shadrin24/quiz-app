import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/types';
import QuizStep from './QuizStep';
import QuizIntro from './QuizIntro';
import { quizQuestions } from './quizData';

const Quiz: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleSelect = (option: string) => {
        // Сохраняем ответ
        setAnswers(prev => ({
            ...prev,
            [quizQuestions[currentStep].id]: option
        }));

        // Переходим к следующему вопросу или завершаем квиз
        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            // Здесь можно добавить логику обработки всех ответов
            console.log('Quiz completed', answers);
            // navigation.navigate('QuizResults', { answers });
        }
    };

    const currentQuestion = quizQuestions[currentStep];

    return currentQuestion.type === 'intro' ? (
        <QuizIntro
            navigation={navigation}
            question={currentQuestion.question}
            text={currentQuestion.text}
            options={currentQuestion.options}
            progress={(currentStep + 1) / quizQuestions.length}
            onSelect={handleSelect}
            textBold={currentQuestion.textBold}
            textRegular={currentQuestion.textRegular}
            rowGap={currentQuestion.rowGap}
        />
    ) : (
        <QuizStep
            navigation={navigation}
            question={currentQuestion.question}
            options={currentQuestion.options}
            progress={(currentStep + 1) / quizQuestions.length}
            onSelect={handleSelect}
            textBold={currentQuestion.textBold}
            rowGap={currentQuestion.rowGap}
        />
    );
};

export default Quiz; 