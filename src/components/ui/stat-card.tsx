import { Text, View } from "react-native";

// TODO: implement StatCard component
export function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text>{label}</Text>
      <Text>{value}</Text>
    </View>
  );
}
