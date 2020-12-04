<template>
  <i :class="'qw-icon-' + name"></i>
</template>

<script>
export default {
  name: "QwIcon",

  props: {
    name: {
      type: String,
      default: ""
    }
  }
};
</script>
