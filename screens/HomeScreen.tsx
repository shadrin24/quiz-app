import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import UserDataCard from "../components/UserDataCard/UserDataCard";
import WatchlistItem from "../components/WatchlistItem/WatchlistItem";
import SocialPost from "../components/SocialPost/SocialPost";
import { watchlistData } from "../data/watchlist";
import { socialPostsData } from "../data/socialPosts";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackParamList } from "../navigation/types";
import { DeepLinkData } from "../utils/deeplink";

type HomeScreenProps = {
    navigation: StackNavigationProp<RootStackParamList>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
    const [quizData, setQuizData] = useState<DeepLinkData | null>(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const quizAnswers = await AsyncStorage.getItem('quizAnswers');
                const utmData = await AsyncStorage.getItem('utmData');
                
                console.log('Loaded quiz answers:', quizAnswers);
                console.log('Loaded UTM data:', utmData);
                
                const data = {
                    quizAnswers: quizAnswers ? JSON.parse(quizAnswers) : undefined,
                    utmData: utmData ? JSON.parse(utmData) : undefined
                };
                
                console.log('Parsed data:', data);
                setQuizData(data);
            } catch (error) {
                console.error('Error loading data:', error);
            }
        };

        loadData();
    }, []);

    const resetQuizAndNavigate = async () => {
        try {
            console.log('Starting reset...');
            await AsyncStorage.removeItem('quizAnswers');
            await AsyncStorage.removeItem('utmData');
            await AsyncStorage.removeItem('deepLink');
            
            // Проверяем, что данные действительно удалены
            const remainingAnswers = await AsyncStorage.getItem('quizAnswers');
            const remainingDeepLink = await AsyncStorage.getItem('deepLink');
            console.log('Verification after reset:', { remainingAnswers, remainingDeepLink });
            
            navigation.navigate('Main');
        } catch (error) {
            console.error('Error resetting quiz:', error);
        }
    };

    const handleQuizAnswersPress = () => {
        console.log('Quiz answers button pressed');
        console.log('Quiz data available:', quizData);
        if (quizData?.quizAnswers) {
            console.log('Navigating to QuizAnswers with:', quizData.quizAnswers);
            navigation.navigate('QuizAnswers', {
                answers: quizData.quizAnswers
            });
        }
    };

    const handleUtmDataPress = () => {
        if (quizData?.utmData) {
            navigation.navigate('UTMData', {
                data: quizData.utmData
            });
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>TradeGenius</Text>
            </View>

            <View style={styles.content}>
                <UserDataCard
                    title="Your Quiz Answers"
                    buttonText="See Quiz Answers"
                    onPress={handleQuizAnswersPress}
                    disabled={!quizData?.quizAnswers}
                />

                <UserDataCard
                    title="Your UTM Data"
                    buttonText="See UTM Data"
                    onPress={handleUtmDataPress}
                    disabled={!quizData?.utmData}
                />

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Watchlist</Text>
                    {watchlistData.map((item, index) => (
                        <WatchlistItem
                            key={`${item.symbol}-${index}`}
                            symbol={item.symbol}
                            description={item.description}
                            onPress={() => {}}
                        />
                    ))}
                </View>

                <View style={styles.card}>
                    <Text style={styles.cardTitle}>Top Social Media Posts</Text>
                    {socialPostsData.map((post, index) => (
                        <SocialPost
                            key={`${post.symbol}-${post.author}-${index}`}
                            symbol={post.symbol}
                            author={post.author}
                            text={post.text}
                            likes={post.likes}
                            comments={post.comments}
                        />
                    ))}
                </View>
            </View>

            <TouchableOpacity 
                style={styles.resetButton}
                onPress={resetQuizAndNavigate}
            >
                <Text style={styles.resetButtonText}>Restart Quiz</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    header: {
        padding: 16,
        paddingTop: 40,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#FFFFFF',
    },
    content: {
        padding: 16,
    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16,
    },
    cardTitle: {
        fontSize: 16,
        fontWeight: '600',
        color: '#000000',
        marginBottom: 8,
    },
    resetButton: {
        width: '100%',
        padding: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        borderRadius: 14,
        alignItems: 'center',
        marginBottom: 16,
    },
    resetButtonText: {
        color: 'white',
        fontSize: 17,
        fontWeight: '500',
    },
});

export default HomeScreen;
