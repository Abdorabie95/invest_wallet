import { create } from "zustand";
import { mockBalance } from "../../data/mockData";

type UserStore = {
    availableBalance: number;
    investedBalance: number;
    invest: (amount: number) => void;
    deposit: (amount: number) => void;
}

export const useUserStore = create<UserStore>((set) => ({
    availableBalance: mockBalance.available,
    investedBalance: mockBalance.invested,
    invest: (amount: number) => set((state) => ({
        availableBalance: state.availableBalance - amount,
        investedBalance: state.investedBalance + amount,
    })),
    deposit: (amount: number) => set((state) => ({
        availableBalance: state.availableBalance + amount,
    })),
}));

