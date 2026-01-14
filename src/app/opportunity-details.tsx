import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from "react-native";
import React from "react";
import { useLocalSearchParams } from 'expo-router';
import { Opportunity } from '../types';
import AppButton from "../components/AppButton";
import StatsBox from "../components/statsBox";
import { useInvestment } from "./hooks/useInvestment";

const OpportunityDetailsScreen = () => {
  const params = useLocalSearchParams();
  const opportunityData: Opportunity = params.item ? JSON.parse(params.item as string) : null;
  const { handleInvest, isInvested } = useInvestment(opportunityData);

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
          <StatsBox label="Min. Investment" value={opportunityData.minInvestment} />
          <StatsBox label="Expected Return" value={opportunityData.expectedReturn} />
          <StatsBox label="Duration" value={opportunityData.duration} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Overview</Text>
          <Text style={styles.description}>
            {opportunityData.description}
          </Text>
        </View>

        <AppButton
          handleInvest={handleInvest}
          transactionExist={isInvested}
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
