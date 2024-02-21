<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <button-component
          buttonStyle="info"
          @click="showModal"
          buttonText="Add Something"
        />
        <modal-component
          :modalTitle="modalTitle"
          :is-active="isModalVisible"
          @close="closeModal"
          @save="submitData"
         
        >
        <!-- <form-comp @submit="submitData" >
          <field-form v-slot="{ field }" v-model="dataInput.category_id">
            <input-comp v-bind="field" v-model="dataInput.category_id">
              <drop-down :options="optionsCategory" name="Category" />
            </input-comp>
          </field-form>
          <field-form v-slot="{ field }" v-model="dataInput.type_id">
            <input-comp v-bind="field" v-model="dataInput.type_id">
              <drop-down :options="optionsType" name="Type" />
            </input-comp>
          </field-form>
          <field-form v-slot="{ field }" v-model="dataInput.total" name="Total">
            <input-comp label="Total" v-bind="field" />
          </field-form>
          <field-form v-slot="{ field }" v-model="dataInput.info" name="Info">
            <input-comp label="Info" v-bind="field" />
          </field-form>
        </form-comp> -->
          <field-form v-slot="{ field }" v-model="dataInput.category_id">
            <input-comp v-bind="field" v-model="dataInput.category_id">
              <drop-down :options="optionsCategory" name="Category" />
            </input-comp>
          </field-form>
          <field-form v-slot="{ field }" v-model="dataInput.type_id">
            <input-comp v-bind="field" v-model="dataInput.type_id">
              <drop-down :options="optionsType" name="Type" />
            </input-comp>
          </field-form>
          <field-form v-slot="{ field }" v-model="dataInput.total" name="Total">
            <input-comp label="Total" v-bind="field" />
          </field-form>
          <field-form v-slot="{ field }" v-model="dataInput.info" name="Info">
            <input-comp label="Info" v-bind="field" />
          </field-form>
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

export default {
  name: "tables",
  data: () => ({
    // data kolom
    dt: {
      columns: [
        { name: "category_name", th: "Category Name" },
        { name: "type_name", th: "Transaction Type" },
        { name: "total", th: "Total" },
        { name: "info", th: "Information" },
        { name: "indate", th: "Date" },
      ],
    },
    // input data
    dataInput: {
      category_id: null,
      type_id: null,
      total: "",
      info: "",
    },
    // data option category select
    optionsCategory: [
      { text: "Selery", value: 1 },
      { text: "Transport", value: 2 },
      { text: "Shop", value: 3 },
    ],
    // data option category select
    optionsType: [
      { text: "Income", value: 1 },
      { text: "Expand", value: 2 },
    ],
    modalTitle: "Transaction",
    titleButton: "Save",
    isModalVisible: false,
  }),
  computed: {
    ...mapState(st$transaction, ["g$dataTransaction"]),
  },
  async mounted() {
    await this.transaction();
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },

    closeModal() {
      this.isModalVisible = false;
    },

    ...mapActions(st$transaction, ["a$getTransaction", "a$addTransaction"]),
    async transaction() {
      try {
        await this.a$getTransaction();
      } catch (error) {
        console.error(error);
      }
    },

    submitData() {
      try {
        this.a$addTransaction(this.dataInput);
        this.isModalVisible = false
      } catch (error) {
        console.log("error bolo", error);
      }
    },
  },
};
</script>
