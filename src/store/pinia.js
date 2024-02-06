import { defineStore } from "pinia";
import * as sv$getCategory from "../service/category.js";

const st$category = defineStore({
  id: "Category store",
  state: () => ({
    dataCategory: {
      status: null,
      data: [],
    },
  }),
  actions: {
    async a$getCategory() {
      try {
        const { data, status } = await sv$getCategory.getCategory();
        this.dataCategory = {
          data,
          status,
        };
      } catch (error) {
        this.dataCategory = {
          status: false,
          data: [],
        };
      }
    },
  },
  getters: {
    g$dataCategory: ({ dataCategory }) => dataCategory,
  },
});

export default st$category;
