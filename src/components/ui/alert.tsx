import { Text, View } from "react-native";

// TODO: implement Alert component
export function Alert({ message }: { message: string }) {
  return (
    <View>
      <Text>{message}</Text>
    </View>
  );
}
