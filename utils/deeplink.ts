import AsyncStorage from '@react-native-async-storage/async-storage';

export interface DeepLinkData {
    quizAnswers?: Record<number, string>;
    utmData?: {
        source?: string;
        medium?: string;
        campaign?: string;
    };
}

export const generateDeepLink = async (): Promise<string | null> => {
    try {
        const quizAnswers = await AsyncStorage.getItem('quizAnswers');
        const utmData = await AsyncStorage.getItem('utmData');
        
        if (!quizAnswers && !utmData) return null;

        const data: DeepLinkData = {
            quizAnswers: quizAnswers ? JSON.parse(quizAnswers) : undefined,
            utmData: utmData ? JSON.parse(utmData) : undefined
        };

        const encodedData = encodeURIComponent(JSON.stringify(data));
        return `tradegenius://app?data=${encodedData}`;
    } catch (error) {
        console.error('Error generating deeplink:', error);
        return null;
    }
};

export const parseDeepLink = (url: string): DeepLinkData | null => {
    try {
        const regex = /[?&]data=([^&]+)/;
        const match = url.match(regex);
        
        if (!match) return null;
        
        const encodedData = match[1];
        const decodedData = decodeURIComponent(encodedData);
        return JSON.parse(decodedData);
    } catch (error) {
        console.error('Error parsing deeplink:', error);
        return null;
    }
};

export const hasRequiredData = async (): Promise<boolean> => {
    try {
        const quizAnswers = await AsyncStorage.getItem('quizAnswers');
        const deepLink = await AsyncStorage.getItem('deepLink');
        return !!(quizAnswers && deepLink);
    } catch (error) {
        console.error('Error checking required data:', error);
        return false;
    }
}; 