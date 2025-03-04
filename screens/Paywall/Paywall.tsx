import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../navigation/AppNavigator";
import CustomButton from "../../components/CustomButton/CustomButton";
import { styles } from './Paywall.styles';

type PaywallScreenNavigationProp = StackNavigationProp<RootStackParamList, "Paywall">;

type Props = {
    navigation: PaywallScreenNavigationProp;
};

const PaywallScreen: React.FC<Props> = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <View style={styles.mainContent}>
                    <Text style={styles.titleText}>
                        Join 15+ Million Investors{'\n'}with Unlimited{'\n'}TradeGenius Access
                    </Text>

                    <Text style={styles.descriptionText}>
                        Unlock winning stock{'\n'}recommendations that outperform{'\n'}competitors by 300% and elevate{'\n'}your portfolio
                    </Text>

                    <View style={styles.priceContainer}>
                        <View style={styles.priceRow}>
                            <View style={styles.priceColumn}>
                                <Text style={styles.oldPrice}>$199.99</Text>
                                <Text style={styles.priceNote}>50% off once</Text>
                            </View>
                            <View style={styles.priceColumn}>
                                <Text style={styles.newPrice}>$1.90/week</Text>
                                <Text style={styles.priceNote}>$99.99 annually</Text>
                            </View>
                        </View>
                    </View>

                    <Text style={styles.guaranteeText}>
                        Risk-Free: No Commitment & 30-{'\n'}Day Money-Back Guarantee
                    </Text>
                </View>

                <View style={styles.bottomContent}>
                    <CustomButton
                        title="Continue"
                        onPress={() => navigation.navigate('Home')}
                        variant="white"
                    />

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>ToS</Text>
                        <Text style={styles.footerText}>Privacy</Text>
                        <Text style={styles.footerText}>Restore</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default PaywallScreen; 