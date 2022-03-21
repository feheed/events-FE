import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { ScrollView } from "native-base";
import { observer } from "mobx-react";
//call stores and other files:
import eventStore from "../../Stores/eventStore";
import Loading from "../Loading";
import EventItem from "./EventItem";

const EventList = () => {
  if (eventStore.loading) return <Loading />;
  const events = eventStore.events.map((event) => (
    <EventItem key={event.id} event={event} navigatoin={navigation} />
  ));
  return <ScrollView style={styles.eventlist}>{events}</ScrollView>;
};

export default observer(EventList);

const styles = StyleSheet.create({
  eventlist: {},
});
