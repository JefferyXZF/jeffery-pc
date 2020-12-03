// 根据packages/theme下icon.scss文件，自动在examples下生成icon.json文件
// 生成的icon.json文件用来展示内置的所有图标

const postcss = require('postcss');
const fs = require('fs');
const path = require('path');
const fontFile = fs.readFileSync(path.resolve(__dirname, '../../packages/theme/src/icon.scss'), 'utf8');
const nodes = postcss.parse(fontFile).nodes;
let classList = [];

nodes.forEach((node) => {
  let selector = node.selector || '';
  let reg = new RegExp(/\.qw-icon-([^:]+):before/);
  let arr = selector.match(reg);

  if (arr && arr[1]) {
    classList.push(arr[1]);
  }
});

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify(classList), () => {});
