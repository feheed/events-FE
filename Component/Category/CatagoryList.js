import { StyleSheet, Text, View } from "react-native";
import React from "react";
import catagoryStore from "../../Stores/CatagoryStore";

const catagoryList = () => {
  const b = catagoryStore.catagories.event1;
  console.log(catagoryStore.catagories);
  return (
    <View>
      <Text>{b}</Text>
    </View>
  );
};

export default catagoryList;

const styles = StyleSheet.create({});
