<template>
  <div class="w-35 my-4">
    <Datepicker v-model="date" placeholder="Chose A Date" :flow="flow" :enable-time-picker="false" />
    <p>{{ date }}</p>
  </div>
</template>

<script>
import Datepicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";

export default {
  components: {
    Datepicker,
  },
  data: () => ({
    date:  '',
    flow: ['month','year','calendar'],
  }),
};
</script>
