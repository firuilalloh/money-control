<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-12 w-25">
            <button-component
              buttonStyle="info"
              title="Add transaction"
              @click="onButtonClick(item)"
            />
          </div>
        </div>
        <!-- <EmptyResult :status="g$dataCategory.status">
          <DataTable :data="dummyData" v-bind="dt" />
        </EmptyResult> -->
        <data-table-filter
          :items="items"
          :columns="columns"
          title="Sales Report"
          @onButtonClick="handleButtonClick"
        />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import CategoriesCard from "./components/CategoriesCard.vue";
import AuthorsTable from "./components/AuthorsTable.vue";
import { mapState, mapActions } from "pinia";
import st$sales from "../store/sales/sales.js";

export default {
  name: "dashboard-default",
  components: {
    Card,
    CategoriesCard,
    AuthorsTable,
  },
  data: () => ({
    items: [
      {
        product: "",
        totalProduct: "",
        total: "",
        customer: "",
        address: "",
        paymentMethod: "",
        statusPay: "",
        date: "",
      },
    ],
    columns: [
      { name: "product", label: "Product" },
      { name: "totalProduct", label: "Total Product" },
      { name: "total", label: "Total" },
      { name: "customer", label: "Customer" },
      { name: "address", label: "Address" },
      { name: "paymentMethod", label: "Payment Method" },
      { name: "statusPay", label: "Status Payment" },
      { name: "date", label: "Date" },
    ],
  }),
  computed: {
    ...mapState(st$sales, ["g$dataSales"]),
  },
  async mounted() {
    await this.sales();
  },
  methods: {
    ...mapActions(st$sales, ["a$getSales"]),
    async sales() {
      try {
        await this.a$getSales();
        this.fillTheItems();
      } catch (error) {
        console.error(error);
      }
    },
    fillTheItems() {
      const sales = this.g$dataSales;

      this.items = sales.data.map((sales) => {
        return {
          product: sales.product_name,
          totalProduct: sales.total_product,
          total: sales.total,
          customer: sales.name,
          address: sales.address,
          paymentMethod: sales.pay_method,
          statusPay: sales.status_pay,
          date: sales.date_sale,
        };
      });
    },
  },
};
</script>
