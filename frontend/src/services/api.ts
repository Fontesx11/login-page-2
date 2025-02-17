import axios from "axios";

const backendAPI = axios.create({
  baseURL: `https://login-page-2-mngg.onrender.com`,
});

// backendAPI.defaults.headers.authorization = `Bearer ${localStorage.getItem(
//   "token"
// )}`;

export default backendAPI;