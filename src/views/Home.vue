<template>
  <table-comp />
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
