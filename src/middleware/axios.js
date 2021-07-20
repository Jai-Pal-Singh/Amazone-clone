import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-2788a.cloudfunctions.net/api",
  // baseURL: "http://localhost:5001/clone-2788a/us-central1/api",
});

export default instance;
