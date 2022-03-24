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
} from "react-native";

import { observer } from "mobx-react-lite";
import authStore from "../../Stores/authStore";

const { width: WIDTH } = Dimensions.get("window");
const signUp = () => {
  const [user, setUser] = useState({
    password: "",
    firstname: "",
    lastname: "",
    username: "",
  });

  const handlesubmit = () => {
    authStore.signUp(user);
    // \\call sign in functioon from auth store
  };

  return (
    <ImageBackground
      source={{
        uri: "https://wallpaperaccess.com/full/1216247.jpg",
      }}
      style={styles.backgroundContainer}
    >
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://i.pinimg.com/originals/88/9b/29/889b2905b14d3dae6457b4305112808e.gif",
          }}
          style={styles.logo}
        />
      </View>

      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"firstname"}
          onChangeText={(value) => setUser({ ...user, firstname: value })}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"last name"}
          onChangeText={(value) => setUser({ ...user, lastname: value })}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        <TextInput
          style={styles.input}
          placeholder={"email"}
          onChangeText={(value) => setUser({ ...user, username: value })}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View>
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          onChangeText={(value) => setUser({ ...user, password: value })}
          underlineColorAndroid={"transparent"}
        />
      </View>

      <TouchableOpacity onPress={handlesubmit} style={styles.btnLogin}>
        <Text style={styles.text}>Register</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default observer(signUp);
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
  logo: {
    width: 150,
    height: 150,
    bottom: 30,
    borderRadius: 250,
  },
  logoText: {
    color: "black",
    fontWeight: "700",
    fontSize: 40,

    opacity: 0.5,
  },
  input: {
    width: WIDTH - 40,
    height: 60,
    borderRadius: 45,
    borderColor: "white",
    borderWidth: 1,
    fontSize: 20,
    fontWeight: "500",
    paddingLeft: 45,
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
