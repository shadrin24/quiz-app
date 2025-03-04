import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    viewRowsBetweenAround: {
        flex: 1,
        justifyContent: "center",
        rowGap: "21%",
        alignItems: "center",
        alignSelf: "center",
        position: "absolute",
        width: "100%",
        height: "100%",
        paddingHorizontal: 17,
        paddingBottom: 35,
        backgroundColor: "black",
    },
    textBoldLeft: { 
        fontSize: 31, 
        fontWeight: "bold",
        color: "white", 
        textAlign: 'left',
        fontFamily: 'SF-Pro',
        lineHeight: 37,
        letterSpacing: -0.7,
    },
    buttonContainer: {
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        rowGap: 10,
    },
    progressBar: {
        width: "100%",
        height: 10,
        backgroundColor: "#191919",
        position: "absolute",
        top: 50,
        borderRadius: 5,
    },
    progressFill: {
        height: "100%",
        backgroundColor: "white",
        width: `${(1/11 * 100)}%`,
        borderRadius: 5,
    },
}); 