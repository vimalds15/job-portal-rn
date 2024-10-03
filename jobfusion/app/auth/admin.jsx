import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/logo.png";
import { router } from "expo-router";
import { register } from "../../services/api";

const AdminSignUpPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        userName,
        password,
        role: "admin",
      };
      const response = await register(payload);
      router.replace("/auth/login");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.titleText}>Admin Signup</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          <Text style={styles.label}>Username</Text>
          <TextInput
            value={userName}
            onChangeText={(val) => setUserName(val)}
            placeholder="Enter your username"
            placeholderTextColor={"#7f7f7f"}
            style={styles.textInput}
          />
        </View>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          <Text style={styles.label}>Password</Text>
          <TextInput
            value={password}
            onChangeText={(val) => setPassword(val)}
            placeholder="Enter your password"
            placeholderTextColor={"#7f7f7f"}
            style={styles.textInput}
            secureTextEntry
          />
        </View>
      </View>
      {!loading ? (
        <>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Sign Up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: "row" }}>
            <Text>Already have an account? </Text>
            <Pressable onPress={() => router.push("/auth/login")}>
              <Text style={{ color: "#ff8000", fontWeight: "bold" }}>
                Login Here
              </Text>
            </Pressable>
          </View>
        </>
      ) : (
        <ActivityIndicator style={{ marginTop: 15 }} />
      )}
    </View>
  );
};

export default AdminSignUpPage;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cbcaca",
    height: 40,
    marginTop: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    alignSelf: "center",
    width: "100%",
  },
  label: {
    textAlign: "auto",
    width: "85%",
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#0084ff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
  infoContainer: {
    width: "100%",
  },
  infoWrapper: {
    width: "80%",
    alignSelf: "center",
  },
});
