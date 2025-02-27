import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type PaywallScreenNavigationProp = StackNavigationProp<RootStackParamList, "Paywall">;

type Props = {
    navigation: PaywallScreenNavigationProp;
};

const PaywallScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>💰 Paywall Screen</Text>
            <Button title="Назад" onPress={() => navigation.goBack()} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center" },
    text: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
});

export default PaywallScreen;
