import axios from "axios";

export const addCategory = async (info) => {
  const req = await axios.get("https://kapusta-backend-827563b0830f.herokuapp.com/api/categories", info);
  return req.data;
};
