import axios from "axios";

export const getTransactions = async ({ type, token }) => {
  const req = await axios.get(`/api/transactions/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const addTransaction = async ({ type, token, body }) => {
  const req = await axios.post(`/api/transactions/${type}`, body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

// te ponizej narazie sa nieuzywane

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

export const deleteTransactionAPI = async (id) => {
  const { data } = await axios.delete(`/api/transaction/${id}`);
  return data;
};



export const getExpenseCategoriesAPI = async ({transactionType, token }) => {
  const req = await axios.get(`/api/reports/${transactionType}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const getPeriodDataAPI = async ({ transactionType, year, month, token }) => {
  const req = await axios.get(`/api/reports/${transactionType}/${year}/${month}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const updateBalanceAPI = async (value) => {
  const { data } = await axios.patch("/api/user/balance", value);
  return data;
};
