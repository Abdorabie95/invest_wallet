import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link } from "expo-router";
import BalanceCard from "../components/BalanceCard";
import { useOpportunitiesStore } from "./store/opportunitiesStore";
import AppCard from "../components/AppCard";
import { useUserStore } from "./store/user";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useTransactionsStore } from "./store/transactions";

const HomeScreen = () => {
  const availableBalance = useUserStore((state) => state.availableBalance);
  const investedBalance = useUserStore((state) => state.investedBalance);
  const totalBalance = availableBalance + investedBalance;
  const { opportunities } = useOpportunitiesStore();
  const { bottom } = useSafeAreaInsets();
  
  return (
    <View style={styles.container}>
      <Link href="/wallet" asChild>
        <TouchableOpacity activeOpacity={0.7}>
          <BalanceCard
            totalBalance={totalBalance}
            availableBalance={availableBalance}
            investedBalance={investedBalance}
          />
        </TouchableOpacity>
      </Link>

      <View style={styles.opportunitiesSection}>
        <Text style={styles.sectionTitle}>Investment Opportunities</Text>

        <View style={{ flex: 1 }}>
          <FlatList data={opportunities}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <AppCard item={item} />
            )}
            contentContainerStyle={{ paddingBottom: bottom }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Text style={styles.emptyText}>No opportunities available</Text>}
          />

        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f0f1e",
  },
  emptyText: {
    color: "#ffffff",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  opportunitiesSection: {
    padding: 20,
    paddingTop: 10,
    flex: 1
  },

});

export default HomeScreen;
