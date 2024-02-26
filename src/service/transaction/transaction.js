import { baseApi } from "@/plugins/axios.js";

const api = "api/users/transaction";

const getTransaction = () => baseApi.get(`${api}/gettransaction`);
const addTransaction = (body) => baseApi.post(`${api}/addtransaction`, body);
const getBalance = () => baseApi.get(`${api}/gettotalbalance`);
const editTransaction = (id, body) => baseApi.put(`${api}/edittransaction/${id}`, body);

export { getTransaction, addTransaction, getBalance, editTransaction };
