import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const InitialRouter: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

    useEffect(() => {
        const checkData = async () => {
            try {
                // Проверяем наличие всех необходимых данных
                const quizAnswers = await AsyncStorage.getItem('quizAnswers');
                const deepLink = await AsyncStorage.getItem('deepLink');
                const hasData = !!(quizAnswers && deepLink);

                console.log('Checking data:', { quizAnswers, deepLink, hasData });

                // Всегда переходим на FirstScreen
                navigation.navigate('Main');
            } catch (error) {
                console.error('Error checking data:', error);
                navigation.navigate('Main');
            } finally {
                setIsLoading(false);
            }
        };

        checkData();
    }, [navigation]);

    if (isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000000' }}>
                <ActivityIndicator size="large" color="#FFFFFF" />
            </View>
        );
    }

    return null;
};

export default InitialRouter; 