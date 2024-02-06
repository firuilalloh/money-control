import { baseApi } from "../../plugins/axios.js"

const api = 'api/users/transaction'

const getTransaction = () => baseApi.get(`${api}/gettransaction`)
const addTransaction = () => baseApi.post(`${api}/addtransaction`)

export {getTransaction, addTransaction}