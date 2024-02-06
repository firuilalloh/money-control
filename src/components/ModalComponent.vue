<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div
        class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h3 class="header-title">
              {{ headerTitle }}
            </h3>
          </slot>
          <button
            type="button"
            class="close-btn"
            @click="close"
            aria-label="Close Modal"
          >
            x
          </button>
        </header>

        <main class="modal-body" id="modalDescription">
          <slot name="body"> </slot>
        </main>

        <footer class="modal-footer">
          <slot name="footer"> </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import ButtonComponent from "./ButtonComponent.vue";

export default {
  name: "Modal",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      buttonTitle: "Save",
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
  props: {
    headerTitle: {
      type: String,
      default: "Header",
    },
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
}

.header-title {
  margin-bottom: -2px;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  width: 50%;
  height: 80%;
  margin-top: 70px;
  margin-left: 33%;
}

.modal-header,
.modal-footer {
  padding-top: 10px;
  display: flex;
}

.modal-header {
  position: relative;
  border-bottom: 1px solid rgb(227, 231, 233);
  color: #353535;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid rgb(227, 231, 233);
  flex-direction: column;
  justify-content: flex-end;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  font-size: 20px;
  padding-top: 13px;
  padding-right: 20px;
  cursor: pointer;
  font-weight: bold;
  color: #245f7e;
  background: transparent;
}

.btn-close-modal {
  color: white;
  background: green;
  border: 1px solid green;
  border-radius: 4px;
  margin: 10px auto;
  padding: 5px;
  width: 40%;
}
.modal-fade-enter,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
