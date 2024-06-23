<script>
import Card from "@/examples/Cards/Card.vue";
import CategoriesCard from "./components/CategoriesCard.vue";
import AuthorsTable from "./components/AuthorsTable.vue";
import { mapState, mapActions } from "pinia";
import st$sales from "../store/sales/sales.js";
import { object as y$object, number as y$number } from "yup";

export default {
  name: "dashboard-default",
  components: {
    Card,
    CategoriesCard,
    AuthorsTable,
  },
  setup() {
    const schema = y$object({
      product: y$number().label("Product"),
      totalProduct: y$number().label("Total Product"),
      total: y$number().label("Total"),
      customer: y$number().label("Customer"),
      paymentMethod: y$number().label("Payment Method"),
      statusPay: y$number().label("Status Payment"),
    });
    return {
      schema,
    };
  },
  data: () => ({
    pagesTitle: "Sales",
    input: {
      id: "",
      product: "",
      totalProduct: "",
      total: "",
      customer: "",
      paymentMethod: "",
      statusPay: "",
      date: "",
    },
    // items: [
    //   {
    //     product: "",
    //     totalProduct: "",
    //     total: "",
    //     customer: "",
    //     address: "",
    //     paymentMethod: "",
    //     statusPay: "",
    //     date: "",
    //   },
    // ],
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
    modal: {
      add: false,
      edit: false,
      delete: false,
    },
    optionsPayment: [
      { text: "Transfer", value: 1 },
      { text: "Cash", value: 2 },
    ],
    optionStatusPay: [
      { text: "Done", value: 1 },
      { text: "Pending", value: 2 },
      { text: "Not Paid", value: 3 },
    ],
    optionsProduct: [
      { text: "Roti", value: 1 },
      { text: "Ikan", value: 2 },
    ],
    optionsCust: [{ text: "Yanto", value: 1 }],
  }),
  computed: {
    ...mapState(st$sales, ["g$dataSales"]),
  },
  async mounted() {
    await this.sales();
  },
  methods: {
    ...mapActions(st$sales, [
      "a$getSales",
      "a$detailSale",
      "a$addSale",
      "a$deleteSale",
      "a$editSale",
    ]),
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

      this.input = sales.data.map((sales) => {
        return {
          id: sales.id,
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
    async onSubmit(values) {
      try {
        await this.a$addSale(values);
        console.log(values);
        this.modal.add = false;
      } catch (error) {
        console.error(error);
      }
    },
    async onDelete(items) {
      try {
        const isConfirmed = confirm(
          "Are you sure you want to delete this item?"
        );

        if (isConfirmed) {
          this.input.id = items.id;
          const { id } = this.input;
          console.log(id);
          await this.a$deleteSale(id);
          location.reload();
        }
      } catch (error) {
        console.error(error);
      }
    },
    async onUpdate() {
      try {
        this.input = items;
        const updatedValues = { ...this.input }; // Ambil nilai input saat ini
        await this.a$editSale(updatedValues); // Panggil action untuk update data
        this.modal.edit = false; // Tutup modal setelah update berhasil
        location.reload(); // Opsional: Reload halaman setelah update berhasil
      } catch (error) {
        console.error(error);
      }
    },
    // openEditModal(items) {
    //   this.input.id = items.id;
    //   this.input.product = items.product;
    //   this.input.totalProduct = items.totalProduct;
    //   this.input.customer = items.customer;
    //   this.input.paymentMethod = items.paymentMethod;
    //   this.input.statusPay = items.statusPay;
    //   this.input.total = items.total;
    //   this.modal.edit = true; // Menampilkan modal edit
    // },
  },
};
</script>

<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-12 w-25">
            <button-component type="primary" @click="modal.add = true"
              >Add {{ pagesTitle }}</button-component
            >
          </div>
        </div>
        <data-table-filter
          :items="input"
          :columns="columns"
          title="Sales Report"
          @update-item="openEditModal"
          @delete-item="onDelete"
        />
      </div>
      <modal-component
        v-model:show="modal.add"
        modal-classes="modal-lg"
        class="modal-container"
      >
        <template #header>
          <h3 class="modal-title">
            {{ `Add New ${pagesTitle}` }}
          </h3>
        </template>
        <template #body>
          <form-comp :validation-schema="schema" @submit="onSubmit">
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.product"
                  name="product_id"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Product"
                    label="Product"
                    required
                  >
                    <drop-down :options="optionsProduct" />
                  </base-input>
                </field-form>
              </div>
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.totalProduct"
                  name="total_product"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Total Product"
                    label="Total Product"
                    required
                  >
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.customer"
                  name="customer_id"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Customer"
                    label="Customer"
                    required
                  >
                    <drop-down :options="optionsCust" />
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.paymentMethod"
                  name="payment_method"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Payment method"
                    label="Payment Method"
                    required
                  >
                    <drop-down :options="optionsPayment" />
                  </base-input>
                </field-form>
              </div>
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.statusPay"
                  name="status_payment"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Status Payment"
                    label="Status Payment"
                    required
                  >
                    <drop-down :options="optionStatusPay" />
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.total"
                  name="total"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Total"
                    label="Total"
                    required
                  >
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="d-flex justify-content-end border-top gap-2 pt-3">
              <button-component type="danger" @click="modal.add = false">
                Close
              </button-component>
              <button-component type="success" native-type="submit">
                Save Changes
              </button-component>
            </div>
          </form-comp>
        </template>
      </modal-component>

      <!-- modal edit -->

      <modal-component
        v-model:show="modal.edit"
        modal-classes="modal-lg"
        class="modal-container"
      >
        <template #header>
          <h3 class="modal-title">
            {{ `Edit ${pagesTitle}` }}
          </h3>
        </template>
        <template #body>
          <form-comp :validation-schema="schema" @submit="onUpdate">
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.product"
                  name="product_id"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Product"
                    label="Product"
                    required
                  >
                    <drop-down :options="optionsProduct" />
                  </base-input>
                </field-form>
              </div>
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.totalProduct"
                  name="total_product"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Total Product"
                    label="Total Product"
                    required
                  >
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.customer"
                  name="customer_id"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Customer"
                    label="Customer"
                    required
                  >
                    <drop-down :options="optionsCust" />
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.paymentMethod"
                  name="payment_method"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Payment method"
                    label="Payment Method"
                    required
                  >
                    <drop-down :options="optionsPayment" />
                  </base-input>
                </field-form>
              </div>
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.statusPay"
                  name="status_payment"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Status Payment"
                    label="Status Payment"
                    required
                  >
                    <drop-down :options="optionStatusPay" />
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="row">
              <div class="col-6">
                <field-form
                  v-slot="{ field }"
                  v-model="input.total"
                  name="total"
                >
                  <base-input
                    v-bind="field"
                    placeholder="Total"
                    label="Total"
                    required
                  >
                  </base-input>
                </field-form>
              </div>
            </div>
            <div class="d-flex justify-content-end border-top gap-2 pt-3">
              <button-component type="danger" @click="modal.edit = false">
                Close
              </button-component>
              <button-component type="success" native-type="submit">
                Save Changes
              </button-component>
            </div>
          </form-comp>
        </template>
      </modal-component>
    </div>
  </div>
</template>
