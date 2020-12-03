# jeffery-ui 开发规范

<details>

<summary>Git Commit 提交规范</summary>

每次提交commit message 都必须按照以下格式提交，且不得超过72个字符（避免自动换行影响美观）

```text
<type>(<scope>): <subject>
```

`type` 用来说明 commit 的类别，只允许使用下面7种标识

```text
- feat：新功能（feature）
- fix：修补bug
- docs：文档（documentation）
- style： 格式（不影响代码运行的变动）
- refactor：重构（即不是新增功能，也不是修改bug的代码变动）
- test：增加测试
- chore：构建过程或辅助工具的变动
```

如果 `type` 是 `feat` 或 `fix`，则该 commit 必须要在记录 changelog（更新日志）中，其他情况由你决定

`scope` 用于说明 commit 影响的范围，比如数据层、控制层、视图层等等，一般情况下可以不写，如需要可以注明

`subject` 是 commit 目的的简短描述，不得超过50个字符

```text
- 尽量使用英文书写，不会的单词先翻译
- 以动词开头，使用第一人称现在时，比如change，而不是changed或changes
- 第一个字母小写
- 结尾不加句号（.）
```
</details>

<details>

<summary>依赖库 安装规范</summary>

为了维护 `yarn.lock` 文件进行版本锁定，所以**新增依赖**只能使用 `yarn` 进行安装，若没有该工具，使用如下命令安装

```shell
npm install -g yarn
```

**安装依赖**也尽量使用 `yarn`，也可以使用 `npm` 或 `cnpm`
</details>