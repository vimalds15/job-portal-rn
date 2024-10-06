import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Logo from "../../../assets/logo.png";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Admin Dashboard",
          headerTitleAlign: "center",
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
        name="usersList"
        options={{
          title: "Users",
          headerTitleAlign: "center",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="users" size={size} color={color} />
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
        name="companies"
        options={{
          title: "Companies",
          headerTitleAlign: "center",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="building" size={size} color={color} />
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
        name="companyRequest"
        options={{
          title: "Requests",
          headerTitleAlign: "center",

          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="clock-o" size={size} color={color} />
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
