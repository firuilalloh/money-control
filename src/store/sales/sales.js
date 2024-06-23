import { defineStore } from "pinia";
import * as sv$sales from "../../service/sales/sales";

const st$sales = defineStore("salesStore", {
  state: () => ({
    dataSales: {
      status: null,
      data: [],
    },
  }),
  actions: {
    async a$getSales() {
      try {
        const { data, status } = await sv$sales.getSales();
        this.dataSales = {
          data,
          status,
        };
      } catch (error) {
        this.dataSales = {
          status: false,
          data: [],
        };
      }
    },
    async a$addSale(form) {
      try {
        await sv$sales.addSales(form);
        await this.a$getSales();
      } catch ({ error, message }) {
        throw error ?? message;
      }
    },
    async a$editSale(id, form) {
      try {
        await sv$sales.detailSale(id, form);
        await this.a$getSales();
      } catch ({ error, message }) {
        throw error ?? message;
      }
    },
    async a$detailSale(id) {
      try {
        const { data } = await sv$sales.detailSale(id);
        return data;
      } catch (error) {
        throw error ?? message;
      }
    },
    async a$deleteSale(id) {
      try {
        await sv$sales.deleteSale(id);
        await this.a$getSales();
      } catch ({ error, message }) {
        throw error ?? message;
      }
    },
  },
  getters: {
    g$dataSales: ({ dataSales }) => dataSales,
  },
});

export default st$sales;
