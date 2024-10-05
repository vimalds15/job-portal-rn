import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { JobContext } from "../../../../services/context/JobContext";
import { deleteJob, getAllJobs } from "../../../../services/api";

const Job = ({ job, jobs, updateJobs }) => {
  const [loading, setLoading] = useState(false);

  const deleteHandler = async (jobId) => {
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
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };
  return (
    <View key={job._id} style={styles.recentCard}>
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{job.title}</Text>

        <Text style={styles.subText1}>
          {job.companyName} - {job.location}
        </Text>
        <Text style={styles.subText1}>Full-time | {job.salary}</Text>

        <View style={styles.ctaContainer}>
          {!loading ? (
            <Pressable
              style={styles.editBtn}
              onPress={() => deleteHandler(job._id)}
            >
              <Text>Delete</Text>
            </Pressable>
          ) : (
            <ActivityIndicator style={{ marginTop: 15 }} />
          )}
        </View>
      </View>
    </View>
  );
};

const JobPage = () => {
  const { jobs, updateJobs } = useContext(JobContext);

  const fetchJobData = async () => {
    const response = await getAllJobs();
    updateJobs(response.data);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff", padding: 20 }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.recentTitle}>Recent Jobs</Text>
        {jobs?.map((job) => (
          <Job job={job} jobs={jobs} updateJobs={updateJobs} />
        ))}
      </ScrollView>
    </View>
  );
};

export default JobPage;

const styles = StyleSheet.create({
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
});
