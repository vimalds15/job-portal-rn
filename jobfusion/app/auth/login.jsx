import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";

import React, { useContext, useState } from "react";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/logo.png";
import { Link, useRouter } from "expo-router";
import { login } from "../../services/api";
import { AuthContext } from "../../services/context/AuthContext";
import { CompanyContext } from "../../services/context/CompanyContext";
import { UserContext } from "../../services/context/UserContext";

const LoginPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const { login: loginContext, error, setError } = useContext(AuthContext);

  const { updateCompanyInfo } = useContext(CompanyContext);
  const { updateUserInfo } = useContext(UserContext);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await login(userName, password);
      const role = response.token.role;
      loginContext(role);

      if (role === "user") {
        updateUserInfo(response.token.details);
      } else if (role === "company") {
        updateCompanyInfo(response.token.details);
      }
      ToastAndroid.showWithGravity(
        "Logged in Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
      router.push(`/${role}/(tabs)`);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error.message);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />
      <Text style={styles.titleText}>Login</Text>
      <View style={styles.infoContainer}>
        <View style={styles.infoWrapper}>
          {error && <Text style={{ color: "#dc0a0a" }}>{error}</Text>}
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
            textContentType="password"
            secureTextEntry
            placeholderTextColor={"#7f7f7f"}
            style={styles.textInput}
          />
        </View>
      </View>
      {!loading ? (
        <>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
          <Text>
            Don't have an account?{" "}
            <Link
              href={"/auth/register"}
              style={{ color: "#ff8000", fontWeight: "bold" }}
            >
              Register Here
            </Link>
          </Text>
        </>
      ) : (
        <ActivityIndicator style={{ marginTop: 10 }} />
      )}
    </View>
  );
};

export default LoginPage;

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
