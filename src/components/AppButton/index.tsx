import { Text, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface AppButtonProps {
  handleInvest: () => void;
  transactionExist: boolean;
  title: string;
}

const AppButton = ({
  handleInvest,
  transactionExist,
  title,
}: AppButtonProps) => {
  return (
    <TouchableOpacity style={[styles.investButton, { opacity: !!transactionExist ? 0.5 : 1 }]} disabled={!!transactionExist} onPress={handleInvest}>
      <Text style={styles.investButtonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default AppButton;