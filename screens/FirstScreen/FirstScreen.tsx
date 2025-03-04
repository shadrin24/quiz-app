import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import LinearGradient from "react-native-linear-gradient";
import Vector from "../../assets/images/Vector.svg";
import { RootStackParamList } from "../../navigation/types";
import { styles } from "./FirstScreen.styles";

type Props = {
    navigation: StackNavigationProp<RootStackParamList>;
};

const MainScreen: React.FC<Props> = ({navigation}) => {
    const handleStartQuiz = () => {
        navigation.replace('Quiz');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require("../../assets/images/img.png")}
                style={styles.background}
                resizeMode="contain"
            />
            <LinearGradient
                colors={["transparent", "rgba(0, 0, 0, 0.7)", "rgba(0, 0, 0, 0.95)", "rgba(0, 0, 0, 1)",]}
                locations={[0, 0.15, 0.21, 1]}
                style={styles.gradientBox}
            />
            <View style={styles.boxColumn}>
                <View style={styles.boxRow}>
                    <Vector height={100} style={styles.vectorMirror}/>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>#1 AI Trading Assistant</Text>
                        <Text style={styles.textLow}>500,000+ profitable trades daily</Text>
                    </View>
                    <Vector height={100} fill="white" style={styles.vector}/>            
                </View>

                <View style={styles.textContainer}> 
                    <Text style={styles.textBold}>Join 15+ Million Investors</Text>
                    <Text style={styles.textBold}>with Unlimited</Text>
                    <Text style={styles.textBold}>TradeGenius Access</Text>
                </View>

                <View style={styles.textContainer}> 
                    <Text style={styles.textLowWide}>Unlock winning stock </Text>
                    <Text style={styles.textLowWide}>recommendations that outperform </Text>
                    <Text style={styles.textLowWide}>competitors by 300% and elevate</Text>
                    <Text style={styles.textLowWide}>your portfolio</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleStartQuiz}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MainScreen; 