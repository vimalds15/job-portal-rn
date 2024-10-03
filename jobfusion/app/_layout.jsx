import { Stack } from "expo-router";
import { AuthProvider } from "../services/context/AuthContext";
import { CompanyProvider } from "../services/context/CompanyContext";
import { UserProvider } from "../services/context/UserContext";
import { JobProvider } from "../services/context/JobContext";
import { ApplicationProvider } from "../services/context/ApplicationContext";

export default function RootLayout() {
  return (
    <AuthProvider>
      <CompanyProvider>
        <UserProvider>
          <JobProvider>
            <ApplicationProvider>
              <Stack
                initialRouteName="user/(tabs)"
                screenOptions={{ headerShown: false }}
              >
                <Stack.Screen name="user/(tabs)" />
                <Stack.Screen name="auth" />
                <Stack.Screen name="company/(tabs)" />
                <Stack.Screen name="admin/(tabs)" />
                <Stack.Screen name="index" />
              </Stack>
            </ApplicationProvider>
          </JobProvider>
        </UserProvider>
      </CompanyProvider>
    </AuthProvider>
  );
}
