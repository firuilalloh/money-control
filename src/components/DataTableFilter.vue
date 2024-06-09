<script setup>
import { computed, ref } from "vue";

let searchFilter = ref("");

const props = defineProps({
  // Array of objects representing table data
  items: {
    type: Array,
    required: true,
  },
  // Array of objects defining columns
  columns: {
    type: Array,
    required: true,
  },
  // Title for the table
  title: {
    type: String,
    default: "",
  },
  // Function to handle button click (optional)
  onButtonClick: {
    type: Function,
    default: null,
  },
});

const filteredItems = computed(() => {
  if (searchFilter.value === "") {
    return props.items;
  }
  return props.items.filter(
    (item) =>
      props.columns.some((col) =>
        item[col.name]
          .toLowerCase()
          .includes(searchFilter.value.toLowerCase())
      )
  );
});

const handleSearch = (search) => {
  searchFilter.value = search;
};
</script>

<template>
  <div class="card">
    <div class="d-flex justify-content-between">
      <div class="card-header mt-2">
        <h6>{{ title }}</h6>
      </div>
    </div>
    <div class="card-body px-0 pt-0 text-center">
      <div class="table-responsive p-0">
        <table class="table table-bordered align-items-center">
          <thead>
            <tr>
              <th v-for="(col) in columns" :key="col.name">
                {{ col.label }}
              </th>
              <th>
                <span>Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="body-table text-center"
              v-for="(item, index) in filteredItems"
              :key="index"
            >
              <td v-for="(col) in columns" :key="col.name">
                {{ item[col.name] }}
              </td>
              <td class="pt-3 pb-1 d-flex justify-content-evenly">
                <button-component buttonStyle="warning" title="Detail" @click="onButtonClick(item)" />
                <button-component buttonStyle="danger" title="Delete" @click="onButtonClick(item)" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-md-6">
      </div>
    </div>
  </div>
</template>

<style></style>
