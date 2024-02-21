<template>
  <button-component
    buttonStyle="success"
    @click="openModal"
    buttonText="Open Modal"
  />
  <modal-component
    :is-active="modalActive"
    @close="closeModal"
    @save="saveModal"
  >
    <field-form
      v-slot="{ field }"
      v-model="Input.selectedCategory"
      name="Category"
    >
      <input-comp v-bind="field" v-model="Input.selectedCategory">
        <drop-down :options="optionsCategory" />
      </input-comp>
    </field-form>
    <field-form v-slot="{ field }" v-model="Input.selectedType" name="Type">
      <input-comp v-bind="field" v-model="Input.selectedType">
        <drop-down :options="optionsType" />
      </input-comp>
    </field-form>
    <field-form v-slot="{ field }" v-model="Input.totalData" name="Total">
      <input-comp label="Total" v-bind="field" />
    </field-form>
    <field-form v-slot="{ field }" v-model="Input.infoData" name="Info">
      <input-comp label="Info" v-bind="field" />
    </field-form>
  </modal-component>
</template>

<script>

export default {
  data() {
    return {
      modalActive: false,
      Input: {
        selectedCategory: null,
        selectedType: null,
        totalData: "",
        infoData: "",
      },
      optionsCategory: [
        { text: "Selery", value: 1 },
        { text: "Transport", value: 2 },
        { text: "Shop", value: 3 },
      ],
      optionsType: [
        { text: "Income", value: 1 },
        { text: "Expand", value: 2 },
      ],
    };
  },
  methods: {
    openModal() {
      this.modalActive = true;
    },
    closeModal() {
      this.modalActive = false;
    },
    saveModal() {
      this.modalActive = false;

      console.log(this.Input);
      this.Input = {
        selectedCategory: null,
        selectedType: null,
        totalData: "",
        infoData: "",
      }
    },
  },
};
</script>

<style></style>
