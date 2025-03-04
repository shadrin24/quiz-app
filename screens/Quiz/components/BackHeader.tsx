import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../navigation/types';

interface BackHeaderProps {
    title: string;
    navigation: NavigationProp<RootStackParamList>;
}

export const BackHeader: React.FC<BackHeaderProps> = ({ title, navigation }) => {
    return (
        <TouchableOpacity 
            style={styles.header}
            onPress={() => navigation.navigate('Home')}
        >
            <View style={styles.backButton}>
                <Text style={styles.backButtonText}>{"<"}</Text>
            </View>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.headerTitle}>{title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 60,
        paddingBottom: 20,
        backgroundColor: 'black',
    },
    backButton: {
        marginLeft: 16,
        zIndex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButtonText: {
        fontSize: 28,
        color: 'white',
        fontWeight: '300',
        marginTop: -10,
        transform: [{ scaleY: 3 }, { scaleX: 1.5 }],
        transformOrigin: 'center',
    },
    headerTitleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        fontSize: 29,
        color: 'white',
        fontFamily: 'SF-Pro',
        fontWeight: '700',
        transform: [{ scaleX: 1.1 }],
        marginRight: 20,
    },
}); 