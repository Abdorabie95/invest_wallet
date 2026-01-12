import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
     opportunityCard: {
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  opportunityName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#ffffff",
    marginBottom: 8,
  },
  opportunityDetails: {
    flexDirection: "row",
    alignItems: "center",
  },
  opportunityDetailText: {
    fontSize: 14,
    color: "#a0a0b0",
  },
  opportunityDivider: {
    fontSize: 14,
    color: "#a0a0b0",
    marginHorizontal: 8,
  },
});