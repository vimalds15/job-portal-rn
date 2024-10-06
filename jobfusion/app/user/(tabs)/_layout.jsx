import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import Logo from "../../../assets/logo.png";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#000000",
        headerTitleAlign: "center",
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerTitle: "Job Fusion",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
          headerLeft: () => (
            <Image
              source={Logo}
              style={{ height: 50, width: 50, marginLeft: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="bell" size={size} color={color} />
          ),
          headerLeft: () => (
            <Image
              source={Logo}
              style={{ height: 50, width: 50, marginLeft: 20 }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
          headerLeft: () => (
            <Image
              source={Logo}
              style={{ height: 50, width: 50, marginLeft: 20 }}
            />
          ),
        }}
      />
    </Tabs>
  );
}
