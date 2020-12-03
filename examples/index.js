import Vue from 'vue';
import Jyui from 'main/index.js';
import 'packages/theme/src/index.scss';
import App from './app';
import VueRouter from 'vue-router';
import routes from './route.config';
import title from './i18n/title.json';
import MainHeader from './components/header.vue';
import MainSide from './components/side.vue';
import DemoBlock from './components/demo-block.vue';

Vue.use(VueRouter);
Vue.use(Jyui);
Vue.component('main-header', MainHeader);
Vue.component('main-side', MainSide);
Vue.component('demo-block', DemoBlock);

const router = new VueRouter({
  mode: 'hash',
  base: __dirname,
  routes
});

router.afterEach(route => {
  const data = title[route.meta.lang];
  for (let val in data) {
    if (new RegExp('^' + val, 'g').test(route.name)) {
      document.title = data[val];
      return;
    }
  }
  document.title = 'DO1 CLOUD|QUICK WORK';
});

// eslint-disable-line
new Vue({
  render: h => h(App),
  router
}).$mount('#app');
