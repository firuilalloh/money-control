<template>
  <div class="modal" :class="{ 'is-active': isActive }">
    <div class="modal-background"></div>
    <div class="modal-content">
      <div class="modal-header">
        <h3>{{ modalTitle }}</h3>
      </div>
      <div class="modal-body">
        <slot></slot>
      </div>
      <div class="modal-footer">
        <button-component
          buttonStyle="danger"
          aria-label="close"
          @click="closeModal"
          button-text="Close"
        />
        <button-component
          buttonStyle="success"
          aria-label="save"
          @click="saveModal"
          button-text="Save"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    modalTitle: {
      type: String,
      default: "Modal",
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
    saveModal() {
      this.$emit("save")
    }
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 9999;

  &.is-active {
    display: flex;
  }

  .modal-background {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    width: 100%;
    height: 100%;
  }

  .modal-content {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
    overflow: auto;
    display: flex;
    flex-direction: column;
    width: 500px;
  }
}
</style>
