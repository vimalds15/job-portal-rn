import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { createJob } from "../../../services/api";
import { CompanyContext } from "../../../services/context/CompanyContext";
import { JobContext } from "../../../services/context/JobContext";

const AddNewJob = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [preference, setPreference] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { jobs, updateJobs } = useContext(JobContext);

  const { companyInfo } = useContext(CompanyContext);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      if (jobTitle && jobDescription && location && salary && preference) {
        setError("");
        const { companyName, _id: companyId, companyLogo } = companyInfo;
        const userData = {
          title: jobTitle,
          description: jobDescription,
          companyLogo,
          companyName,
          location,
          salary: "company",
          preference,
          companyId,
        };
        const response = await createJob(userData);
        ToastAndroid.showWithGravity(
          "Created Successfully",
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
          0,
          100
        );
        const newJob = response.data;
        const updatedJobs = [...jobs, newJob];
        updateJobs(updatedJobs);
        setJobTitle("");
        setJobDescription("");
        setLocation("");
        setSalary("");
        setPreference("");
      } else {
        setError("Please fill all the fields");
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            value={jobTitle}
            onChangeText={(val) => setJobTitle(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Job Description</Text>
          <TextInput
            value={jobDescription}
            onChangeText={(val) => setJobDescription(val)}
            style={styles.textInputDescription}
          />
        </View>
        <View>
          <Text style={styles.label}>Location</Text>
          <TextInput
            value={location}
            onChangeText={(val) => setLocation(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Salary</Text>
          <TextInput
            value={salary}
            onChangeText={(val) => setSalary(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Preference</Text>
          <TextInput
            value={preference}
            onChangeText={(val) => setPreference(val)}
            style={styles.textInput}
          />
        </View>
        {!loading ? (
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Add Job</Text>
          </TouchableOpacity>
        ) : (
          <ActivityIndicator style={{ marginTop: 20 }} />
        )}
        {error && (
          <Text
            style={{ marginTop: 10, color: "#cc0808", textAlign: "center" }}
          >
            {error}
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

export default AddNewJob;

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    backgroundColor: "#fff",
  },
  titleText: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textInput: {
    borderWidth: 2,
    borderColor: "#cbcaca",
    height: 40,
    marginTop: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  textInputDescription: {
    borderWidth: 2,
    borderColor: "#cbcaca",
    height: 100,
    marginTop: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: "600",
  },
  btn: {
    backgroundColor: "#0084ff",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
