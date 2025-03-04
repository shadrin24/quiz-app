import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { NavigationProp, RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../navigation/types';
import { BackHeader } from '../../components/BackHeader';
import { styles } from './styles';

interface Props {
    navigation: NavigationProp<RootStackParamList>;
    route: RouteProp<RootStackParamList, 'UTMData'>;
}

const UTMData: React.FC<Props> = ({ navigation, route }) => {
    const { data } = route.params;

    return (
        <View style={styles.container}>
            <BackHeader title="TradeGenius" navigation={navigation} />
            <ScrollView style={styles.scrollContainer}>
                <View style={styles.contentHeader}>
                    <Text style={styles.subtitle}>Your UTM Data</Text>
                </View>
                <View style={styles.dataContainer}>
                    <View style={styles.dataItem}>
                        <Text style={styles.label}>Source:</Text>
                        <Text style={styles.value}>{data.source || 'Not specified'}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.label}>Medium:</Text>
                        <Text style={styles.value}>{data.medium || 'Not specified'}</Text>
                    </View>
                    <View style={styles.dataItem}>
                        <Text style={styles.label}>Campaign:</Text>
                        <Text style={styles.value}>{data.campaign || 'Not specified'}</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
};

export default UTMData; 