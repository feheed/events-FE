//Icons
import React, { useState } from "react";
import Icon from "react-native-vector-icons/Ionicons";
import IconLock from "react-native-vector-icons/Feather";

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
import { useNavigation } from "@react-navigation/native";
const { width: WIDTH } = Dimensions.get("window");
const SignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handlesubmit = () => {
    console.log(user);
    authStore.signIn(user);
    // \\call sign in functioon from auth store
  };
  let eyeCon = true;
  const handleEye = () => {
    eyeCon = eyeCon ? false : true;
  };
  const navigation = useNavigation();
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
        {/* <Icon
          style={styles.inputIcon}
          name={"ios-person-outline"}
          size={28}
          color={"black"}
        /> */}
        <TextInput
          style={styles.input}
          placeholder={"Email"}
          onChangeText={(value) => setUser({ ...user, username: value })}
          underlineColorAndroid={"transparent"}
        />
      </View>
      <View style={styles.logoContainer}>
        {/* <TouchableOpacity>
          <IconLock
            onPress={handlesubmit}
            style={styles.inputIcon}
            name={"lock"}
            size={28}
            color={"black"}
          />
        </TouchableOpacity> */}

        <TextInput
          style={styles.input}
          placeholder={"Password"}
          onChangeText={(value) => setUser({ ...user, password: value })}
          secureTextEntry={eyeCon}
          underlineColorAndroid={"transparent"}
        />

        <TouchableOpacity style={styles.btnEye} onPress={handleEye}>
          <Icon name={"ios-eye-outline"} size={26} color={"black"} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={handlesubmit} style={styles.btnLogin}>
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>
      <TouchableOpacity onPress={() => navigation.navigate("signup")}>
        <Text style={styles.changeAuth}>SignUp</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default observer(SignIn);

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
    bottom: 100,
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
    opacity: 0.8,
    bottom: 50,
  },
  text: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  orText: { fontSize: 20, fontWeight: "300" },
  changeAuth: {
    fontSize: 20,
    fontWeight: "300",
    top: 25,
    color: "blue",
  },
});
