import { StyleSheet } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SignIn from "../Auth";
import SignUp from "../Auth/SignUp";
import MyEvent from "../Event/MyEvent";

const StackNavigation = () => {
  const { Navigator, Screen } = createStackNavigator();
  return (
    <Navigator initialRouteName="signin">
      <Screen name="signup" component={SignUp} />
      <Screen name="signin" component={SignIn} />
      <Screen name="myevent" component={MyEvent} />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
