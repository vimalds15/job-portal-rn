import {
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../../services/context/AuthContext";

const LogoutPage = () => {
  const { logout } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View>
        <Text>Are you sure?</Text>
        <TouchableOpacity style={styles.logoutBtn} onPress={() => logout()}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LogoutPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  logoutBtn: {
    backgroundColor: "black",
    marginTop: 10,
  },
  logoutText: {
    color: "#fff",
    textAlign: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
});
