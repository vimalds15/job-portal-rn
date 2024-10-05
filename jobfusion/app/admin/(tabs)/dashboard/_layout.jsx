import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack initialRouteName="index" screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Job Postings",
          headerBackVisible: true,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen name="detail" />
    </Stack>
  );
}
