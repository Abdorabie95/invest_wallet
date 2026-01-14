import { StyleSheet, Text, View } from "react-native"

const StatsBox = ({ label, value }: { label: string; value: string | number }) => {
  return (
    <View style={styles.statBox}>
      <Text style={styles.statLabel}>{label}</Text>
      <Text style={styles.statValue}>{value}</Text>
    </View>
  )
}

export default StatsBox

const styles = StyleSheet.create({
  statBox: {
    flex: 1,
    backgroundColor: "#1a1a2e",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#2a2a3e",
  },
  statLabel: {
    fontSize: 12,
    color: "#a0a0b0",
    marginBottom: 8,
  },
  statValue: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
  },
})