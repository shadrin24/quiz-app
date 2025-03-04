import AsyncStorage from '@react-native-async-storage/async-storage';
import { QuizData, QuizAnswer, QUIZ_STORAGE_KEY, initialQuizData } from '../data/quiz';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export class QuizService {
    static async getQuizData(): Promise<QuizData> {
        try {
            if (!AsyncStorage) {
                await delay(100);
                if (!AsyncStorage) {
                    console.error('AsyncStorage is not initialized');
                    return initialQuizData;
                }
            }
            
            const data = await AsyncStorage.getItem(QUIZ_STORAGE_KEY);
            if (data) {
                return JSON.parse(data);
            }
            return initialQuizData;
        } catch (error) {
            console.error('Error getting quiz data:', error);
            return initialQuizData;
        }
    }

    static async saveQuizData(data: QuizData): Promise<void> {
        try {
            if (!AsyncStorage) {
                await delay(100);
                if (!AsyncStorage) {
                    console.error('AsyncStorage is not initialized');
                    return;
                }
            }
            
            await AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(data));
        } catch (error) {
            console.error('Error saving quiz data:', error);
        }
    }

    static async saveQuizAnswer(answer: QuizAnswer): Promise<void> {
        try {
            if (!AsyncStorage) {
                await delay(100);
                if (!AsyncStorage) {
                    console.error('AsyncStorage is not initialized');
                    return;
                }
            }

            const currentData = await this.getQuizData();
            const updatedAnswers = [...currentData.answers, answer];
            await this.saveQuizData({
                ...currentData,
                answers: updatedAnswers,
            });
        } catch (error) {
            console.error('Error saving quiz answer:', error);
        }
    }

    static async completeQuiz(): Promise<void> {
        try {
            if (!AsyncStorage) {
                await delay(100);
                if (!AsyncStorage) {
                    console.error('AsyncStorage is not initialized');
                    return;
                }
            }

            const currentData = await this.getQuizData();
            await this.saveQuizData({
                ...currentData,
                completed: true,
                completedAt: new Date().toISOString(),
            });
        } catch (error) {
            console.error('Error completing quiz:', error);
        }
    }

    static async isQuizCompleted(): Promise<boolean> {
        try {
            if (!AsyncStorage) {
                await delay(100);
                if (!AsyncStorage) {
                    console.error('AsyncStorage is not initialized');
                    return false;
                }
            }

            const data = await this.getQuizData();
            return data.completed;
        } catch (error) {
            console.error('Error checking quiz completion:', error);
            return false;
        }
    }

    static async clearQuizData(): Promise<void> {
        try {
            if (!AsyncStorage) {
                await delay(100);
                if (!AsyncStorage) {
                    console.error('AsyncStorage is not initialized');
                    return;
                }
            }

            await AsyncStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify(initialQuizData));
        } catch (error) {
            console.error('Error clearing quiz data:', error);
        }
    }
} 