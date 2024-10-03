import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import { router, useLocalSearchParams } from "expo-router";

const DetailPage = () => {
  const params = useLocalSearchParams();

  const {
    companyName,
    companyLogo,
    description,
    about,
    license,
    website,
    industryType,
    createdAt,
  } = params;

  console.log(params);

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={{ flex: 1, height: "100%" }}
        style={{ flex: 1, height: "100%" }}
        showsVerticalScrollIndicator={true}
      >
        <Text style={styles.titleText}>{companyName}</Text>
        <Image src={companyLogo} style={styles.companyLogo} />
        <Text style={styles.mainText1}>
          Company Name: <Text style={styles.subText1}>{companyName}</Text>
        </Text>
        <Text style={styles.mainText1}>
          About: <Text style={styles.subText1}>{about}</Text>
        </Text>
        <Text style={styles.mainText1}>
          Description: <Text style={styles.subText1}>{description}</Text>
        </Text>
        <Text style={styles.mainText1}>
          License: <Text style={styles.subText1}>{license}</Text>
        </Text>
        <Text style={styles.mainText1}>
          Industry Type: <Text style={styles.subText1}>{industryType}</Text>
        </Text>
        <Text style={styles.mainText1}>
          Website: <Text style={styles.subText1}>{website}</Text>
        </Text>
        <Text style={styles.mainText1}>
          Joined At:{" "}
          <Text style={styles.subText1}>
            {new Date(createdAt).toLocaleString()}
          </Text>
        </Text>
      </ScrollView>
      <Pressable
        style={styles.backBtn}
        onPress={() => router.push("/admin/companies")}
      >
        <Text style={{ color: "#fff", textAlign: "center" }}>
          Back to Company List
        </Text>
      </Pressable>
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
    flex: 1,
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
