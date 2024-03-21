import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1Zjg0MTYxZDhmNWU4OGJiNWYyZGVhNCIsImlhdCI6MTcxMDkzMjk2NCwiZXhwIjoxNzExNTM3NzY0fQ.Xf8oOxwtX-tiLZ2Pvv33qcXCkSAs-JJgEsM8Jyzxqqc";

export const getTransactionsAPI = async ({ type }) => {
  const req = await axios.get(`/api/transactions/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const addTransactionAPI = async ({ type, body }) => {
  const req = await axios.post(`/api/transactions/${type}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const getSummaryAPI = async ({ type }) => {
  const req = await axios.get(`/api/reports/${type}`, {
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

export const addIncomeAPI = async (info) => {
  const { data } = await axios.post("/api/transaction/income", info);
  return data;
};

export const getIncomeAPI = async () => {
  const { data } = await axios.get("/api/transaction/income");
  return data;
};

export const addExpenseAPI = async (info) => {
  const { data } = await axios.post("/api/transaction/expense", info);
  return data;
};

export const getExpenseAPI = async () => {
  const { data } = await axios.get("/api/transaction/expense");
  return data;
};

export const getExpenseCategoriesAPI = async ({ transactionType, token }) => {
  const req = await axios.get(`https://kapusta-backend-827563b0830f.herokuapp.com/api/reports/${transactionType}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const getIncomeCategoriesAPI = async () => {
  const { data } = await axios.get("https://kapusta-backend-827563b0830f.herokuapp.com/api/reports/income");
  return data;
};

export const getPeriodDataAPI = async ({
  transactionType,
  year,
  month,
  token,
}) => {
  const req = await axios.get(
    `https://kapusta-backend-827563b0830f.herokuapp.com/api/reports/${transactionType}/${year}/${month}`,
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
