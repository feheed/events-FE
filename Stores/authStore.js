import { makeAutoObservable } from "mobx";
import api from "./api";
import jwtDecode from "jwt-decode";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this, {});
  }
  //set a token to user
  setUser = async (token) => {
    await AsyncStorage.setItem("myToken", token);
    this.user = jwtDecode(token);
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  //a function that will allow user to sign up

  signUp = async (user) => {
    try {
      const response = await api.post("/signup", user);
      this.setUser(response.data.token);
      console.log(user);
    } catch (error) {
      //to show us a error if try didnt work
      console.log(error);
    }
  };

  signIn = async (user) => {
    try {
      const response = await api.post("/signin", user);
      console.log(response.data);
      this.setUser(response.data.token);
    } catch (error) {
      alert(error.message + "error in auth");
      console.log(error.message + "authStore");
    }
  };
  //a function that will allow user to log out from his user
  signout = async () => {
    this.user = null;
    delete api.defaults.headers.common.Authorization;
    await AsyncStorage.removeItem("myToken");
  };

  //a function that will check if the token still didnt expire or the user didnt log out, then user still signed in
  checkForToken = async () => {
    const token = await AsyncStorage.getItem("myToken");
    if (token) {
      const currentTime = Date.now();
      let user = jwtDecode(token);
      if (user.exp > currentTime) {
        this.setUser(token);
      } else {
        alert("You're session has expired'. Please sign in again!");
        this.signout();
      }
    }
  };
}
const authStore = new AuthStore();
authStore.checkForToken();

export default authStore;
