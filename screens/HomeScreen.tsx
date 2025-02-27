import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">;

type Props = {
    navigation: HomeScreenNavigationProp;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🏠 Home Screen</Text>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Main")}>
                <Text>Начать квиз</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Paywall")}>
                <Text>Подписка</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: '#9a9a9a'},
    text: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
    button: {margin: 50}
});

export default HomeScreen;
