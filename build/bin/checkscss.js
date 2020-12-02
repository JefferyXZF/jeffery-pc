// 依据components.json检查是否有组件的scss样式文件遗漏

const fs = require('fs');
const path = require('path');
const Components = require('../../components.json');
const basepath = path.resolve(__dirname, '../../packages/');
const ComponentsKey = Object.keys(Components);
let indexContent = '@import "./base.scss";\n';

function fileExists(filePath) {
  try {
    return fs.statSync(filePath).isFile();
  } catch (err) {
    return false;
  }
}

ComponentsKey.forEach(key => {
  if (['icon'].indexOf(key) > -1) return;
  const fileName = key + '.scss';
  indexContent += '@import "./' + fileName + '";\n';
  const filePath = path.resolve(basepath, 'theme', 'src', fileName);
  if (!fileExists(filePath)) {
    fs.writeFileSync(filePath, '', 'utf8');
    console.error('theme', ' 创建遗漏的 ', fileName, ' 文件');
  }
});

fs.writeFileSync(path.resolve(basepath, 'theme', 'src', 'index.scss'), indexContent);
