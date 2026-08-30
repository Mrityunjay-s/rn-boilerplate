import { Pressable, Text } from "react-native";

// TODO: implement Button component
export function Button({ label, onPress }: { label: string; onPress?: () => void }) {
  return (
    <Pressable onPress={onPress}>
      <Text>{label}</Text>
    </Pressable>
  );
}
