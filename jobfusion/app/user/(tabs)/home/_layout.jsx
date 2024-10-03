import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index">
      <Stack.Screen name="index" options={{ headerBackVisible: false }} />
      <Stack.Screen name="detail" />
      <Stack.Screen name="apply" />
    </Stack>
  );
}
