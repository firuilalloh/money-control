<template>
  <div class="mb-4 card">
    <div class="p-3 card-body">
      <div class="d-flex">
        <div>
          <div class="text-center icon icon-shape"
           :class="`${iconBackground} ${this.$store.state.isRTL ? 'border-radius-md' : 'border-radius-2xl'}`">
            <i class="text-lg opacity-10" :class="iconClass" aria-hidden="true"></i>
          </div>
        </div>
        <div :class="contentClass">
          <div class="numbers">
            <p class="mb-0 text-sm text-uppercase font-weight-bold" :class="titleColor">{{ title }}</p>
            <h5 class="font-weight-bolder" :class="valueColor">{{ value }}</h5>
            <p class="font-weight">{{ balance }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  data() {
    return {
      reverseDirection: "flex-row-reverse justify-content-between",
    };
  },
  props: {
    directionReverse: Boolean,
    balance: {
      type: String
    },
    title: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    titleColor: {
      type: String,
    },
    value: {
      type: Number,
      required: true,
    },
    valueColor: {
      type: String,
    },
    percentage: String,
    iconClass: {
      type: String,
      required: true,
    },
    percentageColor: {
      type: String,
      default: "text-success",
    },
    iconBackground: {
      type: String,
      default: "bg-white",
    },
    contentClass: {
      type: String,
    },
  },
};
</script>
