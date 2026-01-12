import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { Opportunity } from "../../types";
import { formatCurrency } from "../../app/util/format";
import { styles } from "./style";

const AppCard = ({ item, walletCard }: { item: Opportunity, walletCard?: boolean }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      key={item.name}
      style={styles.opportunityCard}
      onPress={walletCard ? () => { } : () =>
        router.push({
          pathname: `/opportunity-details`,
          params: {
            id: item.id,
            item: JSON.stringify(item),
          },
        })
      }
    >
      <Text style={styles.opportunityName}>{item.name || item.type}</Text>
      <View style={styles.opportunityDetails}>
        <Text style={styles.opportunityDetailText}>
          {item.expectedReturn || item.amount} {item.expectedReturn ? '%' : 'SAR'}
        </Text>
        <Text style={styles.opportunityDivider}>•</Text>
        <Text style={styles.opportunityDetailText}>
          {item.duration || item.date} {item.duration ? 'months' : ''}
        </Text>
        <Text style={styles.opportunityDivider}>•</Text>
        {!walletCard && (
          <Text style={styles.opportunityDetailText}>
            Min {formatCurrency(item.minInvestment)} SAR
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default AppCard;