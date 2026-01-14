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

  const sortedTransactions = React.useMemo(() => {
    return [...transactions].sort((a, b) => new Date(b.date || '').getTime() - new Date(a.date || '').getTime());
  }, [transactions]);

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
            data={sortedTransactions}
            renderItem={renderTransactionItem}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ paddingBottom: bottom + 20 }}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={<Text style={styles.emptyText}>No transactions found</Text>}
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
  emptyText: {
    color: "#d0d0d0",
    fontSize: 16,
    textAlign: "center",
    marginTop: 20,
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
});

export default WalletScreen;
