//this screen will be for each user to show his booked events and created events by him
import { StyleSheet, View } from "react-native";
import React from "react";
import { Button } from "native-base";
import { useNavigation } from "@react-navigation/native";

const MyEvent = () => {
  let event = false;
  const HandleJoinedEvent = () => {
    !event ? 1 : false;
  };
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View>
        <Button size="sm" variant="ghost" colorScheme="secondary">
          My Events
        </Button>
      </View>
      <View>
        <Button size="sm" variant="ghost" colorScheme="secondary">
          Joined Events
        </Button>
      </View>
    </View>
  );
};

export default MyEvent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: "white",
    color: "red",
    fontSize: 25,
    height: 50,
  },
  myButtons: {},
});
