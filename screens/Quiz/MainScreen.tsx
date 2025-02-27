import React from "react";
import {View, Text, Button, StyleSheet, Image, TouchableOpacity} from "react-native";
import {StackNavigationProp} from "@react-navigation/stack";
import {RootStackParamList} from "../../navigation/AppNavigator";
import LinearGradient from "react-native-linear-gradient"; // Импортируем градиент
import Vector from "../../assets/images/Vector.svg";


type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, "Quiz">;
type Props = { navigation: QuizScreenNavigationProp };

const QuizScreen: React.FC<Props> = ({navigation}) => {
    return (
        <View style={styles.container}>
            {/* Бэкграунд'> */}
            <Image
                source={require("../../assets/images/img.png")}
                style={styles.background}
                resizeMode="contain"
            />
            {/* Градиентный бокс */}
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


            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quiz')}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: "black", 
         justifyContent: "flex-end", 
         alignItems: "center"
        },
    boxColumn: {
        // flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        top: "43%",
        width: "90%",
        height: "41%",
        // borderWidth: 1,
        // borderColor: 'red',
    },
    boxRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        alignSelf: "center",
        width: "100%",
        // height: "100%",
        // borderWidth: 1,
        // borderColor: 'green',
    },
    textContainer: {
        alignItems: "center",
        justifyContent: "center",
        // flex: 1,
        // height: "100%",
        // borderWidth: 1,
        // borderColor: 'blue',
    },
    vector: {
        right: 0, // Это сделает картинку зеркальной
    },
    vectorMirror: {
        left: 0,
        transform: [{scaleX: -1}], // Это сделает картинку зеркальной
    },
    text: { 
        fontSize: 24, 
        //fontWeight: "bold",
        color: "white", 
        textAlign: 'center',
        fontFamily: 'SF-Pro',
        lineHeight: 29,
        transform: [{ scaleX: 1.25 }], 
    },
    textBold: { 
        fontSize: 27, 
        fontWeight: "bold",
        color: "white", 
        textAlign: 'center',
        fontFamily: 'SF-Pro',
        lineHeight: 32,
        transform: [{ scaleX: 1.3}], 
        letterSpacing: -1.5,
    },
    textLow: { 
        fontSize: 15, 
        //marginBottom: 20, 
        color: "white", 
        textAlign: 'center',
        fontFamily: 'SF-Pro',
        lineHeight: 18,
        transform: [{ scaleX: 1.25 }], 
    },
    textLowWide: { 
        fontSize: 17, 
        //marginBottom: 20, 
        color: "white", 
        textAlign: 'center',
        fontFamily: 'SF-Pro',
        lineHeight: 20,
        transform: [{ scaleX: 1.4 }], 
    },
    background: {
        width: "100%",
        height: "65%",
        justifyContent: "center",
        alignItems: "center",
        top: "5%",
        position: "absolute",
    },
    gradientBox: {
        position: "absolute",
        width: "100%",
        height: "75%",
        bottom: 0,
    },
    button: {
        backgroundColor: "white",
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        bottom: 30,
        width: "90%",
        height: 65,
    },
    buttonText: {
        color: "black",
        textAlign: 'center',
        fontSize: 25,
        fontWeight: "bold",
        lineHeight: 30,
        fontFamily: 'SF-Pro',
        transform: [{ scaleX: 1.1 }],
        letterSpacing: 0.5,
    },
});

export default QuizScreen;
