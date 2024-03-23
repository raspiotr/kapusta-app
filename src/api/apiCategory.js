import axios from "axios";

axios.defaults.baseURL = "https://kapusta-backend-827563b0830f.herokuapp.com/";

export const addCategory = async (info) => {
  const req = await axios.get("/api/categories", info);
  return req.data;
};
