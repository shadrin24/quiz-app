import React from "react";
import { View, Text } from "react-native";
import { NavigationProp } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/types";
import CustomButton from "../../components/CustomButton/CustomButton";
import { styles } from './QuizStep.styles';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    question: string;
    options: string[];
    progress: number; // значение от 0 до 1
    onSelect: (option: string) => void;
    textBold?: number;
    rowGap?: string;
    buttonColor?: string;
}

const QuizStep: React.FC<Props> = ({
    navigation,
    question,
    options,
    progress,
    onSelect,
    textBold = 31,
    rowGap = "23%",
}) => {
    return (
        <View style={[styles.viewRowsBetweenAround, { rowGap }]}>
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
            </View>

            <View> 
                <Text style={[styles.textBoldLeft, { fontSize: textBold }]}>
                    {question}
                </Text>
            </View>

            <View style={styles.buttonContainer}>
                {options.map((option, index) => (
                    <CustomButton
                        key={index}
                        title={option}
                        onPress={() => onSelect(option)}
                        variant="gray"
                    />
                ))}
            </View>
        </View>
    );
};

export default QuizStep;
