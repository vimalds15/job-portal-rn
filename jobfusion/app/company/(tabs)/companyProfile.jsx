import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { CompanyContext } from "../../../services/context/CompanyContext";
import { updateCompany } from "../../../services/api";
import { AuthContext } from "../../../services/context/AuthContext";
import ProfileImagePicker from "../../../components/ProfileImagePicker";
import ResumeDocumentPicker from "../../../components/ResumeDocumentPicker";

const CompanyProfilePage = () => {
  const { companyInfo } = useContext(CompanyContext);
  const { logout } = useContext(AuthContext);

  const {
    companyLogo: fetchedCompanyLogo = "",
    companyName: fetchedCompanyName = "",
    landline: fetchedContactNumber = "",
    about: fetchedAbout = "",
    description: fetchedDescription = "",
    industryType: fetchedIndustry = "",
    website: fetchedWebsite = "",
    license: fetchedLicense = "",
    _id: companyId = "",
  } = companyInfo;

  const [companyName, setCompanyName] = useState(fetchedCompanyName);
  const [companyLogo, setCompanyLogo] = useState(fetchedCompanyLogo);
  const [contactNumber, setContactNumber] = useState(fetchedContactNumber);
  const [about, setAbout] = useState(fetchedAbout);
  const [description, setDescription] = useState(fetchedDescription);
  const [industry, setIndustry] = useState(fetchedIndustry);
  const [website, setWebsite] = useState(fetchedWebsite);
  const [license, setLicense] = useState(fetchedLicense);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const updatedData = {
        companyName,
        companyLogo,
        landline: contactNumber,
        industryType: industry,
        about,
        description,
        website,
        license,
      };

      await updateCompany(companyId, updatedData);
      ToastAndroid?.showWithGravity(
        "Profile updated Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.titleText}>Update Company Details</Text>
        <View>
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            value={companyName}
            onChangeText={(val) => setCompanyName(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Company Logo</Text>
          <ProfileImagePicker image={companyLogo} setImage={setCompanyLogo} />
        </View>
        <View>
          <Text style={styles.label}>Landline Number</Text>
          <TextInput
            value={contactNumber}
            onChangeText={(val) => setContactNumber(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>About the Company</Text>
          <TextInput
            value={about}
            onChangeText={(val) => setAbout(val)}
            multiline
            style={styles.textInputAbout}
          />
        </View>
        <View>
          <Text style={styles.label}>Industry Type</Text>
          <TextInput
            value={industry}
            onChangeText={(val) => setIndustry(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Company Description</Text>
          <TextInput
            value={description}
            onChangeText={(val) => setDescription(val)}
            style={styles.textInputAbout}
            multiline
          />
        </View>
        <View>
          <Text style={styles.label}>Website</Text>
          <TextInput
            value={website}
            onChangeText={(val) => setWebsite(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Company License</Text>
          <ResumeDocumentPicker pdfUrl={license} setPdfUrl={setLicense} />
        </View>
      </ScrollView>
      {!loading ? (
        <>
          <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
            <Text style={styles.btnText}>Update Company Details</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
        </>
      ) : (
        <ActivityIndicator style={{ marginTop: 20 }} />
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
  textInputAbout: {
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
  logoutBtn: {
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    marginTop: 20,
  },
});
