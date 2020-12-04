<template>
  <button class="qw-button"
          @click="handleClick"
          :class="[
      type ? 'qw-button--' + type : '',
      buttonSize ? 'qw-button--' + buttonSize : '',
      {
        'is-disabled': disabled,
        'is-loading': loading,
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle
      }
    ]">
    <i class="qw-icon-loading"
       v-if="loading"></i>
    <i :class="icon"
       v-if="icon && !loading"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: "QwButton",
  props: {
    type: {
      type: String,
      default: "default"
    },
    size: {
      type: String,
      default: ""
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonSize() {
      return this.size || (this.$ELEMENT || {}).size;
    }
  },
  methods: {
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>
