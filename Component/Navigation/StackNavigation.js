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
      <Screen
        name="signup"
        component={SignUp}
        options={{
          title: "Evento",
          headerStyle: {
            backgroundColor: "#fcc603",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="signin"
        component={SignIn}
        options={{
          title: "Evento",
          headerStyle: {
            backgroundColor: "#fcc603",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="myevent"
        component={MyEvent}
        options={{
          title: "Evento",
          headerStyle: {
            backgroundColor: "#fcc603",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
      <Screen
        name="create"
        component={CreateEventModal}
        options={{
          title: "Evento",
          headerStyle: {
            backgroundColor: "#fcc603",
          },
          headerTintColor: "#000",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      />
    </Navigator>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
