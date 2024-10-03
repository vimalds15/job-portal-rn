import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack initialRouteName="login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="register" />
      <Stack.Screen name="user" />
      <Stack.Screen name="company" />
      <Stack.Screen name="admin" />
    </Stack>
  );
}
