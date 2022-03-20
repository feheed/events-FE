import axios from "axios"; //#localhost

// Sara's ip's
//export const baseURL = "http://192.168.8.188:8001"; //workplace//

//fahad's ip's
//export const baseURL = "http://192.168.150.70:8001"; //workplace wifi
//export const baseURL = "http://localhost:8001"; //#localhost
export const baseURL = "http://192.168.8.180:8001"; //myStc wifi

//Fatma's ip's
// export const baseURL = "http://:8001"; //workplace wifi

//Ahmad's ip's
//export const baseURL = "http://:8001"; //workplace wifi

const api = axios.create({
  baseURL: `${baseURL}/api`,
});
export default api;
