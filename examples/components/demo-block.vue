<template>
  <div :class="['jy-demo-block', blockClass, { 'hover': hovering }]"
       @mouseenter="hovering = true"
       @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="jy-demo-block__meta"
         ref="meta">
      <div class="jy-demo-block__meta-description"
           v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div class="jy-demo-block__control"
         ref="control"
         :class="{ 'is-fixed': fixedControl }"
         @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i :class="[iconClass, { 'hovering': hovering }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>

<script>
import componentLang from "../i18n/component.json";
import { version } from "main/index.js";

export default {
  name: "demo-block",
  data() {
    return {
      hovering: false,
      isExpanded: false,
      fixedControl: false
    };
  },
  computed: {
    lang() {
      return this.$route.path.split("/")[1];
    },

    langConfig() {
      return componentLang.filter(config => config.lang === this.lang)[0][
        "demo-block"
      ];
    },

    controlText() {
      return this.isExpanded
        ? this.langConfig["hide-text"]
        : this.langConfig["show-text"];
    },

    codeArea() {
      return this.$el.getElementsByClassName("jy-demo-block__meta")[0];
    },

    codeAreaHeight() {
      if (
        this.$el.getElementsByClassName("jy-demo-block__meta-description")
          .length > 0
      ) {
        return (
          this.$el.getElementsByClassName(
            "jy-demo-block__meta-description"
          )[0].clientHeight +
          this.$el.getElementsByClassName("highlight")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("highlight")[0].clientHeight;
    },

    iconClass() {
      return this.isExpanded ? "jy-icon-caret-top" : "jy-icon-caret-bottom";
    },

    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path
        .split("/")
        .pop()}`;
    }
  },
  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        window.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    }
  },
  mounted() {
    this.$nextTick(() => {
      let highlight = this.$el.getElementsByClassName("highlight")[0];
      if (
        this.$el.getElementsByClassName("jy-demo-block__meta-description")
          .length === 0
      ) {
        highlight.style.width = "100%";
        highlight.borderRight = "none";
      }
    });
  },
  beforeDestroy() {
    this.removeScrollHandler();
  },
  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
    },

    removeScrollHandler() {
      window.removeEventListener("scroll", this.scrollHandler);
    }
  }
};
</script>

<style lang="scss">
.jy-demo-block {
  border: solid 1px #ebebeb;
  border-radius: 3px;
  transition: 0.2s;

  &.hover {
    box-shadow: 0 0 8px 0 rgba(232, 237, 250, 0.6),
      0 2px 4px 0 rgba(232, 237, 250, 0.5);
  }

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .source {
    padding: 24px;
  }

  &__meta {
    background-color: #fafafa;
    border-top: solid 1px #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.2s;

    &-description {
      padding: 20px;
      box-sizing: border-box;
      border: solid 1px #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px;
      background-color: #fff;

      p {
        margin: 0;
        line-height: 26px;
      }

      code {
        color: #5e6d82;
        background-color: #e6effb;
        margin: 0 4px;
        display: inline-block;
        padding: 1px 5px;
        font-size: 12px;
        border-radius: 3px;
        height: 18px;
        line-height: 18px;
      }
    }

    .highlight {
      pre {
        margin: 0;
      }

      code.hljs {
        margin: 0;
        border: none;
        max-height: none;
        border-radius: 0;

        &::before {
          content: none;
        }
      }
    }
  }

  &__control {
    border-top: solid 1px #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 983px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #409eff;
      background-color: #f9fafc;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }
  }
}
</style>
