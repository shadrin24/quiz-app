import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { NavigationContainer } from "@react-navigation/native";

// Импортируем экраны
import Quiz from "../screens/Quiz/Quiz";
import PaywallScreen from "../screens/Paywall/Paywall";
import FirstScreen from "../screens/FirstScreen/FirstScreen";
import HomeScreen from "../screens/HomeScreen";
import QuizAnswers from "../screens/QuizAnswers/QuizAnswers";
import UTMData from "../screens/UTMData/UTMData";
import InitialRouter from "../components/InitialRouter";
import { hasRequiredData } from "../utils/deeplink";

// Описываем возможные экраны
export type RootStackParamList = {
    Initial: undefined;
    Main: undefined;
    Home: undefined;
    Quiz: undefined;
    Paywall: undefined;
    QuizAnswers: {
        answers: Record<number, string>;
    };
    UTMData: {
        data: {
            source?: string;
            medium?: string;
            campaign?: string;
        };
    };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName="Initial"
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Initial" component={InitialRouter} />
                <Stack.Screen name="Main" component={FirstScreen} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Paywall" component={PaywallScreen} />
                <Stack.Screen name="QuizAnswers" component={QuizAnswers} />
                <Stack.Screen name="UTMData" component={UTMData} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
