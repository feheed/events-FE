import { ImageBackground, StyleSheet, Text, View } from "react-native";
import React from "react";
import Loading from "../Loading";
import eventStore from "../../Stores/eventStore";
import IconBack from "react-native-vector-icons/AntDesign";
import IconDelete from "react-native-vector-icons/AntDesign";
import { HStack } from "native-base";
import authStore from "../../Stores/authStore";
import { observer } from "mobx-react";

const EventDetail = () => {
  if (eventStore.loading) return <Loading />;
  const event = route.params.event;

  return (
    <View>
      <ImageBackground
        style={styles.background}
        imageStyle={{ resizeMode: "cover" }}
        source={{
          uri: event.image
            ? event.image
            : "http://www.aal-europe.eu/wp-content/uploads/2013/04/events_medium.jpg",
        }}
      >
        <HStack style={styles.Headering}>
          <IconBack
            name="arrowleft"
            size={25}
            onPress={() => navigation.goBack()}
          />
        </HStack>
        <HStack>
          <Text style={styles.owner}>
            Made By: {event.firstname} {event.lastname}
          </Text>
        </HStack>
        {authStore.user._id === event.owner._id && (
          <View style={styles.buttonDisplay}>
            <IconDelete
              name="delete"
              style={styles.delete}
              size={25}
              onPress={() =>
                eventStore.cancelEvent(event._id, navigation, toast)
              }
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default observer(EventDetail);

const styles = StyleSheet.create({
  Headering: {
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
    marginTop: 60,
    padding: 10,
  },
  owner: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  delete: { color: "white" },
  background: {
    width: "100%",
    height: "80%",
  },
  buttonDisplay: {
    marginRight: 5,
    flexDirection: "row",
    marginTop: 5,
  },
});
