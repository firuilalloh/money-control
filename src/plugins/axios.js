import axios from "axios";

const baseURL = `${import.meta.env.VITE_BASEURL}/`;

const baseApi = axios.create({
  baseURL,
});

// baseApi.interceptors.request.use((request) => request.data.data)

baseApi.interceptors.response.use((response) => response.data);

export { baseApi };
