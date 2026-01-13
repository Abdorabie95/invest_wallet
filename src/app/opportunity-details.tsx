import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useLocalSearchParams } from 'expo-router';
import { Opportunity } from '../types';
import { useTransactionsStore } from "./store/transactions";
import { useUserStore } from "./store/user";
import AppButton from "../components/AppButton";

const OpportunityDetailsScreen = () => {
  const params = useLocalSearchParams();
  const opportunityData: Opportunity = params.item ? JSON.parse(params.item as string) : null;
  const addTransaction = useTransactionsStore((state) => state.addTransaction);
  const availableBalance = useUserStore((state) => state.availableBalance);
  const invest = useUserStore((state) => state.invest);
  const transactions = useTransactionsStore((state) => state.transactions);
  const transactionExist = transactions.find((transaction) => transaction.opportunityId === opportunityData.id);

  const handleInvest = () => {
    if (transactionExist) {
      Alert.alert('Already Invested', 'You have already invested in this opportunity');
      return;
    }
    if (availableBalance < parseFloat(opportunityData.minInvestment)) {
      Alert.alert('Insufficient balance', 'You do not have enough balance to invest in this opportunity');
      return
    }
    addTransaction({
      id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      opportunityId: opportunityData.id,
      amount: parseFloat(opportunityData.minInvestment),
      date: new Date().toISOString(),
      type: 'INVEST',
    })
    invest(parseFloat(opportunityData.minInvestment));
    Alert.alert('Investment successful', 'You have successfully invested in this opportunity');
  }

  if (!opportunityData) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>Opportunity not found</Text>
      </View>
    );
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <Text style={styles.title}>{opportunityData.name}</Text>
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{opportunityData.risk}</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Min. Investment</Text>
            <Text style={styles.statValue}>{opportunityData.minInvestment}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Expected Return</Text>
            <Text style={styles.statValue}>{opportunityData.expectedReturn}</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statLabel}>Duration</Text>
            <Text style={styles.statValue}>{opportunityData.duration}</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>
            {opportunityData.description}
          </Text>
        </View>

        <AppButton
          handleInvest={handleInvest}
          transactionExist={!!transactionExist}
          title="Invest Now"
        />
      </View>
    </ScrollView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1e",
  },
  content: {
    padding: 20,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  badge: {
    backgroundColor: "#4ade80",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: "flex-start",
  },
  badgeText: {
    color: "#0f0f1e",
    fontSize: 12,
    fontWeight: "600",
  },
  statsContainer: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  statLabel: {
    fontSize: 12,
    color: "#a0a0b0",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: "#d0d0d0",
    lineHeight: 24,
  },
  highlightItem: {
    flexDirection: "row",
    marginBottom: 12,
    alignItems: "flex-start",
  },
  bullet: {
    fontSize: 18,
    color: "#6366f1",
    marginRight: 12,
    marginTop: 2,
  },
  highlightText: {
    fontSize: 15,
    color: "#d0d0d0",
    flex: 1,
    lineHeight: 22,
  },

  errorText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});

export default OpportunityDetailsScreen;
