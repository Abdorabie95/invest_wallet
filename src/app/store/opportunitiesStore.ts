import { create } from "zustand";
import { Opportunity } from "../../types";
import { mockOpportunities } from "../../data/mockData";

type OpportunityStore = {
    opportunities: Opportunity[];
    setOpportunities: (opportunities: Opportunity[]) => void;
}

export const useOpportunitiesStore = create<OpportunityStore>((set) => ({
    opportunities: mockOpportunities,
    setOpportunities: (opportunities) => set({ opportunities }),
}));
