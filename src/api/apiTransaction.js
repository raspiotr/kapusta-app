import axios from "axios";

axios.defaults.baseURL = "https://kapusta-backend-827563b0830f.herokuapp.com/";

export const getAllReportsAPI = async ({ type, year, month }) => {
  const req = await axios.get(`/api/reports/${type}/${year}/${month}`);
  return req.data;
};

export const getAmountAPI = async ({ type, year, month }) => {
  const req = await axios.get(`/api/reports/${type}/${year}/${month}`);
  return req.data;
};

export const getSummaryAPI = async ({ type }) => {
  const req = await axios.get(`/api/reports/${type}`);
  return req.data;
};
