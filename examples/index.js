import Vue from 'vue';
import Quickwork from 'main/index.js';
import 'packages/theme/src/index.scss';
import App from './app';
import VueRouter from 'vue-router';
import routes from './route.config';
import title from './i18n/title.json';

Vue.use(VueRouter);
Vue.use(Quickwork);

// 全局注册组件
const contexts = require.context('./components', false, /\.vue$/);
contexts.keys().forEach(component => {
  let componentEntity = contexts(component).default;
  Vue.component(componentEntity.name, componentEntity);
});

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  window.scrollTo(0, 0);
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = 'Jeffery-UI 组件库';
});

// eslint-disable-line
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
