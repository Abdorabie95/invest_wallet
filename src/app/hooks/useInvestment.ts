import { Alert } from "react-native";
import { useTransactionsStore } from "../store/transactions";
import { useUserStore } from "../store/user";
import { Opportunity } from "../../types";

export const useInvestment = (opportunity: Opportunity) => {
  const addTransaction = useTransactionsStore((state) => state.addTransaction);
  const availableBalance = useUserStore((state) => state.availableBalance);
  const invest = useUserStore((state) => state.invest);
  const transactions = useTransactionsStore((state) => state.transactions);

  const transactionExist = transactions.find(
    (transaction) => transaction.opportunityId === opportunity?.id
  );

  const handleInvest = () => {
    if (!opportunity) return;

    if (transactionExist) {
      Alert.alert(
        "Already Invested",
        "You have already invested in this opportunity"
      );
      return;
    }

    const investmentAmount = parseFloat(opportunity.minInvestment);

    if (availableBalance < investmentAmount) {
      Alert.alert(
        "Insufficient balance",
        "You do not have enough balance"
      );
      return;
    }

    addTransaction({
      id: `txn_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      opportunityId: opportunity.id,
      amount: investmentAmount,
      date: new Date().toISOString(),
      type: "INVEST",
    });

    invest(investmentAmount);

    Alert.alert(
      "Investment successful",
      "You have successfully invested"
    );
  };

  return {
    handleInvest,
    isInvested: !!transactionExist,
  };
};
