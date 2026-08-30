import { Text, View } from "react-native";

// TODO: implement EmptyState component
export function EmptyState({ title, body }: { title: string; body?: string }) {
  return (
    <View>
      <Text>{title}</Text>
      {body ? <Text>{body}</Text> : null}
    </View>
  );
}
