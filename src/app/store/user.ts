import { create } from "zustand";
import { mockBalance } from "../../data/mockData";

type UserStore = {
    availableBalance: number;
    investedBalance: number;
}

export const useUserStore = create<UserStore>((set) => ({
    availableBalance: mockBalance.available,
    investedBalance: mockBalance.invested,
}));

