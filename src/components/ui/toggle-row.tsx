import { Switch, Text, View } from "react-native";

// TODO: implement ToggleRow component
export function ToggleRow({
  label,
  value,
  onValueChange,
}: {
  label: string;
  value: boolean;
  onValueChange?: (value: boolean) => void;
}) {
  return (
    <View>
      <Text>{label}</Text>
      <Switch value={value} onValueChange={onValueChange} />
    </View>
  );
}
