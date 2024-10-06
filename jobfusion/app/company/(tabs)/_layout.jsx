import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";
import Logo from "../../../assets/logo.png";
import { Image } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      initialRouteName="dashboard"
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: "#000000",
        headerTitleAlign: "center",
        tabBarStyle: {
          paddingVertical: 10,
        },
        tabBarLabelStyle: {
          marginBottom: 5,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          headerTitle: "Company Dashboard",
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
        name="addNewJob"
        options={{
          title: "Add New Job",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="plus" size={size} color={color} />
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
        name="application"
        options={{
          title: "Applications",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome name="list" size={size} color={color} />
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
        name="companyProfile"
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
