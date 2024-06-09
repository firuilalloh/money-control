import { baseApi } from "../plugins/axios";

const api = "api/category"

const getCategory = () => baseApi.get(`${api}/getcategory`)

export {getCategory}