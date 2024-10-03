import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import DropDownPicker from "react-native-dropdown-picker";

const Dropdown = ({ value, setValue }) => {
  const [open, setOpen] = useState(false);
  const [items, setItems] = useState([
    { label: "Pending", value: "Pending" },
    { label: "Accepted", value: "Accepted" },
    { label: "Rejected", value: "Rejected" },
  ]);

  return (
    <View style={styles.container}>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={styles.dropdown}
        containerProps={{
          style: {
            height: open ? 170 : null,
          },
        }}
        dropDownContainerStyle={styles.dropdownContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    justifyContent: "center",
    backgroundColor: "#FFF",
    zIndex: 115,
  },
  label: {
    marginBottom: 10,
  },
  dropdown: {
    backgroundColor: "#fff",
    zIndex: 511,
    borderWidth: 2,
    borderColor: "#d6d5d5",
    minHeight: 40,
    borderRadius: 0,
  },
  dropdownContainer: {
    backgroundColor: "#fff",
    zIndex: 100,
  },
  openDropdown: {
    height: 220,
    backgroundColor: "#ff0000",
  },
});

export default Dropdown;
