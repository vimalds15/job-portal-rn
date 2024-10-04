import {
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import {
  getUnverifiedCompanies,
  updateCompany,
} from "../../../services/api/companyService";
import ResumeDocumentPicker from "../../../components/ResumeDocumentPicker";

const DashboardPage = () => {
  const [companies, setCompanies] = useState([]);

  const fetchJobData = async () => {
    const response = await getUnverifiedCompanies();
    setCompanies(response.companies);
  };

  useEffect(() => {
    fetchJobData();
  }, []);

  const handleAccept = async (companyId) => {
    try {
      const payload = {
        isVerified: "Accepted",
      };
      const response = await updateCompany(companyId, payload);
      ToastAndroid.showWithGravity(
        "Accepted Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
      const updatedCompanies = companies.filter(
        (company) => company._id != companyId
      );
      setCompanies(updatedCompanies);
    } catch (error) {
      console.error(error);
    }
  };
  const handleReject = async (companyId) => {
    try {
      const payload = {
        isVerified: "Rejected",
      };
      const response = await updateCompany(companyId, payload);
      ToastAndroid.showWithGravity(
        "Rejected Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
      const updatedCompanies = companies.filter(
        (company) => company._id != companyId
      );
      setCompanies(updatedCompanies);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <View>
            <Text style={styles.recentTitle}>Company Requests</Text>
            {companies?.map((company) => (
              <View key={company._id} style={styles.recentCard}>
                <View>
                  <Text style={styles.mainText1}>
                    Company Name:{" "}
                    <Text style={styles.subText1}>{company.companyName}</Text>
                  </Text>
                  <Text style={styles.mainText1}>
                    Phone Number:{" "}
                    <Text style={styles.subText1}>{company.landline}</Text>
                  </Text>
                  <Text style={styles.mainText1}>License: </Text>
                  <ResumeDocumentPicker
                    pdfUrl={company.license}
                    disableUpload
                  />

                  <View style={styles.ctaContainer}>
                    <TouchableOpacity
                      style={styles.acceptBtn}
                      onPress={() => handleAccept(company._id)}
                    >
                      <Text style={{ color: "#fff" }}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.rejectBtn}
                      onPress={() => handleReject(company._id)}
                    >
                      <Text style={{ color: "#fff" }}>Reject</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))}
            {companies.length === 0 && (
              <Text>No companies in the request list</Text>
            )}
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
  acceptBtn: {
    backgroundColor: "#13a235",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  rejectBtn: {
    backgroundColor: "#ad2121",
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
