import { create } from "zustand";
import { Transaction } from "../../types";
import { transactionsMock } from "../../data/mockData";
import { persist } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createJSONStorage } from "zustand/middleware";

type TransactionStore = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
  addTransaction: (transaction: Transaction) => void;
}

export const useTransactionsStore = create<TransactionStore>()(
  persist(
    (set) => ({
      transactions: transactionsMock,
      setTransactions: (transactions: Transaction[]) => set({ transactions }),
      addTransaction: (transaction: Transaction) => set((state) => ({
        transactions: [transaction, ...state.transactions]
      })),

    }),
    {
      name: "transactions-storage",
      storage: createJSONStorage(() => AsyncStorage),
    })
);
