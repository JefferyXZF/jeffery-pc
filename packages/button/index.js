import jyButton from './src/button';

jyButton.install = function(Vue) {
  Vue.component(jyButton.name, jyButton);
};

export default jyButton;
