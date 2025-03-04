import React, { useState } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import type { RootStackParamList } from '../../navigation/types';
import { quizQuestions } from './quizData';
import QuizIntro from './Templates/QuizIntro';
import QuizStep from './Templates/QuizStep';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { generateDeepLink } from '../../utils/deeplink';

const Quiz: React.FC = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const handleSelect = async (option: string) => {
        const newAnswers = {
            ...answers,
            [quizQuestions[currentStep].id]: option
        };
        setAnswers(newAnswers);

        // Сохраняем ответ только если это не intro
        if (currentQuestion.type !== 'intro') {
            try {
                await AsyncStorage.setItem('quizAnswers', JSON.stringify(newAnswers));
                console.log('Saved quiz answers:', newAnswers);
            } catch (error) {
                console.error('Error saving quiz answers:', error);
            }
        }

        if (currentStep < quizQuestions.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            console.log('Quiz completed', newAnswers);
            const deepLink = await generateDeepLink();
            if (deepLink) {
                console.log('Generated deeplink:', deepLink);
                try {
                    await AsyncStorage.setItem('deepLink', deepLink);
                    console.log('Saved deeplink:', deepLink);
                    
                    // Проверяем, что данные действительно сохранились
                    const savedAnswers = await AsyncStorage.getItem('quizAnswers');
                    const savedDeepLink = await AsyncStorage.getItem('deepLink');
                    console.log('Verification after save:', { savedAnswers, savedDeepLink });
                } catch (error) {
                    console.error('Error saving deeplink:', error);
                }
            }
            navigation.navigate('Home');
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