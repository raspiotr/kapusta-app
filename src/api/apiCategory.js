import axios from "axios";

export const addCategory = async (info) => {
  const req = await axios.get("/api/categories", info);
  return req.data;
};
