import { Text, View } from "react-native";

// TODO: implement SectionHeader component
export function SectionHeader({ title }: { title: string }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}
