import React, { useState } from "react";
import {
  Button,
  View,
  Text,
  Linking,
  StyleSheet,
  Pressable,
  ToastAndroid,
} from "react-native";
import * as DocumentPicker from "expo-document-picker";
import axios from "axios";

const ResumeDocumentPicker = ({
  pdfUrl,
  setPdfUrl = () => null,
  disableDownload = false,
  disableUpload = false,
}) => {
  const pickPDF = async () => {
    const result = await DocumentPicker.getDocumentAsync({
      type: "application/pdf",
    });

    if (!result.canceled) {
      console.log("Selected PDF URI:", result.assets[0].uri);
      let uri = result.assets[0].uri;
      let type = result.assets[0].mimeType;
      let name = result.assets[0].name;
      let source = { uri, type, name };
      console.log(source);
      await uploadPDF(source);
      ToastAndroid?.showWithGravity(
        "Uploaded Successfully",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
        0,
        100
      );
    } else {
      alert(result.output);
    }
  };

  const uploadPDF = async (source) => {
    const formData = new FormData();
    formData.append("file", source);
    formData.append("upload_preset", "jobfusion");
    formData.append("cloud_name", "vimalds");

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/vimalds/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("Uploaded PDF:", response.data.secure_url);
      setPdfUrl(response.data.secure_url);
    } catch (error) {
      console.error("Error uploading PDF:", error);
    }
  };

  const downloadPDF = () => {
    if (pdfUrl) {
      Linking.openURL(pdfUrl);
    } else {
      alert("No PDF to download!");
    }
  };

  return (
    <View style={styles.container}>
      {!disableUpload && (
        <Pressable
          style={{
            backgroundColor: "#3185f3",
            width: 100,
            paddingVertical: 10,
            marginTop: 10,
          }}
          onPress={pickPDF}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>
            Choose a file
          </Text>
        </Pressable>
      )}
      {pdfUrl && !disableDownload && (
        <Pressable
          style={{
            backgroundColor: "#3185f3",
            width: 100,
            paddingVertical: 10,
            marginTop: 10,
          }}
          onPress={downloadPDF}
        >
          <Text style={{ textAlign: "center", color: "#fff" }}>View PDF</Text>
        </Pressable>
      )}
    </View>
  );
};
export default ResumeDocumentPicker;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  downloadContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
