import { StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Redirect, Slot, useRouter } from "expo-router";
import { AuthContext } from "../services/context/AuthContext";

const index = () => {
  const { role, isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Redirect href="auth" />;
  }
  if (role == "user") {
    return <Redirect href="user/(tabs)" />;
  }
  if (role == "company") {
    return <Redirect href="company/(tabs)" />;
  }
  if (role == "admin") {
    return <Redirect href="admin/(tabs)" />;
  }


  return <Slot />;
};

export default index;
