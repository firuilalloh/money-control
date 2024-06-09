import { baseApi } from "@/plugins/axios.js";

const api = "/sales";

const getSales = () => baseApi.get(`${api}/sale`);
// const addTransaction = (body) => baseApi.post(`${api}/addtransaction`, body);
// const getBalance = () => baseApi.get(`${api}/gettotalbalance`);
// const editTransaction = (id, body) => baseApi.put(`${api}/edittransaction/${id}`, body);
// const deleteTransaction = (id) => baseApi.delete(`${api}/delTransaction/${id}`);

export {
  getSales,
  // addTransaction,
  // getBalance,
  // editTransaction,
  // deleteTransaction,
};
