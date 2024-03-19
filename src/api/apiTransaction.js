import axios from "axios";

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

export const getIncomeCategoriesAPI = async () => {
  const { data } = await axios.get("/api/transaction/income-categories");
  return data;
};

export const getExpenseCategoriesAPI = async () => {
  const { data } = await axios.get("/api/transaction/expense-categories");
  return data;
};

export const getPeriodDataAPI = async (date) => {
  const { data } = await axios.get(`/api/transaction/period-data?date=${date}`);
  return data;
};

export const updateBalanceAPI = async (value) => {
  const { data } = await axios.patch("/api/user/balance", value);
  return data;
};

export const getTransactions = async ({ type, token }) => {
  const req = await axios.get(`/api/transactions/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};
