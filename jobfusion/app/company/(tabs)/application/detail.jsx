import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import Dropdown from "../../../../components/DropDown";
import { updateApplication } from "../../../../services/api";
import { ApplicationContext } from "../../../../services/context/ApplicationContext";
import ResumeDocumentPicker from "../../../../components/ResumeDocumentPicker";

const DetailPage = () => {
  const { applications, setApplications } = useContext(ApplicationContext);
  const params = useLocalSearchParams();
  const {
    applicantName,
    coverLetter,
    jobTitle,
    resume,
    feedback: fetchedFeedback = "",
    status: fetchedStatus,
    "userId.email": email,
    _id: applicationId,
  } = params;

  const [status, setStatus] = useState(fetchedStatus);
  const [feedback, setFeedback] = useState(fetchedFeedback);
  const [loading, setLoading] = useState(false);

  console.log(params);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        status,
        feedback,
      };
      const response = await updateApplication(applicationId, payload);
      ToastAndroid.showWithGravity(
        "Saved Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
      const updatedApplication = response.application;
      const updatedApplications = applications.map((application) =>
        application._id === applicationId ? updatedApplication : application
      );
      setApplications(updatedApplications);
      setLoading(false);
      router.replace("/company/application");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleGoBack = () => {
    router.navigate("/company/dashboard");
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.detailCard}>
          <Text style={styles.titleText}>
            Manage Application for {jobTitle}
          </Text>
          <Text style={styles.companyText}>
            Applicant - {applicantName}{" "}
            <Text style={styles.companyLocation}> {email}</Text>
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View>
            <Text style={styles.label}>
              Full Name: <Text style={styles.subText}>{applicantName}</Text>
            </Text>
          </View>
          <View>
            <Text style={styles.label}>Resume:</Text>
            <ResumeDocumentPicker pdfUrl={resume} disableUpload />
          </View>
          <View>
            <Text style={styles.label}>Cover Letter:</Text>
            <Text style={styles.subText}>{coverLetter}</Text>
          </View>
          <View>
            <Text style={styles.label}>Status: </Text>
            <Dropdown value={status} setValue={setStatus} />
          </View>
          <View style={{ marginTop: 50 }}>
            <Text style={styles.label}>Feedback:</Text>
            <TextInput
              value={feedback}
              onChangeText={(val) => setFeedback(val)}
              style={styles.textInputCoverLetter}
            />
          </View>
        </View>
        <View style={styles.ctaContainer}>
          {!loading ? (
            <>
              <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
                <Text style={styles.btnText}>Save Changes</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.backBtn} onPress={handleGoBack}>
                <Text style={styles.btnText}>Back to Dashboard</Text>
              </TouchableOpacity>
            </>
          ) : (
            <ActivityIndicator />
          )}
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
    borderWidth: 1,
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
  ctaContainer: {
    padding: 20,
    alignSelf: "center",
    flexDirection: "row",
    gap: 20,
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
  textInput: {
    borderWidth: 1,
    borderColor: "#cbcaca",
    height: 40,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  textInputCoverLetter: {
    borderWidth: 1,
    borderColor: "#cbcaca",
    height: 150,
    marginTop: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  label: {
    fontWeight: "600",
  },
  subText: {
    fontWeight: "400",
  },
  backBtn: {
    backgroundColor: "#111",
    paddingVertical: 10,
    borderRadius: 4,
    paddingHorizontal: 10,
  },
});
