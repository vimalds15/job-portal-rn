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
import { UserContext } from "../../../../services/context/UserContext";
import { createApplication } from "../../../../services/api";
import ResumeDocumentPicker from "../../../../components/ResumeDocumentPicker";

const ApplyPage = () => {
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [resume, setResume] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  const params = useLocalSearchParams();
  const { userInfo } = useContext(UserContext);

  const { _id: userId } = userInfo;

  const {
    _id,
    title,
    "companyId._id": fetchedCompanyId,
    "companyId.userName": fetchedUserName,
    "companyId.companyName": fetchedCompanyName,
  } = params;

  console.log("params", params);

  const handleSubmit = async () => {
    if (fullName && age && coverLetter && resume) {
      try {
        setLoading(true);
        const payload = {
          applicantName: fullName,
          coverLetter,
          age,
          companyId: fetchedCompanyId,
          jobId: _id,
          userId,
          resume,
          jobTitle: title,
          companyUserName: fetchedUserName,
          companyName: fetchedCompanyName,
        };

        const response = await createApplication(payload);
        ToastAndroid?.showWithGravity(
          "Applied Successfully",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          100
        );
        setLoading(false);
        router.replace("/user/home");
      } catch (error) {
        setLoading(false);
        console.error(error);
      }
    } else {
      setError("Please fill All fields");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.detailCard}>
          <Text style={styles.titleText}>
            Assistant System Engineer Trainee
          </Text>
          <Text style={styles.companyText}>
            TCS <Text style={styles.companyLocation}>- Banglore</Text>
          </Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View>
            <Text style={styles.label}>Full Name</Text>
            <TextInput
              value={fullName}
              onChangeText={(val) => setFullName(val)}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={styles.label}>Age</Text>
            <TextInput
              value={age}
              onChangeText={(val) => setAge(val)}
              style={styles.textInput}
            />
          </View>
          <View>
            <Text style={styles.label}>Cover Letter</Text>
            <TextInput
              value={coverLetter}
              onChangeText={(val) => setCoverLetter(val)}
              style={styles.textInputCoverLetter}
            />
          </View>
          <View>
            <Text style={styles.label}>Resume</Text>
            <ResumeDocumentPicker pdfUrl={resume} setPdfUrl={setResume} />
          </View>
        </View>
        <View style={styles.ctaContainer}>
          {!loading ? (
            <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
              <Text style={styles.btnText}>Submit Application</Text>
            </TouchableOpacity>
          ) : (
            <ActivityIndicator />
          )}
          {error && (
            <Text
              style={{ marginTop: 10, color: "#cc0808", textAlign: "center" }}
            >
              {error}
            </Text>
          )}
        </View>
      </View>
    </View>
  );
};

export default ApplyPage;

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
});
