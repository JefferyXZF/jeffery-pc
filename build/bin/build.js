// 按照序列执行脚本命令，完成代码打包

const shell = require('shelljs');
const signale = require('signale');

signale.config({
  displayTimestamp: true
});

const tasks = [
  'clean:lib',
  'build:file',
  'lint',
  'build:component',
  'build:utils',
  'build:theme'
];

tasks.forEach(task => {
  const command = `npm run ${task}`;
  signale.start(command);
  signale.pending(command);
  shell.exec(`${command} --silent`);
  signale.success(command);
});
