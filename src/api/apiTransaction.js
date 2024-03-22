import axios from "axios";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZmQ5OTlhODU0MGRlMjFkYTkxODk2MSIsImlhdCI6MTcxMTExODc3MiwiZXhwIjoxNzExNzIzNTcyfQ.Rk1yYyi-D4rwxwKlgvCYD0NYT7Vtcx75_OLbhEOpefY";

export const getTransactionsAPI = async ({ type }) => {
  const req = await axios.get(`/api/transactions/${type}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return req.data;
};

export const addTransactionAPI = async ({ type, body, token }) => {
  const req = await axios.post(`https://kapusta-backend-827563b0830f.herokuapp.com/api/transactions/${type}`, body, {
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
export const getBalanceAPI = async () => {
  const { data } = await axios.get("/api/user/balance");
  return data;
};