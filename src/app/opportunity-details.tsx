import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useLocalSearchParams } from 'expo-router';
import { Opportunity } from '../types';

const OpportunityDetailsScreen = () => {
  const params = useLocalSearchParams();
  const opportunityData: Opportunity = params.item ? JSON.parse(params.item as string) : null;

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

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Risk Assessment</Text>
          <View style={styles.riskBar}>
            <View style={[styles.riskFill, { width: "40%" }]} />
          </View>
          <Text style={styles.riskLabel}>Medium Risk</Text>
        </View>

        <TouchableOpacity style={styles.investButton}>
          <Text style={styles.investButtonText}>Invest Now</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
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
  riskBar: {
    height: 8,
    backgroundColor: "#2a2a3e",
    borderRadius: 4,
    marginBottom: 8,
    overflow: "hidden",
  },
  riskFill: {
    height: "100%",
    backgroundColor: "#f59e0b",
    borderRadius: 4,
  },
  riskLabel: {
    fontSize: 14,
    color: "#f59e0b",
  },
  investButton: {
    backgroundColor: "#6366f1",
    padding: 18,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
    shadowColor: "#6366f1",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  investButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "600",
  },
  errorText: {
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
    marginTop: 50,
  },
});

export default OpportunityDetailsScreen;
