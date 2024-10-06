import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  getAllApplications,
  getAllCompanies,
  getAllJobs,
  getAllUsers,
} from "../../../../services/api";
import AdminPieChart from "../../../../components/AdminPieChart";
import { router } from "expo-router";

const DashboardPage = () => {
  const [users, setUsers] = useState(0);
  const [companies, setCompanies] = useState(0);
  const [jobPostings, setJobPostings] = useState(0);
  const [applications, setApplications] = useState(0);
  const [notifications, setNotifications] = useState([]);

  const fetchJobData = async () => {
    const jobs = await getAllJobs();
    const userData = await getAllUsers();
    const companyData = await getAllCompanies();
    const applicationData = await getAllApplications();

    setUsers(userData.users.length);
    setCompanies(companyData.companies.length);
    setApplications(applicationData.applications.length);
    setNotifications(applicationData.applications);
    setJobPostings(jobs.data.length);
    console.log(jobs, userData, companyData, applicationData);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const acceptedApplications =
    notifications?.filter((notification) => notification.status === "Accepted")
      .length || 1;
  const rejectedApplications =
    notifications?.filter((notification) => notification.status === "Rejected")
      .length || 1;

  console.log(acceptedApplications, rejectedApplications);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View style={styles.jobContainer}>
            <Text style={styles.subTitle}>{users}</Text>
            <Text style={styles.title}>Total Users</Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => router.push("/admin/usersList")}
            >
              <Text style={{ color: "#fff" }}>Manage Users</Text>
            </Pressable>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.subTitle}>{companies}</Text>
            <Text style={styles.title}>Total Companies</Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => router.push("/admin/companies")}
            >
              <Text style={{ color: "#fff" }}>Manage Companies</Text>
            </Pressable>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.subTitle}>{jobPostings}</Text>
            <Text style={styles.title}>Total Job Postings</Text>
            <Pressable
              style={styles.btnContainer}
              onPress={() => router.push("/admin/dashboard/detail")}
            >
              <Text style={{ color: "#fff" }}>Manage Job Postings</Text>
            </Pressable>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.subTitle}>{applications}</Text>
            <Text style={styles.title}>Total Applications</Text>
            <Pressable style={styles.btnContainer}>
              <Text style={{ color: "#fff" }}>Manage Applications</Text>
            </Pressable>
          </View>
          <View style={styles.jobContainer}>
            <Text style={styles.subTitle}>
              Total Applications: {applications}
            </Text>
            <Text style={styles.subTitle}>Total Users: {users}</Text>
          </View>
          <AdminPieChart
            accepted={acceptedApplications}
            rejected={rejectedApplications}
            notApplied={Math.ceil(acceptedApplications / 2)}
          />
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
    minHeight: 140,
    alignItems: "center",
    justifyContent: "space-evenly",
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
    textAlign: "center",
  },
  subTitle: {
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
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
  btnContainer: {
    backgroundColor: "#1757f7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
