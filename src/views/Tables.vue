<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="col-12 w-20">
          <card-comp title="Balance" :balance="g$dataBalance.total" />
        </div>
        <button-component buttonStyle="info" @click="showModal">
          Add New {{ modalTitle }}
        </button-component>

        <empty-result :status="g$dataTransaction.status">
          <data-table
            :data="g$dataTransaction.data"
            v-bind="dt"
            @edit-transaction="EditModal"
            @delete-transaction="DeleteModal"
          />
        </empty-result>
        <!-- 
        <modal-component :modalTitle="modalTitle" :is-active="isModalVisible">
          <template #body>
            <field-form
              v-slot="{ field }"
              v-model="dataInput.category_id"
              name="category"
            >
              <input-comp v-bind="field" v-model="dataInput.category_id">
                <drop-down :options="optionsCategory" name="Category" />
              </input-comp>
            </field-form>
            <field-form
              v-slot="{ field }"
              v-model="dataInput.type_id"
              nmae="type"
            >
              <input-comp v-bind="field" v-model="dataInput.type_id">
                <drop-down :options="optionsType" name="Type" />
              </input-comp>
            </field-form>
            <field-form
              v-slot="{ field }"
              v-model="dataInput.total"
              name="Total"
            >
              <input-comp label="Total" v-bind="field" />
            </field-form>
            <field-form v-slot="{ field }" v-model="dataInput.info" name="Info">
              <input-comp label="Info" v-bind="field" />
            </field-form>
          </template>
          <template #footer>
            <button-component buttonStyle="danger" @click="closeModal">
              Close
            </button-component>
            <button-component buttonStyle="success" @click="submitData">
              Save
            </button-component>
          </template>
        </modal-component> -->

        <modal-component
          v-model:show="isModalVisible"
          modalClassess="modal-xl"
          prevent-close
        >
          <template #header>
            <h3>Modal</h3>
          </template>
          <template v-if="isModalVisible" #body>
            <field-form
              v-slot="{ field }"
              v-model="dataInput.category_id"
              name="category"
            >
              <input-comp v-bind="field" v-model="dataInput.category_id">
                <drop-down :options="optionsCategory" name="Category" />
              </input-comp>
            </field-form>
            <field-form
              v-slot="{ field }"
              v-model="dataInput.type_id"
              nmae="type"
            >
              <input-comp v-bind="field" v-model="dataInput.type_id">
                <drop-down :options="optionsType" name="Type" />
              </input-comp>
            </field-form>
            <field-form
              v-slot="{ field }"
              v-model="dataInput.total"
              name="Total"
            >
              <input-comp label="Total" v-bind="field" />
            </field-form>
            <field-form v-slot="{ field }" v-model="dataInput.info" name="Info">
              <input-comp label="Info" v-bind="field" />
            </field-form>
          </template>
          <template #footer>
            <button-component buttonStyle="danger" @click="closeModal">
              Close
            </button-component>
            <button-component buttonStyle="success" @click="submitData">
              Save
            </button-component>
          </template>
        </modal-component>
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
    // input data
    dataInput: {
      id: null,
      category_id: "",
      type_id: "",
      total: "",
      info: "",
    },
    //modal
    modal: {
      edit: false,
      delete: false,
    },
    // data kolom
    dt: {
      columns: [
        { name: "category_name", th: "Category" },
        { name: "type_name", th: "Type" },
        { name: "total", th: "Total" },
        { name: "info", th: "Information" },
        { name: "indate", th: "Date" },
      ],
      actions: [
        {
          text: "Edit",
          color: "info",
          event: "edit-transaction",
        },
        {
          text: "Delete",
          color: "danger",
          event: "delete-transaction",
        },
      ],
      index: false,
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
    ...mapState(st$transaction, ["g$dataTransaction", "g$dataBalance"]),
    modals() {
      return Object.values(this.modal).includes(true);
    },
  },
  watch: {
    async modals(val) {
      if (!val) this.clearInput();
    },
  },
  async mounted() {
    await this.transaction();
    await this.balance();
    console.log(this.transaction());
  },
  methods: {
    showModal() {
      this.dataInput = {
        id: null,
        category_id: "",
        type_id: "",
        total: "",
        info: "",
      };
      this.isModalVisible = true;
      console.log("clicked");
    },

    clearInput() {
      this.dataInput = {
        id: null,
        category_id: "",
        type_id: "",
        total: "",
        info: "",
      };
    },

    closeModal() {
      this.isModalVisible = false;
    },

    showEditModal() {
      this.isModalVisible = true;
      const data = this.g$dataTransaction;
      this.dataInput = {
        id: data.id,
        category_id: data.category_id,
        type_id: data.type_id,
        total: data.total,
        info: data.info,
      };
      console.log(this.dataInput);
    },

    ...mapActions(st$transaction, [
      "a$getTransaction",
      "a$addTransaction",
      "a$getBalance",
      "a$editTransaction",
      "a$deleteTransaction",
    ]),
    async transaction() {
      try {
        await this.a$getTransaction();
      } catch (error) {
        console.error(error);
      }
    },
    async balance() {
      try {
        await this.a$getBalance();
      } catch (error) {
        console.error(error);
      }
    },

    submitData() {
      // const success = this.g$dataBalance.status === true

      // switch (success) {
      //   case false:
      //     alert("Your balance is not sufficient");
      //     break;

      //   case true:
      //     await this.a$addTransaction(this.dataInput);
      //     this.isModalVisible = false;
      //     window.location.reload();
      //     break;
      // }

      try {
        console.log(this.g$dataBalance.total);
        if (this.dataInput.total > this.g$dataBalance.total) {
          alert("balance not sufficient");
        } else {
          this.a$addTransaction(this.dataInput);
          this.isModalVisible = false;
          window.location.reload();
        }
      } catch (error) {
        console.log("error", error);
      }
    },

    async EditModal() {
      try {
        this.showEditModal();
        // [this.input] = await this.a$customerDetail(data.id);
      } catch (error) {
        console.error("Error editing transaction:", error);
      }
    },

    async DeleteModal(data) {
      try {
        const confirmResult = window.confirm(
          "Are you sure to delete this data ?"
        );
        console.log(confirmResult);
        if (confirmResult) {
          await this.a$deleteTransaction(data.id);
          console.log("Data deleted successfully.");
        } else {
          console.log("Deletion canceled by the user.");
        }
      } catch (error) {
        console.error("Error deleting transaction:", error);
      }
    },
  },
};
</script>
