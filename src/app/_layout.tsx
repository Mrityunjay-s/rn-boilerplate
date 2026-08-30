import { Stack } from "expo-router";

// TODO: wire up real auth state from features/auth
const isSignedIn = false;

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Protected guard={isSignedIn}>
        <Stack.Screen name="(auth)" />
      </Stack.Protected>
      <Stack.Protected guard={!isSignedIn}>
        <Stack.Screen name="(main)" />
      </Stack.Protected>
    </Stack>
  );
}
