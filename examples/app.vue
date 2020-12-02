<template>
  <div id="app">
    <main-header></main-header>
    <router-view></router-view>
  </div>
</template>

<script>
import { use } from "main/locale";
import zhLocale from "main/locale/lang/zh-CN";
import enLocale from "main/locale/lang/en-US";

const lang = location.hash.replace("#", "").split("/")[1] || "zh-CN";
const localize = lang => {
  switch (lang) {
    case "zh-CN":
      use(zhLocale);
      break;
    default:
      use(enLocale);
  }
};
localize(lang);

export default {
  name: "app",
  computed: {
    lang() {
      return this.$route.path.split("/")[1] || "zh-CN";
    }
  },
  watch: {
    lang(val) {
      localize(val);
    }
  }
};
</script>

<style lang="scss">
@import "./assets/styles/common.scss";
@import "highlight.js/styles/color-brewer.css";
</style>
