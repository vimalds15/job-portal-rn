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
import { deleteJob, updateJob } from "../../../../services/api";
import { router, useLocalSearchParams } from "expo-router";
import { JobContext } from "../../../../services/context/JobContext";

const CompanyProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const { jobs, updateJobs } = useContext(JobContext);

  const params = useLocalSearchParams();

  const {
    _id: jobId,
    title: ftitle,
    salary: fsalary,
    preference: fpreference,
    description: fdescription,
    location: flocation,
  } = params;

  const [title, setTitle] = useState(ftitle);
  const [salary, setSalary] = useState(fsalary);
  const [preference, setPreference] = useState(fpreference);
  const [description, setDescription] = useState(fdescription);
  const [location, setLocation] = useState(flocation);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const updatedData = {
        title,
        salary,
        preference,
        description,
        location,
      };
      const response = await updateJob(jobId, updatedData);
      ToastAndroid?.showWithGravity(
        "Saved Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
      const updatedJob = response.data; // Assuming API response contains the updated job object

      const updatedJobs = jobs.map((job) =>
        job._id === jobId ? updatedJob : job
      );
      updateJobs(updatedJobs);
      setLoading(false);
      router.replace("/company/dashboard");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const deleteHandler = async () => {
    try {
      setLoading(true);
      await deleteJob(jobId);
      ToastAndroid?.showWithGravity(
        "Deleted Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );

      const updatedJobs = jobs.filter((job) => job._id !== jobId);
      updateJobs(updatedJobs);
      setLoading(false);
      router.replace("/company/dashboard");
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>Edit Job Details</Text>
        <View>
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            value={title}
            onChangeText={(val) => setTitle(val)}
            style={styles.textInput}
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
          <Text style={styles.label}>Description</Text>
          <TextInput
            value={description}
            onChangeText={(val) => setDescription(val)}
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
      </ScrollView>
      {!loading ? (
        <>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Update Job Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deleteBtn} onPress={deleteHandler}>
            <Text style={styles.btnText}>Delete Job</Text>
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator />
      )}
    </View>
  );
};

export default CompanyProfilePage;

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
  logoutBtn: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
  deleteBtn: {
    backgroundColor: "#111",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
});
