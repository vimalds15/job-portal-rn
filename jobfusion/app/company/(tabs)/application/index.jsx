import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { getAllApplicationsCompany } from "../../../../services/api/applicationService";
import { CompanyContext } from "../../../../services/context/CompanyContext";
import { Link } from "expo-router";
import { flattenObject } from "../../../../utils/common";
import { ApplicationContext } from "../../../../services/context/ApplicationContext";

const ApplicationsPage = () => {
  const { applications, setApplications } = useContext(ApplicationContext);
  const { companyInfo } = useContext(CompanyContext);

  const { userName } = companyInfo;

  const fetchData = async () => {
    try {
      const response = await getAllApplicationsCompany(userName);
      setApplications(response.applications);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {applications?.map((application) => (
          <View key={application._id} style={styles.recentCard}>
            <View>
              <Text style={styles.mainText1}>
                Applicant Name:{" "}
                <Text style={styles.subText1}>{application.applicantName}</Text>
              </Text>
              <Text style={styles.mainText1}>
                Job Title:{" "}
                <Text style={styles.subText1}>{application.jobTitle}</Text>
              </Text>
              <Text style={styles.mainText1}>
                Status:{" "}
                <Text style={styles.subText1}>{application.status}</Text>
              </Text>
              <Text style={styles.mainText1}>
                Application Date:
                <Text style={styles.subText1}>
                  {" "}
                  {new Date(application.updatedAt).toLocaleString()}
                </Text>
              </Text>
              <View style={styles.ctaContainer}>
                <Link
                  href={{
                    pathname: "/company/application/detail",
                    params: flattenObject(application),
                  }}
                  asChild
                >
                  <TouchableOpacity style={styles.editBtn}>
                    <Text style={{ color: "#fff" }}>Manage Application</Text>
                  </TouchableOpacity>
                </Link>
              </View>
            </View>
          </View>
        ))}
        {applications.length===0 && (
          <Text>No Applications Yet...</Text>
        )

        }
      </ScrollView>
    </View>
  );
};

export default ApplicationsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  recentCard: {
    borderWidth: 2,
    borderColor: "#c3c3c3",
    borderRadius: 5,
    padding: 10,
    backgroundColor: "#fff",
    marginBottom: 10,
  },
  ctaContainer: {
    flexDirection: "row",
    gap: 15,
    marginTop: 10,
  },
  editBtn: {
    backgroundColor: "#1757f7",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
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
});
