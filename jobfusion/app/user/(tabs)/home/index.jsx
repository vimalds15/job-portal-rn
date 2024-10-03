import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router, useNavigation } from "expo-router";
import { getAllJobs } from "../../../../services/api";
import { flattenArray } from "../../../../utils/common";

const Home = () => {
  const [jobs, setJobs] = useState([]);

  const navigation = useNavigation();

  const fetchData = async () => {
    const response = await getAllJobs();
    const processedData = flattenArray(response.data);
    console.log("processed", processedData);
    setJobs(processedData);
  };

  useEffect(() => {
    navigation.setOptions({
      headerTitle: "Job Fusion",
      headerTitleAlign: "center",
      headerLeft: null,
    });
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.wrapper}>
          {jobs?.map((job) => (
            <Pressable
              key={job._id}
              style={{ width: "100%" }}
              onPress={() => {
                router.push({ pathname: "/user/home/detail", params: job });
              }}
            >
              <View style={{ width: "100%" }}>
                <View key={job._id} style={styles.jobCard}>
                  <View>
                    <Image src={job.companyLogo} style={styles.companyLogo} />
                  </View>
                  <View style={{ gap: 2, marginLeft: 10 }}>
                    <Text style={styles.roleText}>{job.title}</Text>
                    <Text style={styles.companyText}>TCS | bangalore</Text>
                    <Text style={styles.salaryText}>Salary: {job.salary}</Text>
                    <Text style={styles.preferenceText}>
                      Preference: {job.preference}
                    </Text>
                    <Text style={styles.ratingText}>Rating: 4.1</Text>
                  </View>
                </View>
              </View>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eaeaea",
    justifyContent: "center",
    padding: 20,
  },
  wrapper: {
    gap: 15,
  },
  jobCard: {
    flexDirection: "row",
    backgroundColor: "#ffffff",
    padding: 10,
    alignItems: "center",
    width: "100%",
    height: 130,
    borderRadius: 5,
  },
  companyLogo: {
    height: 90,
    width: 90,
    objectFit: "contain",
  },
  ctaContainer: {
    flexDirection: "row",
  },
  roleText: {
    fontWeight: "700",
  },
  ratingText: {
    backgroundColor: "#16af25",
    width: 80,
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 5,
    color: "#fff",
  },
});
