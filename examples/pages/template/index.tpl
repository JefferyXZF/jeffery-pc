<template>
  <div class="jy-doc-container">
    <main-side :data="navConfig[lang]"
               :base="`/${ lang }`"></main-side>
    <router-view class="jy-doc-content"></router-view>
  </div>
</template>

<script>
import navConfig from "../../nav.config.json";

export default {
  name: "index",
  data() {
    return {
      navConfig,
      lang: this.$route.meta.lang
    };
  }
};
</script>

<style lang="scss">
@import "../../assets/styles/variable.scss";

.jy-doc-container {
  width: 100%;
}

.jy-doc-content {
  width: 100%;
  padding-left: 260px;
  padding-right: 20px;
  overflow: hidden;
  box-sizing: border-box;

  > {
    h3 {
      margin: 55px 0 20px;
    }

    table {
      border-collapse: collapse;
      width: 100%;
      background-color: #fff;
      font-size: 14px;
      margin-bottom: 45px;
      line-height: 1.5em;

      strong {
        font-weight: normal;
      }

      td,
      th {
        border-bottom: 1px solid #d8d8d8;
        padding: 15px;
        max-width: 250px;
      }

      th {
        text-align: left;
        white-space: nowrap;
        color: #666;
        font-weight: normal;
      }

      td {
        color: #333;
      }

      th:first-child,
      td:first-child {
        padding-left: 10px;
      }
    }

    ul:not(.timeline) {
      margin: 10px 0;
      padding: 0 0 0 20px;
      font-size: 14px;
      color: #5e6d82;
      line-height: 2em;
    }
  }
}
</style>
