import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const DetailPage = () => {
  const params = useLocalSearchParams();

  const { fullName, email, createdAt } = params;

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          <Text style={styles.titleText}>{fullName}</Text>
          <Text style={styles.mainText1}>
            Full Name: <Text style={styles.subText1}>{fullName}</Text>
          </Text>
          <Text style={styles.mainText1}>
            Email: <Text style={styles.subText1}>{email}</Text>
          </Text>

          <Text style={styles.mainText1}>
            Date Joined:{" "}
            <Text style={styles.subText1}>
              {new Date(createdAt).toLocaleString()}
            </Text>
          </Text>
        </View>
      </ScrollView>
      <Link href={"/admin/usersList"} asChild>
        <TouchableOpacity style={styles.backBtn}>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Back to Users List
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

export default DetailPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  wrapper: {
    gap: 20,
  },
  titleText: {
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 20,
  },
  mainText1: {
    marginBottom: 1,
    fontWeight: "bold",
  },
  subText1: {
    fontWeight: "400",
  },
  companyLogo: {
    height: "100%",
    maxHeight: 300,
    width: "100%",
    objectFit: "contain",
  },
  backBtn: {
    marginTop: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: "#111",
  },
});
