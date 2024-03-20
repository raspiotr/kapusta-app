import axios from 'axios';

export const addIncomeAPI = async info => {
  const { data } = await axios.post('/api/transaction/income', info);
  return data;
};

export const getIncomeAPI = async () => {
  const { data } = await axios.get('/api/transaction/income');
  return data;
};

export const addExpenseAPI = async info => {
  const { data } = await axios.post('/api/transaction/expense', info);

  return data;
};

export const getExpenseAPI = async () => {
  const { data } = await axios.get('/api/transaction/expense');
  return data;
};

export const deleteTransactionAPI = async id => {
  const { data } = await axios.delete(`/api/transaction/${id}`);
  return data;
};

export const getIncomeCategoriesAPI = async () => {
  const { data } = await axios.get('/api/reports/income');
  return data;
};

export const getExpenseCategoriesAPI = async () => {
  const { data } = await axios.get('/api/reports/expense');
  return data;
};
export const getPeriodDataAPI = async ({ transactionType, year, month, token }) => {
  const req = await axios.get(`/api/reports/${transactionType}/${year}/${month}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const updateBalanceAPI = async value => {
  const { data } = await axios.patch('/api/user/balance', value);
  return data;
};