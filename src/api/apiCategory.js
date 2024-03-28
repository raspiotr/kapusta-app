import axios from "axios";

axios.defaults.baseURL = "https://kapusta-app-eafad5d610ef.herokuapp.com";

export const addCategory = async (info) => {
  const req = await axios.get("/api/categories", info);
  return req.data;
};
