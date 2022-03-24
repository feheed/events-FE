// export default function CreateEventModal({ navigation }) {

//           <View>
//             <Button style={styles.btn2} onPress={handleSubmit}>
//               Create Event
//             </Button>
//           </View>
//           <Button
//             style={styles.btn}
//             onPress={() => navigation.navigate("Home")}
//           >
//             Back To Event List
//           </Button>

//Icons
import React, { useState } from "react";
// react native import
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  SafeAreaView,
  ScrollView,
} from "react-native";

import DTP from "./DTP";
import TMP from "./TMP";
import { observer } from "mobx-react-lite";
import authStore from "../../Stores/authStore";

const { width: WIDTH } = Dimensions.get("window");
const CreateEventModal = () => {
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
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.backgroundContainer}>
          <View style={styles.logoContainer}>
            <TextInput
              placeholder="Name"
              style={styles.input}
              onChangeText={(value) => setEvent({ ...event, name: value })}
            />
          </View>
          <View style={styles.logoContainer}>
            <TextInput
              placeholder="Area"
              style={styles.input}
              onChangeText={(value) => setEvent({ ...event, area: value })}
            />
          </View>
          <View style={styles.logoContainer}>
            <TextInput
              placeholder="Image"
              style={styles.input}
              type="image"
              onChangeText={(value) => setEvent({ ...event, image: value })}
            />
            <TextInput
              style={styles.input}
              placeholder="Mobile"
              type="tel"
              keyboardType="numeric"
              onChangeText={(value) => setEvent({ ...event, mobile: value })}
            />
          </View>

          <View style={styles.logoContainerA}>
            <TextInput
              placeholder="Participiants"
              keyboardType="numeric"
              style={styles.inputA}
              onChangeText={(value) =>
                setEvent({ ...event, participants: value })
              }
            />

            <TextInput
              style={styles.inputA}
              placeholder="Age"
              keyboardType="numeric"
              onChangeText={(value) => setEvent({ ...event, age: value })}
            />
          </View>
          <View style={styles.logoContainerA}>
            <DTP />
            <TMP />
          </View>
          <TouchableOpacity onPress={handleSubmit} style={styles.logoContainer}>
            <Image
              source={{
                uri: "https://i.pinimg.com/originals/88/9b/29/889b2905b14d3dae6457b4305112808e.gif",
              }}
              style={styles.logo}
            />

            <Image
              source={{
                uri: "https://freesvg.org/img/1537793781.png",
              }}
              style={styles.logoCircle}
            />
            <Image
              source={{
                uri: "https://freesvg.org/img/primary-tab-new.png",
              }}
              style={styles.logoPlus}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default observer(CreateEventModal);
const styles = StyleSheet.create({
  backgroundContainer: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  logoContainerA: {
    display: "flex",
    flexDirection: "row",
    width: "90%",

    justifyContent: "space-evenly",
  },
  logo: {
    width: 90,
    height: 90,
    bottom: 30,
    borderRadius: 500,
  },
  logoPlus: {
    width: 18,
    height: 18,
    bottom: 88,
    left: 30,
  },
  logoCircle: {
    width: 30,
    height: 30,
    bottom: 63,
    left: 30,
    borderRadius: 500,
  },
  logoText: {
    color: "black",
    fontWeight: "700",
    fontSize: 40,

    opacity: 0.5,
  },
  input: {
    marginTop: 15,
    width: WIDTH - 40,
    height: 60,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 5,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },
  inputA: {
    marginTop: 15,
    width: WIDTH - 230,
    height: 60,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 5,
    backgroundColor: "white",
    color: "black",
    marginHorizontal: 25,
    shadowColor: "#000000",
    shadowOpacity: 0.5,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
  },

  inputIcon: {
    position: "absolute",
    top: 16,
    left: 37,
  },
  btnEye: {
    position: "absolute",
    bottom: 18,
    right: 37,
  },
  btnLogin: {
    width: WIDTH - 40,
    height: 40,
    borderRadius: 45,
    fontSize: 16,
    backgroundColor: "#016afb",
    justifyContent: "center",
    marginTop: 20,
    top: 50,
    opacity: 0.8,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  orText: {
    top: 50,
  },
});
