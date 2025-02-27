import React from "react";
import {View, Text} from "react-native";
import {NavigationProp} from "@react-navigation/native";
import {RootStackParamList} from "../../navigation/types";
import CustomButton from "../../components/CustomButton/CustomButton";
import { styles } from './QuizIntro.styles';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    question: string;
    text?: string;
    options: string[];
    progress: number;
    onSelect: (option: string) => void;
    textBold?: number;    // fontSize для жирного текста
    textRegular?: number; // fontSize для обычного текста
    rowGap?: string;      // отступ между элементами
    buttonColor?: string;
}

const QuizIntro: React.FC<Props> = ({
    navigation,
    question,
    text,
    options,
    progress,
    onSelect,
    textBold = 34,      // значение по умолчанию
    textRegular = 17,   // значение по умолчанию
    rowGap = "23%",      // значение по умолчанию
    buttonColor = "white"
}) => {
    const buttonText = options[0] || "Continue";

    return (
        <View style={[styles.viewRowsBetweenAround, { rowGap }]}>
            <View style={styles.progressBar}>
                <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
            </View>

            <Text style={[styles.textBoldLeft, { fontSize: textBold }]}>
                {question}
            </Text>

            {text && <Text style={[styles.textRegular, { fontSize: textRegular, lineHeight: textRegular > 20 ? 33 : 20 }]}>{text}</Text>}
            {!text && 
                <View style={styles.viewText}>
                    <Text style={[styles.textRegular, { fontSize: textRegular, lineHeight: textRegular > 20 ? 33 : 20  }]}>
                        {"Before we start, here's a special offer just for today, only for you:\n"}
                    </Text>
                    
                    <View style={styles.viewText}>
                        <Text style={[styles.textBoldItalic, { 
                            lineHeight: textRegular > 20 ? 33 : 20,
                            fontSize: textRegular,
                        }]}>
                            {"Get 50% off "}
                        </Text>
                        <Text style={[styles.textRegular, { fontSize: textRegular, lineHeight: textRegular > 20 ? 33 : 20  }]}>
                            {"TradeGenius and"}
                        </Text>
                    </View>
                    <Text style={[styles.textRegular, { fontSize: textRegular, lineHeight: textRegular > 20 ? 33 : 20  }]}>
                        {"access all our top stock picks."}
                    </Text>
                </View>
            }
            <View style={[styles.buttonContainer, { bottom: buttonText === "Next" ? "6%" : "4%" }]}>
                <CustomButton
                    title={buttonText}
                    onPress={() => onSelect(buttonText)}
                    variant="white"
                />
            </View>
        </View>
    );
};

export default QuizIntro;
