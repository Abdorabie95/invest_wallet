import { View, Text } from "react-native"
import styles from "./styles"
import { mockBalance } from "../../data/mockData"
import { formatCurrency } from "../../app/util/format"


interface Props {
  totalBalance: number;
  availableBalance: number;
  investedBalance: number;
}

const BalanceCard = ({ totalBalance, availableBalance, investedBalance }: Props) => {
  return (
    <View style={styles.balanceSection}>
      <Text style={styles.sectionTitle}>Balance Summary</Text>

      <View style={styles.balanceGrid}>
        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Available Balance</Text>
          <Text style={styles.balanceAmount}>
            {formatCurrency(availableBalance)} SAR
          </Text>
        </View>

        <View style={styles.balanceCard}>
          <Text style={styles.balanceLabel}>Invested Balance</Text>
          <Text style={styles.balanceAmount}>
            {formatCurrency(investedBalance)} SAR
          </Text>
        </View>
      </View>

      <View style={[styles.balanceCard, styles.totalBalanceCard]}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={[styles.balanceAmount, styles.totalBalanceAmount]}>
          {formatCurrency(totalBalance)} SAR
        </Text>
      </View>
    </View>
  )
}


export default BalanceCard