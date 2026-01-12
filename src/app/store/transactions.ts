import { create } from "zustand";
import { Transaction } from "../../types";
import { transactionsMock } from "../../data/mockData";

type TransactionStore = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
}

export const useTransactionsStore = create<TransactionStore>((set) => ({
  transactions: transactionsMock,
  setTransactions: (transactions: Transaction[]) => set({ transactions }),
}));
