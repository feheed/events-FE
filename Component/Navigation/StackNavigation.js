import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Auth";
import SignUp from "../Auth/SignUp";
import MyEvent from "../Event/MyEvent";
import CreateEventModal from "../Event/CreateEventModal";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="create">
      <Screen name="signup" component={SignUp} />
      <Screen name="signin" component={SignIn} />
      <Screen name="myevent" component={MyEvent} />
      <Screen name="create" component={CreateEventModal} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
