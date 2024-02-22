<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="row">
          <div class="col-12 w-25">
            <card-comp />
          </div>
        </div>
        <EmptyResult :status="g$dataCategory.status" >
          <DataTable :data="g$dataCategory.data" v-bind="dt" />
        </EmptyResult>
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
    dt: {
      columns: [
        {name: "category_id", th: "Category ID"},
        {name: "category_name", th: "Category Name"}
      ]
    }
  }),
  computed: {
    ...mapState(st$category, ["g$dataCategory"]),
  },
  async mounted() {
    await this.init();
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
  },
};
</script>
