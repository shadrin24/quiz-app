import React from "react";
import { TouchableOpacity, Text, StyleProp, ViewStyle, TextStyle } from "react-native";
import { styles } from './CustomButton.styles';

interface Props {
    title: string;
    onPress: () => void;
    variant?: 'white' | 'gray';
    buttonStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const CustomButton: React.FC<Props> = ({
    title,
    onPress,
    variant = 'gray',
    buttonStyle,
    textStyle,
}) => {
    const buttonVariantStyle = variant === 'white' ? styles.whiteButton : styles.grayButton;
    const textVariantStyle = variant === 'white' ? styles.blackText : styles.whiteText;

    return (
        <TouchableOpacity 
            style={[
                styles.button,
                buttonVariantStyle,
                buttonStyle,
            ]} 
            onPress={onPress}
        >
            <Text style={[
                styles.buttonText,
                textVariantStyle,
                textStyle,
            ]}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

export default CustomButton; 