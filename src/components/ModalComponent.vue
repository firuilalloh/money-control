<template>
  <div
    class="modal fade"
    v-show="show"
    :class="[
      { 'show d-block': show },
      { 'd-none': !show },
      { 'modal-mini': type === 'mini' },
    ]"
    tabindex="-1"
    role="dialog"
    :aria-hidden="!show"
    @mousedown.self="closeHandle(true)"
  >
    <div
      class="modal-dialog modal-dialog-centered"
      :class="[
        { 'modal-notice': type === 'notice', [`modal-${size}`]: size },
        classModal,
      ]"
    >
      <div
        class="modal-content"
        :class="[gradient ? `bg-gradient-${gradient}` : '', classModalContent]"
      >
        <div
          v-if="$slots.header"
          class="modal-header align-items-center"
          :class="[classHeader]"
        >
          <slot name="header"></slot>
          <!-- <slot name="close-button">
            <button
              v-if="showClose"
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="close"
              @click="closeHandle()"
            >
              <span :aria-hidden="!show">x</span>
            </button>
          </slot> -->
        </div>
        <div class="modal-body" :class="classBody">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer" :class="classFotter">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ModalComponent",
  props: {
    show: Boolean,
    showClose: {
      type: Boolean,
      default: true,
    },
    type: {
      type: String,
      default: "",
      validator(value) {
        const acceptedValue = ["", "notice", "mini"];
        return acceptedValue.indexOf(value) !== -1;
      },
      desc: "Modal type",
    },
    classModal: {
      type: [Object, String],
      desc: "Modal dialog css class",
      default: "",
    },
    size: {
      type: String,
      desc: "Modal size",
      validator(value) {
        const acceptedValue = ["", "sm", "lg"];
        return acceptedValue.indexOf(value) !== -1;
      },
      default: "",
    },
    classModalContent: {
      type: String,
      desc: "Modal content css class",
      default: "",
    },
    gradient: {
      type: String,
      desc: "Modal gradient css classes",
      default: "",
    },
    classHeader: {
      type: [Object, String],
      default: "",
    },
    classBody: {
      type: [Object, String],
      default: "",
    },
    classFotter: {
      type: [Object, String],
      default: "",
    },
    animationDuration: {
      type: Number,
      default: 500,
      description: "Modal transition duration",
    },
    preventClose: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["update:show", "close"],
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
  methods: {
    closeHandle(outside = false) {
      if (this.preventClose && outside) {
        return false;
      }
      this.$emit("update:show", false);
      this.$emit("close");
      return true;
    },
  },
};
</script>

<style lang="scss" scoped>
.modal.show {
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(0.25rem);
}

.modal-dark .modal-content {
  background-color: #1a1a1a !important;

  .modal-body,
  .modal-footer {
    border-top: 1px solid #3a3a3a;
  }

  h3,
  strong {
    color: white !important;
  }

  p {
    color: white !important;
  }

  .close > span:not(.sr-only) {
    color: white !important;
  }

  label {
    color: white !important;
  }
}
</style>
