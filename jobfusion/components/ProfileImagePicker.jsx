import { useState } from "react";
import { Button, Image, View, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import axios from "axios";

const ProfileImagePicker = ({ image, setImage }) => {
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      let uri = result.assets[0].uri;
      let type = result.assets[0].mimeType;
      let name = result.assets[0].fileName;
      let source = { uri, type, name };

      setImage(result.assets[0].uri);
      const formData = new FormData();

      formData.append("file", source);
      formData.append("upload_preset", "jobfusion");
      formData.append("cloud_name", "vimalds");

      console.log("formData", formData);

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
        console.log("Uploaded image: ", response.data.secure_url);
      } catch (error) {
        console.log("Error uploading image: ", error);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Choose Image" onPress={pickImage} />
      {image ? <Image source={{ uri: image }} style={styles.image} /> : <></>}
    </View>
  );
};

export default ProfileImagePicker;

const styles = StyleSheet.create({
  container: {
    alignItems: "flex-start",
    height: 230,
    marginTop: 10,
  },
  image: {
    width: "100%",
    height: 150,
    objectFit: "contain",
    marginTop: 15,
    borderWidth: 2,
    borderColor: "#c1c1c1",
  },
});
