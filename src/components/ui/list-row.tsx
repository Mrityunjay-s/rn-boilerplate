import { Text, View } from "react-native";

// TODO: implement ListRow component
export function ListRow({ label }: { label: string }) {
  return (
    <View>
      <Text>{label}</Text>
    </View>
  );
}
