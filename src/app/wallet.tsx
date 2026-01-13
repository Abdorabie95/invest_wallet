import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import BalanceCard from "../components/BalanceCard";
import { useUserStore } from "./store/user";
import { useTransactionsStore } from "./store/transactions";
import AppCard from "../components/AppCard";
import { Transaction } from "../types";
import {
  useSafeAreaInsets,
  SafeAreaView
} from 'react-native-safe-area-context';
const WalletScreen = () => {
  const { bottom } = useSafeAreaInsets();
  const availableBalance = useUserStore((state) => state.availableBalance);
  const investedBalance = useUserStore((state) => state.investedBalance);
  const totalBalance = availableBalance + investedBalance;
  const transactions = useTransactionsStore((state) => state.transactions)

  const renderTransactionItem = ({ item }: { item: Transaction }) => {
    const transactionItem = { amount: item.amount, date: item.date, type: item.type }
    return (
      <AppCard
        item={transactionItem}
        walletCard
      />
    );
  };

  return (
    <View style={styles.content}>
      <BalanceCard
        totalBalance={totalBalance}
        availableBalance={availableBalance}
        investedBalance={investedBalance}
      />
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Transactions</Text>

        <View style={{ flex: 1 }}>
          <FlatList
            data={transactions}
            renderItem={renderTransactionItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: bottom + 20 }}
            showsVerticalScrollIndicator={false}
          />
        </View>

      </View>
    </View >
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    backgroundColor: "#0f0f1e",

  },
  balanceCard: {
    backgroundColor: "#1a1a2e",
    padding: 24,
    borderRadius: 16,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  balanceLabel: {
    fontSize: 14,
    color: "#a0a0b0",
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 8,
  },
  balanceChange: {
    fontSize: 14,
    color: "#4ade80",
  },
  section: {
    flex: 1,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  holdingCard: {
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  holdingInfo: {
    flex: 1,
  },
  holdingName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 4,
  },
  holdingDetails: {
    fontSize: 14,
    color: "#a0a0b0",
  },
  holdingValue: {
    alignItems: "flex-end",
  },
  holdingAmount: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 4,
  },
  holdingProfit: {
    fontSize: 14,
    color: "#4ade80",
  },
});

export default WalletScreen;
