import axios from "axios";

const instance = axios.create({
  baseURL: "https://mechabook.herokuapp.com",
});

// http://localhost:9000
// https://mechabook.herokuapp.com

export default instance;
