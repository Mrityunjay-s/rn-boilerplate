import { Text, View } from "react-native";

// TODO: implement Badge component
export function Badge({ label }: { label: string }) {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
}
