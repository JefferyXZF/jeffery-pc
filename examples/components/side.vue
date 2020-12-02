<template>
  <div class="jy-doc-side"
       :style="style">
    <ul>
      <li class="jy-doc-side__item"
          v-for="(item, index) in data"
          :key="index">
        <a v-if="!item.path">{{item.name}}</a>
        <router-link v-if="item.path"
                     active-class="active"
                     :to="base + item.path"
                     exact
                     v-text="item.title || item.name">
        </router-link>
        <ul v-if="item.children">
          <li class="jy-doc-side__item"
              v-for="(value, key) in item.children"
              :key="key">
            <router-link :to="base + value.path"
                         exact
                         active-class="active">{{value.name}}</router-link>
          </li>
        </ul>
        <template v-if="item.groups">
          <div v-for="(group, key) in item.groups"
               :key="key">
            <div class="jy-doc-side__nav-group-title">{{group.groupName}}</div>
            <ul class="jy-doc-side__pure-menu-list">
              <li class="jy-doc-side__item"
                  v-for="(navItem, key) in group.list"
                  v-if="!navItem.disabled"
                  :key="key">
                <router-link active-class="active"
                             :to="base + navItem.path"
                             exact
                             v-text="navItem.title"></router-link>
              </li>
            </ul>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "side",

  props: {
    data: Array,
    base: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      top: 60,
      bottom: 0
    };
  },

  computed: {
    style() {
      return {
        top: this.top + "px",
        bottom: this.bottom + "px"
      };
    }
  },

  created() {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  },

  methods: {
    onScroll() {
      const { pageYOffset: offset } = window;
      this.top = Math.max(0, 60 - offset);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";

.jy-doc-side {
  width: 240px;
  box-sizing: border-box;
  transition: opacity 0.3s;
  position: fixed;
  border-right: 1px solid $jy-doc-border-color;
  padding: 25px 0;

  ul {
    padding: 0;
    margin: 0;
    overflow: hidden;
  }

  &__item {
    list-style: none;

    a {
      font-size: 16px;
      color: #333;
      line-height: 40px;
      height: 40px;
      margin: 0;
      padding: 0;
      text-decoration: none;
      display: block;
      position: relative;
      transition: 0.15s ease-out;
      font-weight: 700;
      padding: 10px calc(#{$jy-doc-padding}/ 2) 10px $jy-doc-padding;
      box-sizing: border-box;
      &.active {
        color: #409eff;
      }
    }

    .jy-doc-side__item {
      a {
        display: block;
        height: 40px;
        color: #444;
        line-height: 40px;
        font-size: 14px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        font-weight: normal;
        box-sizing: border-box;

        &:hover,
        &.active {
          color: #409eff;
        }
      }
    }

    .jy-doc-side__nav-group-title {
      font-size: 12px;
      line-height: 40px;
      padding-left: $jy-doc-padding;
      color: $jy-doc-text-light-blue;
    }
  }

  @media (max-width: 1300px) {
    min-width: 220px;
    max-width: 220px;

    &__item,&__item &__item {
      a {
        line-height: 22px;
      }
    }

    &__item {
      a {
        font-size: 13px;
      }
    }
  }
}
</style>
