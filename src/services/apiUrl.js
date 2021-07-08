import axios from "axios";

export const api = axios.create({
  baseURL: "https://we-care-project.herokuapp.com/api",
});
