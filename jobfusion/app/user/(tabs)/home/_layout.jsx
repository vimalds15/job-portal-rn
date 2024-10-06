import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      initialRouteName="index"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" options={{ headerBackVisible: false }} />
      <Stack.Screen name="detail" />
      <Stack.Screen name="apply" />
    </Stack>
  );
}
