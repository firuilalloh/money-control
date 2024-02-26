<template>
  <button :class="computedClass" @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    buttonStyle: {
      type: String,
    },
  },
  computed: {
    computedClass() {
      return `btn btn-${this.buttonStyle}`;
    },
  },
  emits: ['click'],
  methods: {
    handleClick(event) {
      this.$emit("click", event);
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
