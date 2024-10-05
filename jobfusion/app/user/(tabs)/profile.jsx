import {
  ActivityIndicator,
  Image,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import { TouchableOpacity } from "react-native";
import { UserContext } from "../../../services/context/UserContext";
import { getUser, updateUser } from "../../../services/api";
import { AuthContext } from "../../../services/context/AuthContext";
import ProfileImagePicker from "../../../components/ProfileImagePicker";
import ResumeDocumentPicker from "../../../components/ResumeDocumentPicker";

const ProfilePage = () => {
  const {
    userInfo: {
      userName,
      _id: userId,
      profileImage: fprofileImage = "",
      fullName: ffullName = "",
      age: fage = "",
      course: fcourse = "",
      address: faddress = "",
      phoneNumber: fphoneNumber = "",
      skills: fskills = "",
      tenthMarks: ftenthMarks = "",
      twelfthMarks: ftwelfthMarks = "",
      college: fcollege = "",
      collegeMarks: fcollegeMarks = "",
      resume: fresume = "",
    },
  } = useContext(UserContext);

  const { logout } = useContext(AuthContext);

  const [fullName, setFullName] = useState(ffullName);
  const [age, setAge] = useState(fage);
  const [course, setCourse] = useState(fcourse);
  const [address, setAddress] = useState(faddress);
  const [phoneNumber, setPhoneNumber] = useState(fphoneNumber);
  const [skills, setSkills] = useState(fskills);
  const [tenthMarks, setTenthMarks] = useState(ftenthMarks);
  const [twelfthMarks, setTwelfthMarks] = useState(ftwelfthMarks);
  const [college, setCollege] = useState(fcollege);
  const [collegeMarks, setCollegeMarks] = useState(fcollegeMarks);
  const [resume, setResume] = useState(fresume);
  const [loading, setLoading] = useState(false);
  const [profileImage, setProfileImage] = useState(fprofileImage);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const payload = {
        fullName,
        userName,
        age,
        course,
        address,
        phoneNumber,
        skills,
        tenthMarks,
        twelfthMarks,
        college,
        collegeMarks,
        resume,
        profileImage,
      };

      const response = await updateUser(userId, payload);
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
        <Text style={styles.titleText}>Update Your Profile</Text>
        <View>
          <Text style={styles.label}>Profile Image</Text>
          <ProfileImagePicker image={profileImage} setImage={setProfileImage} />
        </View>
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
          <Text style={styles.label}>Course in College</Text>
          <TextInput
            value={course}
            onChangeText={(val) => setCourse(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Address</Text>
          <TextInput
            value={address}
            onChangeText={(val) => setAddress(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            value={phoneNumber}
            onChangeText={(val) => setPhoneNumber(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Skills</Text>
          <TextInput
            value={skills}
            onChangeText={(val) => setSkills(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>10th Grade Marks (%)</Text>
          <TextInput
            value={tenthMarks}
            onChangeText={(val) => setTenthMarks(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>12th Grade Marks (%)</Text>
          <TextInput
            value={twelfthMarks}
            onChangeText={(val) => setTwelfthMarks(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>College Name</Text>
          <TextInput
            value={college}
            onChangeText={(val) => setCollege(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>University Marks (%)</Text>
          <TextInput
            value={collegeMarks}
            onChangeText={(val) => setCollegeMarks(val)}
            style={styles.textInput}
          />
        </View>
        <View>
          <Text style={styles.label}>Resume</Text>
          <ResumeDocumentPicker pdfUrl={resume} setPdfUrl={setResume} />
        </View>
      </ScrollView>
      {!loading ? (
        <TouchableOpacity style={styles.btn} onPress={handleSubmit}>
          <Text style={styles.btnText}>Update Profile</Text>
        </TouchableOpacity>
      ) : (
        <ActivityIndicator style={{ marginTop: 10 }} />
      )}
      <TouchableOpacity style={styles.logoutBtn} onPress={handleLogout}>
        <Text style={styles.btnText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProfilePage;

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
  logoutBtn: {
    backgroundColor: "#000000",
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
