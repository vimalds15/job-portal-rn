import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  Pressable,
  ActivityIndicator,
  ToastAndroid,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import Logo from "../../assets/logo.png";
import { Link, router } from "expo-router";
import { register } from "../../services/api";
import ProfileImagePicker from "../../components/ProfileImagePicker";

const CompanySignupPage = () => {
  const [userName, setUserName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [companyLogo, setCompanyLogo] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [notCompleted, setNotCompleted] = useState("");

  const handleSubmit = async () => {
    if (userName && companyName && companyLogo && contactNumber && password) {
      try {
        setLoading(true);
        const userData = {
          userName,
          companyLogo,
          companyName,
          contactNumber,
          password,
          role: "company",
        };
        const response = await register(userData);
        ToastAndroid.showWithGravity(
          "Registered Successfully",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          100
        );
        console.log("response", response);
        setLoading(false);
        router.push("/auth/login");
      } catch (error) {
        ToastAndroid.showWithGravity(
          "User Already Exists",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          100
        );
        setLoading(false);
        console.log(error);
      }
    } else {
      setNotCompleted("Please fill all details");
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image source={Logo} style={styles.logo} />
          <Text style={styles.titleText}>Company Signup</Text>
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
              <Text style={styles.label}>Company Name</Text>
              <TextInput
                value={companyName}
                onChangeText={(val) => setCompanyName(val)}
                placeholder="Enter your company name"
                placeholderTextColor={"#7f7f7f"}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrapper}>
              <Text style={styles.label}>Contact Number</Text>
              <TextInput
                value={contactNumber}
                onChangeText={(val) => setContactNumber(val)}
                placeholder="Enter your contact number"
                placeholderTextColor={"#7f7f7f"}
                style={styles.textInput}
              />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <View style={styles.infoWrapper}>
              <Text style={styles.label}>Company Logo</Text>
              <ProfileImagePicker
                image={companyLogo}
                setImage={setCompanyLogo}
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
            <ActivityIndicator style={{ marginTop: 20 }} />
          )}

          {notCompleted && (
            <Text
              style={{ marginTop: 10, color: "#cc0808", textAlign: "center" }}
            >
              {notCompleted}
            </Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default CompanySignupPage;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    paddingTop: 100,
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
