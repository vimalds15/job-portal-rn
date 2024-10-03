import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Link } from "expo-router";
import {
  getAllApplications,
  getAllCompanies,
  getAllJobs,
  getAllUsers,
} from "../../../services/api";

const DashboardPage = () => {
  const [users, setUsers] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [jobPostings, setJobPostings] = useState(0);
  const [applications, setApplications] = useState(0);

  const fetchJobData = async () => {
    const jobs = await getAllJobs();
    const userData = await getAllUsers();
    const companyData = await getAllCompanies();
    const applicationData = await getAllApplications();

    setUsers(userData.users.length);
    setCompanies(companyData.companies.length);
    setApplications(applicationData.applications.length);
    setJobPostings(jobs.data.length);
    console.log(jobs, userData, companyData, applicationData);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.jobContainer}>
            <Text style={styles.title}>Total Users</Text>
            <Text style={styles.subTitle}>{users}</Text>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.title}>Total Companies</Text>
            <Text style={styles.subTitle}>{companies}</Text>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.title}>Total Job Postings</Text>
            <Text style={styles.subTitle}>{jobPostings}</Text>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.title}>Total Applications</Text>
            <Text style={styles.subTitle}>{applications}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
    gap: 10,
    height: "100%",
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  jobContainer: {
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "#e6e6e6",
  },
  acceptedContainer: {
    backgroundColor: "#048e39",
    padding: 10,
    borderRadius: 5,
  },
  rejectedContainer: {
    backgroundColor: "#d9c403",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "600",
  },
  companyInfo: {
    backgroundColor: "#dad9d9",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#c1c1c1",
  },
  companyContainer: {
    borderWidth: 1,
    borderColor: "#c1c1c1",
    borderRadius: 5,
  },
  companyDesc: {
    padding: 10,
  },
  mainText: {
    marginBottom: 10,
    fontWeight: "bold",
  },
  subText: {
    fontWeight: "400",
  },
  mainText1: {
    marginBottom: 1,
    fontWeight: "bold",
  },
  subText1: {
    fontWeight: "400",
  },
  recentTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  recentCard: {
    borderWidth: 2,
    borderColor: "#c3c3c3",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  ctaContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },
  editBtn: {
    borderWidth: 2,
    borderColor: "#111",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteBtn: {
    backgroundColor: "#111",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#fff",
  },
});
