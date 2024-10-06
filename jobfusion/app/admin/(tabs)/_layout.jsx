import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Logo from "../../../assets/logo.png";
import { Image, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../../../services/context/AuthContext";

export default function TabLayout() {
  const { logout } = useContext(AuthContext);

  return (
    <Tabs
      screenOptions={{
        headerLeft: () => (
          <Image
            source={Logo}
            style={{ height: 50, width: 50, marginLeft: 20 }}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            style={{
              backgroundColor: "black",
              marginTop: 10,
              marginRight: 10,
              borderRadius: 5,
            }}
            onPress={() => logout()}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                paddingVertical: 10,
                paddingHorizontal: 10,
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
        ),
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Admin Dashboard",
          headerTitleAlign: "center",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="home" size={size} color={color} />
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
        }}
      />
    </Tabs>
  );
}
