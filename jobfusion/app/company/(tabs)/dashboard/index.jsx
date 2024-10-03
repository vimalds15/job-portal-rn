import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { CompanyContext } from "../../../../services/context/CompanyContext";
import { getJobByCompanyId } from "../../../../services/api";
import { Link } from "expo-router";
import { getAllApplicationsCompany } from "../../../../services/api/applicationService";
import { JobContext } from "../../../../services/context/JobContext";

const DashboardPage = () => {
  const [applications, setApplications] = useState([]);
  const { jobs, updateJobs } = useContext(JobContext);

  const { companyInfo = {} } = useContext(CompanyContext);
  const {
    _id: companyId = "",
    companyLogo,
    industryType,
    companyName,
    about,
    landline,
    userName,
  } = companyInfo;

  const fetchJobData = async () => {
    const response = await getJobByCompanyId(companyId);
    const data = await getAllApplicationsCompany(userName);
    const processedData = data.applications;
    console.log(processedData);
    setApplications(processedData);
    updateJobs(response.data);
    console.log(response.data);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const acceptedApplicants = applications?.filter(
    (application) => application.status === "Accepted"
  ).length;

  const rejectedApplicants = applications?.filter(
    (application) => application.status === "Rejected"
  ).length;
  return (
    <View style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text style={styles.companyName}>{companyName}</Text>
          <View style={styles.jobContainer}>
            <Text style={styles.title}>Total Jobs</Text>
            <Text style={styles.subTitle}>{jobs.length}</Text>
          </View>
          <View style={styles.acceptedContainer}>
            <Text style={styles.title}>Accepted Applicants</Text>
            <Text style={styles.subTitle}>{acceptedApplicants || 0}</Text>
          </View>
          <View style={styles.rejectedContainer}>
            <Text style={styles.title}>Rejected Applicants</Text>
            <Text style={styles.subTitle}>{rejectedApplicants || 0}</Text>
          </View>

          <View style={styles.companyContainer}>
            <View style={styles.companyInfo}>
              <Text>Company Information</Text>
            </View>
            <View style={styles.companyDesc}>
              <Image src={companyLogo} style={{ height: 150, width: 150 }} />
              <Text style={styles.mainText}>
                Industry Type:{" "}
                <Text style={styles.subText}>{industryType}</Text>
              </Text>
              <Text style={styles.mainText}>
                Landline: <Text style={styles.subText}>{landline}</Text>
              </Text>
              <Text style={styles.mainText}>About the Company</Text>

              <Text>
                {about}
              </Text>
            </View>
          </View>

          <View>
            <Text style={styles.recentTitle}>Recent Jobs</Text>
            {jobs?.map((job) => (
              <View key={job._id} style={styles.recentCard}>
                <View>
                  <Text style={styles.mainText1}>
                    Job Title: <Text style={styles.subText1}>{job.title}</Text>
                  </Text>
                  <Text style={styles.mainText1}>
                    Description:{" "}
                    <Text style={styles.subText1}>{job.description}</Text>
                  </Text>
                  <Text style={styles.mainText1}>
                    Location:{" "}
                    <Text style={styles.subText1}>{job.location}</Text>
                  </Text>
                  <Text style={styles.mainText1}>
                    Preference:
                    <Text style={styles.subText1}> {job.preference}</Text>
                  </Text>
                  <Text style={styles.mainText1}>
                    Posted At:
                    <Text style={styles.subText1}>
                      {" "}
                      {new Date(job.updatedAt).toLocaleString()}
                    </Text>
                  </Text>
                  <View style={styles.ctaContainer}>
                    <Link
                      href={{
                        pathname: "/company/dashboard/edit",
                        params: job,
                      }}
                      asChild
                    >
                      <TouchableOpacity style={styles.editBtn}>
                        <Text>Edit</Text>
                      </TouchableOpacity>
                    </Link>
                  </View>
                </View>
              </View>
            ))}
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
  },
  companyName: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  jobContainer: {
    backgroundColor: "#3f6ae1",
    padding: 10,
    borderRadius: 5,
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
    color: "#fff",
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitle: {
    fontSize: 24,
    color: "#fff",
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
