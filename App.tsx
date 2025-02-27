import React from "react";
import { LogBox } from "react-native";
import AppNavigator from "./navigation/AppNavigator";

// Отключаем ненужные предупреждения
LogBox.ignoreLogs(["Sending..."]);

const App = () => {
    return <AppNavigator />;
};

export default App;
