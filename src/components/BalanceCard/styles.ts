import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  balanceSection: {
    padding: 20,
    paddingBottom: 10,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 16,
  },
  balanceGrid: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 12,
  },
  balanceCard: {
   // flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  totalBalanceCard: {
    backgroundColor: "#6366f1",
    borderColor: "#7c3aed",
  },
  balanceLabel: {
    fontSize: 12,
    color: "#a0a0b0",
    marginBottom: 8,
  },
  balanceAmount: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff",
  },
  totalBalanceAmount: {
    fontSize: 24,
  },
})

export default styles