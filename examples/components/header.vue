<template>
  <div class="qw-doc-header">
    <router-link class="qw-doc-header__logo"
                 to="/">
      <img src="../assets/images/logo.png">
      <span>{{langConfig.title}}</span>
      <span v-if="version"
            class="qw-doc-header__version">v{{ version }}</span>
    </router-link>
    <ul class="qw-doc-header__nav">
      <li class="qw-doc-header__nav-item">{{langConfig.phone}}</li>
      <li class="qw-doc-header__nav-item active">{{langConfig.web}}</li>
      <li class="qw-doc-header__nav-lang"
          @click="switchLang">{{displayedLang}}</li>
      <li>
        <svg height="28"
             width="28"
             class="octicon octicon-mark-github"
             viewBox="0 0 16 16"
             version="1.1"
             aria-hidden="true">
          <path fill-rule="evenodd"
                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
        </svg>
      </li>
    </ul>
  </div>
</template>

<script>
import { version } from "main/index.js";
import componentLang from "../i18n/component.json";

export default {
  name: 'MainHeader',
  data() {
    return {
      version,
      langs: {
        "zh-CN": "En",
        "en-US": "中文"
      }
    };
  },
  computed: {
    lang() {
      return this.$route.path.split("/")[1] || "zh-CN";
    },
    langConfig() {
      return componentLang.filter(config => config.lang === this.lang)[0][
        "header"
      ];
    },
    displayedLang() {
      return this.langs[this.lang] || "中文";
    }
  },
  methods: {
    // 切换语言
    switchLang() {
      let targetLang;
      Object.keys(this.langs).forEach(key => {
        if (this.displayedLang === this.langs[key]) return;
        targetLang = key;
      });
      localStorage.setItem("JEFFERY_LANGUAGE", targetLang);
      this.$router.push(this.$route.path.replace(this.lang, targetLang));
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";

.qw-doc-header {
  width: 100%;
  user-select: none;
  border-bottom: 1px solid $qw-doc-border-color;
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 0 $qw-doc-padding;
  height: $qw-doc-header-height;
  line-height: $qw-doc-header-height;
  box-sizing: border-box;

  &__logo {
    display: block;

    img,
    span {
      display: inline-block;
      vertical-align: middle;
    }

    img {
      width: 40px;
      margin-right: 5px;
    }

    span {
      font-size: 22px;
      color: $qw-doc-black;
      font-family: "Dosis", "Source Sans Pro", "Helvetica Neue", Arial,
        sans-serif;
    }

    .qw-doc-header__version {
      font-size: 90%;
      padding-top: 7px;
      opacity: 0.7;
      margin-left: 3px;
      line-height: 1;
    }
  }

  &__nav {
    flex: 1;
    text-align: right;
    list-style: none;

    > li {
      display: inline-block;
      position: relative;
      vertical-align: middle;
      margin: 0 15px;
      cursor: pointer;

      svg {
        fill: $qw-doc-code-color;
        display: block;
        transition: 0.3s ease-in-out;

        &:hover {
          fill: $qw-doc-blue;
        }
      }
    }

    &-item {
      font-size: 15px;
      color: $qw-doc-text-color;
      border-bottom: 1px solid transparent;
      transition: 0.3s ease-in-out;

      &:hover,
      &.active {
        color: $qw-doc-blue;
        border-bottom-color: #19b5fe;
      }
    }

    &-lang {
      padding: 0 7px;
      font-size: 14px;
      line-height: 24px;
      display: block;
      border-radius: 3px;
      text-align: center;
      color: $qw-doc-code-color;
      border: 1px solid currentColor;
      font-family: "Helvetica Neue", Arial, sans-serif;
      transition: 0.3s ease-in-out;

      &:hover {
        color: $qw-doc-blue;
      }
    }
  }
}
</style>
