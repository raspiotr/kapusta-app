import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMTIxMTUwNSwiZXhwIjoxNzExODE2MzA1fQ.L0zPdzEVZO5dowzEX8OzZs0_TayKxytmv61X1Y5mfng";

axios.defaults.baseURL = "https://kapusta-backend-827563b0830f.herokuapp.com/";

// bartek
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
// do bartek

export const getTransactionsAPI = async ({ type }) => {
  const req = await axios.get(`/api/transactions/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const addTransactionAPI = async ({ type, body, token }) => {
  const req = await axios.post(`/api/transactions/${type}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const deleteTransactionAPI = async (id) => {
  const req = await axios.delete(`/api/transactions/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const getExpenseCategoriesAPI = async ({ transactionType, token }) => {
  const req = await axios.get(`/api/reports/${transactionType}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const getIncomeCategoriesAPI = async () => {
  const { data } = await axios.get("/api/reports/income");
  return data;
};

export const getPeriodDataAPI = async ({
  transactionType,
  year,
  month,
  day,
  // token,
}) => {
  const req = await axios.get(
    `/api/reports/${transactionType}/${year}/${month}/${day}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return req.data;
};

export const updateBalanceAPI = async (value) => {
  const { data } = await axios.patch("/api/user/balance", value);
  return data;
};
export const getBalanceAPI = async () => {
  const { data } = await axios.get("/api/user/balance");
  return data;
};
