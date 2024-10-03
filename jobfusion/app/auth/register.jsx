import { StyleSheet, Text, TextInput, View, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/logo.png";
import User from "../../assets/user.png";
import { Link } from "expo-router";

const RegisterPage = () => {
  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.titleText}>Register</Text>

      <View style={styles.optionContainer}>
        <Link href={"/auth/user"} asChild>
          <TouchableOpacity style={styles.wrapper}>
            <Image source={User} style={styles.user} />
            <Text>User Signup</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/auth/company"} asChild>
          <TouchableOpacity style={styles.wrapper}>
            <Image source={User} style={styles.user} />
            <Text>Company Signup</Text>
          </TouchableOpacity>
        </Link>
        <Link href={"/auth/admin"} asChild>
          <TouchableOpacity style={styles.wrapper}>
            <Image source={User} style={styles.user} />
            <Text>Admin Signup</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <Text>
        Already have an account?{" "}
        <Link
          href={"/auth/login"}
          style={{ color: "#ff8000", fontWeight: "bold" }}
        >
          Login Here
        </Link>
      </Text>
    </View>
  );
};

export default RegisterPage;

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
  logo: {
    marginTop: -100,
  },
  user: {
    height: 100,
    width: 100,
  },
  optionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 25,
    justifyContent: "center",
    marginBottom: 25,
  },
  wrapper: {
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#e6e6e6",
    padding: 4,
  },
});
