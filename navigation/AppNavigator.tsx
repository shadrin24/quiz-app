import React from "react";
import { createStackNavigator } from "@react-navigation/stack"; 
import { NavigationContainer } from "@react-navigation/native";

// Импортируем экраны
import HomeScreen from "../screens/HomeScreen";
import MainScreen from "../screens/Quiz/MainScreen";
import PaywallScreen from "../screens/PaywallScreen";
import QuizStep from "../screens/Quiz/QuizStep";
import Quiz from "../screens/Quiz/Quiz";

// Описываем возможные экраны
export type RootStackParamList = {
    Home: undefined;
    Main: undefined;
    Quiz: undefined;
    Paywall: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Main" component={MainScreen} />
                <Stack.Screen name="Quiz" component={Quiz} />
                <Stack.Screen name="Paywall" component={PaywallScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
