import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import BalanceCard from "../components/BalanceCard";
import { useOpportunitiesStore } from "./store/opportunitiesStore";
import AppCard from "../components/AppCard";
import { useUserStore } from "./store/user";

const HomeScreen = () => {
  const totalBalance = useUserStore((state) => state.availableBalance + state.investedBalance);
  const { opportunities } = useOpportunitiesStore();

  return (
    <View style={styles.container}>
      <BalanceCard totalBalance={totalBalance} />
      <View>
        <Link href="/wallet">View Wallet</Link>
      </View>

      {/* Investment Opportunities Section */}
      <View style={styles.opportunitiesSection}>
        <Text style={styles.sectionTitle}>Investment Opportunities</Text>

        <FlatList data={opportunities}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <AppCard item={item} />
          )} />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1e",
  },
  balanceSection: {
    padding: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  balanceGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  balanceCard: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  totalBalanceCard: {
    backgroundColor: "#6366f1",
    borderColor: "#7c3aed",
  },
  balanceLabel: {
    fontSize: 12,
    color: "#a0a0b0",
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  totalBalanceAmount: {
    fontSize: 24,
  },
  opportunitiesSection: {
    padding: 20,
    paddingTop: 10,
  },

});

export default HomeScreen;
