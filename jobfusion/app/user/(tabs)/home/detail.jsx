import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";

const DetailPage = () => {
  const params = useLocalSearchParams();

  const {
    _id,
    title,
    companyName,
    description,
    salary,
    preference,
    location,
    updatedAt,
  } = params;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.detailCard}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.companyText}>
            {companyName}{" "}
            <Text style={styles.companyLocation}>- {location}</Text>
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.jdTitle}>Job Description</Text>
          <Text style={styles.jdText}>{description}</Text>
          <Text style={styles.jdTitle}>Job Details</Text>
          <Text style={styles.mainText}>
            Salary: <Text style={styles.subText}>{salary}</Text>
          </Text>
          <Text style={styles.mainText}>
            Preference: <Text style={styles.subText}>{preference}</Text>
          </Text>
          <Text style={styles.mainText}>
            Location: <Text style={styles.subText}>{location}</Text>
          </Text>
          <Text style={styles.mainText}>
            Date Posted:{" "}
            <Text style={styles.subText}>
              {" "}
              {new Date(updatedAt).toLocaleString()}
            </Text>
          </Text>
          <Text style={styles.mainText}>
            Job Type: <Text style={styles.subText}>Full-time</Text>
          </Text>

          <Text style={styles.jdTitle}>How to Apply</Text>
          <Text>
            To apply for this position, please send your resume and cover letter
            to .
          </Text>
        </View>
        <View style={styles.ctaContainer}>
          <Link href={{ pathname: "user/home/apply", params }} asChild>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Apply Now</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
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
    borderWidth: 2,
    borderColor: "#c8c8c8",
    borderRadius: 5,
    overflow: "hidden",
  },
  detailCard: {
    backgroundColor: "#0084ff",
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
    marginBottom: 5,
  },
  companyText: {
    fontWeight: "600",
    color: "#fff",
  },
  companyLocation: {
    fontWeight: "400",
  },
  descriptionContainer: {
    padding: 15,
    rowGap: 10,
  },
  jdTitle: {
    fontSize: 18,
    fontWeight: "600",
  },
  mainText: {
    fontWeight: "700",
  },
  subText: {
    fontWeight: "400",
  },
  ctaContainer: {
    padding: 20,
    alignSelf: "center",
  },
  btn: {
    backgroundColor: "#0084ff",
    paddingVertical: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
