import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { getAllApplicationsUser } from "../../../services/api/applicationService";
import { UserContext } from "../../../services/context/UserContext";

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);
  const {
    userInfo: { _id: userId },
  } = useContext(UserContext);

  const fetchData = async () => {
    try {
      const response = await getAllApplicationsUser(userId);
      console.log(response.applications);
      setNotifications(response.applications);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const acceptedApplications = notifications.filter(
    (notification) => notification.status === "Accepted"
  );
  const rejectedApplications = notifications.filter(
    (notification) => notification.status === "Rejected"
  );

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {acceptedApplications.length > 0 && (
          <Text style={styles.subTitleText}>Accepted Applications</Text>
        )}
        {acceptedApplications.map((application) => (
          <View key={application._id} style={styles.notificationCard}>
            <View style={styles.notificationStatus}>
              <Text style={styles.notificationStatusText}>
                Application Accepted!
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Text>Company: {application.companyName}</Text>
              <Text style={styles.detailTitleText}>
                Job Title:{" "}
                <Text style={styles.detailSubtitleText}>
                  {application.jobTitle}
                </Text>
              </Text>
              <Text style={styles.detailTitleText}>
                Applied Date:{" "}
                <Text style={styles.detailSubtitleText}>
                  {new Date(application.createdAt).toLocaleString()}
                </Text>
              </Text>
              <Text style={styles.detailTitleText}>
                Status: <Text style={styles.detailSubtitleText}> Accepted</Text>
              </Text>
              <Text>
                Congratulations! Your application for this position has been
                accepted. Keep up the great work!
              </Text>
            </View>
            <View style={styles.jobDetailContainer}>
              <TouchableOpacity style={styles.jobDetailSubContainer}>
                <Text style={styles.viewJobDetailsText}>View Job Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
        {rejectedApplications.length > 0 && (
          <Text style={styles.subTitleText1}>Rejected Applications</Text>
        )}
        {rejectedApplications.map((application) => (
          <View key={application._id} style={styles.notificationCard}>
            <View style={styles.notificationStatusRejected}>
              <Text style={styles.notificationStatusText}>
                Application Rejected!
              </Text>
            </View>
            <View style={styles.detailContainer}>
              <Text>Compay: {application.companyName}</Text>
              <Text style={styles.detailTitleText}>
                Job Title:{" "}
                <Text style={styles.detailSubtitleText}>
                  {application.jobTitle}
                </Text>
              </Text>
              <Text style={styles.detailTitleText}>
                Applied Date:{" "}
                <Text style={styles.detailSubtitleText}>
                  {new Date(application.createdAt).toLocaleString()}
                </Text>
              </Text>
              <Text style={styles.detailTitleText}>
                Status:{" "}
                <Text style={styles.detailSubtitleText}>
                  {application.status}
                </Text>
              </Text>
              <Text>
                We're sorry, but your application for this position was not
                successful. Keep trying, and best of luck with your job search!
              </Text>
            </View>
            <View style={styles.jobDetailContainer}>
              <TouchableOpacity style={styles.jobDetailSubContainer}>
                <Text style={styles.viewJobDetailsText}>View Job Details</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        {acceptedApplications.length === 0 &&
          rejectedApplications.length === 0 && (
            <Text style={styles.titleText}>No Notifications</Text>
          )}
      </ScrollView>
    </View>
  );
};

export default NotificationsPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titleText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5,
  },
  subTitleText: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },
  notificationCard: {
    borderWidth: 2,
    borderColor: "#c2c2c2",
    borderRadius: 5,
    overflow: "hidden",
    marginBottom: 20,
  },
  notificationStatus: {
    backgroundColor: "#459554",
  },
  notificationStatusRejected: {
    backgroundColor: "#d33313",
  },
  notificationStatusText: {
    textAlign: "center",
    color: "#FFF",
    paddingVertical: 15,
  },
  detailContainer: {
    rowGap: 6,
    padding: 10,
  },
  detailTitleText: {
    fontWeight: "bold",
  },
  viewJobDetailsText: {
    color: "#FFf",
    fontWeight: "600",
  },
  detailSubtitleText: {
    fontWeight: "400",
  },
  jobDetailContainer: {
    borderTopWidth: 2,
    borderTopColor: "#c2c2c2",
  },
  jobDetailSubContainer: {
    backgroundColor: "#0084ff",
    marginVertical: 4,
    alignSelf: "center",
    paddingHorizontal: 15,
    borderRadius: 5,
    paddingVertical: 10,
  },
  subTitleText1: {
    marginVertical: 20,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "500",
  },
});
