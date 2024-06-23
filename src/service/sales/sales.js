import { baseApi } from "@/plugins/axios.js";

const api = "/sales";

const getSales = () => baseApi.get(`${api}/sale`);
const addSales = (body) => baseApi.post(`${api}/addsale`, body);
const detailSale = (id, params) => baseApi.get(`${api}/detailsale/${id}`, { params });
const editSale = (id, body) => baseApi.put(`${api}/editsale/${id}`, body);
const deleteSale = (id) => baseApi.delete(`${api}/delsale/${id}`);

export {
  getSales,
  addSales,
  detailSale,
  editSale,
  deleteSale,
};
