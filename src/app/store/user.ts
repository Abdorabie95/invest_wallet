import { create } from "zustand";
import { mockBalance } from "../../data/mockData";
import { persist, createJSONStorage } from "zustand/middleware";
import AsyncStorage from "@react-native-async-storage/async-storage";

type UserStore = {
    availableBalance: number;
    investedBalance: number;
    invest: (amount: number) => void;
    deposit: (amount: number) => void;
}

export const useUserStore = create<UserStore>()(
    persist(
        (set) => ({
            availableBalance: mockBalance.available,
            investedBalance: mockBalance.invested,
            invest: (amount: number) => set((state) => ({
                availableBalance: state.availableBalance - amount,
                investedBalance: state.investedBalance + amount,
            })),
            deposit: (amount: number) => set((state) => ({
                availableBalance: state.availableBalance + amount,
            })),
        }),
        {
            name: "user-storage",
            storage: createJSONStorage(() => AsyncStorage),
        }
    )
);

