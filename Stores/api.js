// import axios from "axios"; //#localhost

// // Sara's ip's
// //export const baseURL = "http://192.168.8.188:8001"; //workplace//
// //export const baseURL = "http://localhost:8001";
// // export const baseURL = "http://localhost:8001";
// //export const baseURL = "http://192.168.8.188"; //workplace//
// //export const baseURL = "http://localhost:8001";

// //fahad's ip's
// //export const baseURL = "http://192.168.150.70:8001"; //workplace wifi
// //export const baseURL = "http://localhost:8001"; //#localhost
// //export const baseURL = "http://192.168.8.180:8001"; //myStc wifi
// export const baseURL = "http://192.168.8.180:8001"; //myStc wifi

// fatma's ip's
// export const baseURL = "http://192.168.1.43:8000"; //workplace wifi
// export const baseURL = "http://192.168.1.43:8000"; //workplace wifi

// const api = axios.create({
//   baseURL: `${baseURL}/api`,
// });
// export default api;

import axios from "axios";
export const baseURL = "http://192.168.1.43:8000";
const api = axios.create({ baseURL: "http://192.168.1.43:8000/api" });

export default api;
