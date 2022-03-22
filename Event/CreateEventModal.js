import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import {
  Box,
  Heading,
  Center,
  FormControl,
  VStack,
  Button,
  Input,
} from "native-base";
import DTP from "./DTP";
import TMP from "./TMP";

export default function CreateEventaModal({ navigation }) {
  const [event, setEvent] = useState({
    name: "",
    area: "",
    date: "",
    time: "",
    participants: "",
    age: "",
  });

  const handleSubmit = async (e) => {
    await eventStore.createEvents(event, navigation);
    setEvent({
      name: "",
      area: "",
      date: "",
      time: "",
      participants: "",
      age: "",
    });
  };

  return (
    <Center style={styles.bg}>
      <Box safeArea p="1" w="100%" maxW="300" py="8">
        <Heading
          size="lg"
          color="coolGray.800"
          _dark={{
            color: "warmGray.50",
          }}
          fontWeight="semibold"
        ></Heading>
        <Heading
          mt="1"
          color="coolGray.600"
          _dark={{
            color: "warmGray.200",
          }}
          fontWeight="medium"
          size="xs"
        ></Heading>
        <VStack space={3} mt="5">
          <FormControl>
            <Input
              borderWidth={3}
              height={50}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Name"
              style={styles.input}
              onChangeText={(value) => setEvent({ ...event, name: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              borderWidth={3}
              height={50}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Area"
              style={styles.input}
              onChangeText={(value) => setEvent({ ...event, area: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              borderWidth={3}
              height={50}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Image"
              style={styles.input}
              type="image"
              onChangeText={(value) => setEvent({ ...event, image: value })}
            />
          </FormControl>

          <FormControl>
            <Input
              borderWidth={3}
              height={50}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Time"
              style={styles.input}
              onChangeText={(value) => setEvent({ ...event, time: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              borderWidth={3}
              height={50}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Participiants"
              keyboardType="numeric"
              style={styles.input}
              onChangeText={(value) =>
                setEvent({ ...event, participants: value })
              }
            />
          </FormControl>

          <FormControl>
            <Input
              style={styles.input}
              borderWidth={3}
              height={50}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Age"
              keyboardType="numeric"
              onChangeText={(value) => setEvent({ ...event, age: value })}
            />
          </FormControl>
          <FormControl>
            <Input
              borderWidth={3}
              borderColor="#35589A"
              backgroundColor="#ffff"
              placeholder="Mobile"
              type="tel"
              height={50}
              keyboardType="numeric"
              onChangeText={(value) => setEvent({ ...event, mobile: value })}
            />
          </FormControl>
          <DTP />
          <TMP />
          <View>
            <Button style={styles.btn2} onPress={handleSubmit}>
              Create Event
            </Button>
          </View>
          <Button
            style={styles.btn}
            onPress={() => navigation.navigate("Home")}
          >
            Back To Event List
          </Button>
        </VStack>
      </Box>
    </Center>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#2855a980",
  },
  btn2: {
    backgroundColor: "#35589A",
  },
  bg: {
    backgroundColor: "#35589A20",
    width: "100%",
    height: "100%",
    flex: 1,
  },
  input: {
    borderColor: "#FC9918",
  },
});
