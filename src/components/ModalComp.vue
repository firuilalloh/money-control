<template>
  <div v-show="show" class="modal fade" @click.self="close">
    <div class="modal">
      <button class="modal-close" @click="close">&times;</button>
      <div class="modal-header">
        <slot name="header"></slot>
      </div>
      <div class="modal-body">
        <slot name="body"></slot>
      </div>
      <div class="modal-footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  watch: {
    show(val) {
      const classDoc = document.body.classList;
      if (val) {
        classDoc.add("modal-open");
      } else {
        classDoc.remove("modal-open");
      }
    },
  },
};
</script>

<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 500px;
  max-width: 100%;
  position: relative;
}

.modal-close {
  background: none;
  border: none;
  font-size: 24px;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
}

.modal-header,
.modal-body,
.modal-footer {
  margin-bottom: 20px;
}
.modal-footer {
  margin-bottom: 0;
}
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.25rem);
  z-index: 9999;
}
</style>
