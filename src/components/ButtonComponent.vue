<template>
  <button :class="computedClass" :disabled="isLoading" @click="handleClick">
    <span v-if="!isLoading">
      {{ buttonText }}
    </span>
    <span v-else> <i class="fas fa-spinner fa-spin"></i> Loading... </span>
  </button>
</template>

<script>
export default {
  props: {
    buttonText: {
      type: String,
      default: 'Test'
    },
    buttonStyle: {
      type: String,
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    computedClass() {
      return `btn btn-${this.buttonStyle}`;
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style>
.btn {
  padding: 10px 20px;
  cursor: pointer;
}

.btn-default {
  background-color: #f0f0f0;
  color: #333;
}

.btn-primary {
  background-color: #007bff;
  color: #fff;
}

.btn-success {
  background-color: #28a745;
  color: #fff;
}

.btn-warning {
  background-color: #ffc107;
  color: #333;
}

.btn-danger {
  background-color: #dc3545;
  color: #fff;
}
</style>
