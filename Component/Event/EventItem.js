import React from "react";
import { Box, Divider, Image, VStack } from "native-base";
import { TouchableOpacity } from "react-native-gesture-handler";
import { observer } from "mobx-react";
import { StyleSheet } from "react-native";

const EventItem = ({ event, navigation }) => {
  return (
    <Box border="1" borderRadius="md">
      <VStack space="4" divider={<Divider />}>
        <TouchableOpacity
          onPress={() => navigation.navigate("EventDetail", { event: event })}
        >
          <Box px="5" pt="4" space={4}>
            <Image
              source={{
                uri: event.image
                  ? event.image
                  : "http://www.aal-europe.eu/wp-content/uploads/2013/04/events_medium.jpg",
              }}
              alt={event.name}
              style={styles.eventImage}
            />
            <Text
              style={styles.title}
              onPress={() =>
                navigation.navigate("EventDetail", { event: event })
              }
            >
              {event.name}
            </Text>
          </Box>
        </TouchableOpacity>
      </VStack>
    </Box>
  );
};

export default observer(EventItem);

const styles = StyleSheet.create({
  title: {
    textAlign: "left",
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    textTransform: "capitalize",
  },
  eventImage: {
    height: 200,
    width: "100%",
    alignSelf: "center",
    marginTop: 10,
    borderRadius: 12,
  },
});
