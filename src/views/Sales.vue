<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-12 w-25">
            <button-component buttonStyle="info" title="Add transaction" @click="onButtonClick(item)" />
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
import st$category from "../store/pinia.js";

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
      { name: "total", label: "Total" },
      { name: "customer", label: "Customer" },
      { name: "address", label: "Address" },
      { name: "paymentMethod", label: "Payment Method" },
      { name: "statusPay", label: "Status Payment" },
      { name: "date", label: "Date" },
    ],
    dt: {
      columns: [
        { name: "product", th: "product" },
        { name: "total", th: "total" },
        { name: "customer", th: "customer name" },
        { name: "address", th: "address" },
        { name: "pay_method", th: "peyment method" },
        { name: "status_pay", th: "status payment" },
        { name: "date_sale", th: "date" },
      ],
      index: false,
    },
  }),
  computed: {
    ...mapState(st$category, ["g$dataCategory"]),
  },
  async mounted() {
    // await this.init();
    try {
      const dummyData = [
        {
          product: "T-Shirt",
          total: 19.99,
          customer: "John Doe",
          address: "123 Main St, Anytown, CA 12345",
          pay_method: "Credit Card",
          status_pay: "Paid",
          date_sale: "2024-06-08",
        },
        {
          product: "Laptop",
          total: 799.99,
          customer: "Jane Smith",
          address: "456 Elm St, Springfield, NY 54321",
          pay_method: "Debit Card",
          status_pay: "Pending",
          date_sale: "2024-06-07",
        },
        {
          product: "Coffee Mug",
          total: 7.99,
          customer: "Michael Brown",
          address: "789 Oak Ave, Centerville, TX 78901",
          pay_method: "Cash",
          status_pay: "Completed",
          date_sale: "2024-06-06",
        },
        // Add more data objects as needed...
      ];
      this.fillTheItems(dummyData);
    } catch (error) {
      console.error(error);
    }
  },
  methods: {
    ...mapActions(st$category, ["a$getCategory"]),
    async init() {
      try {
        this.dataCategory = await this.a$getCategory();
      } catch (error) {
        console.error(error);
      }
    },
    fillTheItems(dummyData) {
      // const transaction = this.g$dataTransaction;

      this.items = dummyData.map((dummyData) => {
        return {
          product: dummyData.product,
          total: dummyData.total,
          customer: dummyData.customer,
          address: dummyData.address,
          paymentMethod: dummyData.pay_method,
          statusPay: dummyData.status_pay,
          date: dummyData.date_sale,
        };
      });
    },
  },
};
</script>
