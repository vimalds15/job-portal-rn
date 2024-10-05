import React from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
import PieChart from "react-native-pie-chart";

const AdminPieChart = ({ accepted = 10, rejected = 10, notApplied = 10 }) => {
  const widthAndHeight = 250;
  const series = [accepted, rejected, notApplied];
  const sliceColor = ["#319c16", "#b22816", "#545454"];

  return (
    <View style={{ marginTop: 10 }}>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "90%",
              gap: 10,
              flexWrap: "wrap",
              marginBottom: 20,
            }}
          >
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: sliceColor[0],
                  height: 7,
                  width: 30,
                }}
              />
              <Text>Accepted</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: sliceColor[1],
                  height: 7,
                  width: 30,
                }}
              />
              <Text>Rejected</Text>
            </View>
            <View
              style={{ flexDirection: "row", alignItems: "center", gap: 10 }}
            >
              <View
                style={{
                  backgroundColor: sliceColor[2],
                  height: 7,
                  width: 30,
                }}
              />
              <Text>Did Not Apply</Text>
            </View>
          </View>
          <PieChart
            widthAndHeight={widthAndHeight}
            series={series}
            sliceColor={sliceColor}
          />
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>Accepted Applications: {series[0]}</Text>
          <Text>Rejected Applications: {series[1]}</Text>
          <Text>Not Applied: {series[2]}</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AdminPieChart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    margin: 10,
  },
});
