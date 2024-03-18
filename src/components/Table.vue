<template>
  <div :class="[{ ['table-responsive']: true }]">
    <div :class="['from-group', 'my-3']">
      <label class="mr-0 text-sm">
        <select
          v-model="itemPages"
          class="form-control form-control-sm d-inline-block w-auto"
        >
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <span class="d-none d-md-inline text-muted ml-2">
          entries per page</span
        >
      </label>
    </div>
    <div :class="['from-group', 'my3']">
      <input
        v-model="query"
        type="text"
        class="form-control form-control-sm"
        placeholder="Search Records"
        @keyup="search(query)"
      />
    </div>
    <div class="col-auto ml-auto">
      Filter :
      <div class="table-filters d-inline-block">
        <div 
        v-for="(option, i) in filters"
        :key="i"
        class="table-filter"
        @click="filter(option)"
        >

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    itemPages: 10,
  }),
};
</script>

<style></style>
