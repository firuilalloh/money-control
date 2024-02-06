<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <button class="btn btn-info" @click="showModal">Add Something</button>
        <modal-component
          v-show="isModalVisible"
          :headerTitle="modalTitle"
          @close="closeModal"
        >
          <template v-slot:body>
            <form @submit.prevent="submitData">
              <input-comp
                label="Category Name"
                :type="'text'"
                v-bind="dataInput.category_id"
                :required="true"
              >
                <select class="form-select">
                  <option value="1">Salary</option>
                  <option value="2">Shop</option>
                  <option value="3">Transport</option>
                </select>
              </input-comp>
              <input-comp
                label="Transaction Type"
                :type="'text'"
                v-bind="dataInput.jenis_transaksi"
                :required="true"
              >
              <select class="form-select">
                  <option value="Pemasukan">Pemasukan</option>
                  <option value="Pengeluaran">Pengeluaran</option>
                </select>
              </input-comp>
              <input-comp
                label="Total"
                :type="'number'"
                v-bind="dataInput.jumlah"
                :required="true"
              />
              <input-comp
                label="Informations"
                :type="'text'"
                v-bind="dataInput.keterangan"
                :required="true"
              />
            </form>
          </template>
          <template v-slot:footer>
            <ButtonComponent :Text="titleButton" @click="submitData" />
          </template>
        </modal-component>
        <empty-result :status="g$dataTransaction.status">
          <data-table :data="g$dataTransaction.data" v-bind="dt" />
        </empty-result>
      </div>
    </div>
  </div>
</template>

<script>
import st$transaction from "../store/transaction/transaction.js";
import { mapActions, mapState } from "pinia";
import * as sv$transaction from "../service/transaction/transaction.js";
import ButtonComponent from "../components/ButtonComponent.vue";

export default {
  name: "tables",
  components: {
    ButtonComponent,
  },
  data: () => ({
    dt: {
      columns: [
        { name: "category_name", th: "Category Name" },
        { name: "jenis_transaksi", th: "Transaction Type" },
        { name: "jumlah", th: "Total" },
        { name: "keterangan", th: "Information" },
        { name: "tanggal", th: "Date" },
      ],
    },
    dataInput: {
      category_id: '',
      jenis_transaksi: '',
      jumlah: '',
      keterangan: '',
    },
    modalTitle: "Transaction",
    titleButton: "Save",
    isModalVisible: false,
  }),
  computed: {
    ...mapState(st$transaction, ["g$dataTransaction"]),
  },
  async mounted() {
    await this.transaction();
    console.log(this.transaction);
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    ...mapActions(st$transaction, ["a$getTransaction"]),
    async transaction() {
      try {
        this.dataTransaction = await this.a$getTransaction();
      } catch (error) {
        console.error(error);
      }
    },

    async submitData() {
      try {
        console.log(this.dataInput);
        const response = await sv$transaction.addTransaction();
        console.log("passing to BE", response);
        this.closeModal();
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>
