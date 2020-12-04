## 贡献代码

任何开发人员参与 Jeffery-UI 组件库开发时，必须按照此规范贡献代码，未按照本规范提交的代码一律不予合并，因此，请熟读本规范并严格按照规范执行

**在开发组件库过程中，如对规范有异议请随时提出，并及时更新文档**

### 目录结构

```text
Jeffery-UI
├─ build                                        # 构建脚本
    ├─ bin                                      # 放置node脚本
        ├─ build.js                             # 组件库打包命令入口，用于集合npm脚本命令
        ├─ checkscss.js                         # 检查是否有组件的scss样式文件遗漏
        ├─ entry.js                             # 组件库入口文件自动生成脚本
        ├─ i18n.js                              # 文档库依据tpl模板文件自动生成国际化vue文件脚本
        ├─ iconInit.js                          # 文档库依据icon.scss文件生成可使用的icon名集合数组用于展示
        ├─ newcomponent.js                      # 自动生成新组件及相关配置文件的脚本
        └─ template                             # 监测文档库template目录下文件变化自动执行国际化脚本
    ├─ config.js                                # webapck用到的基本配置
    ├─ salad.config.json                        # postcss用到的基本配置
    ├─ strip-tags.js                            # 标签过滤
    ├─ webpack.common.conf.js                   # 组件库主入口webapck打包
    ├─ webpack.component.conf.js                # 组件库组件webapck打包
    └─ webpack.doc.conf.js                      # 文档库webapck打包及开发环境构建
├─ examples                                     # 文档库
    ├─ assets                                   # 文档库静态资源
    ├─ components                               # 文档库组件
    ├─ docs                                     # 文档库页面markdown文件
    ├─ i18n                                     # 文档库国际化文件
    ├─ pages                                    # 文档库页面
    ├─ app.vue                                  # 文档库主页面
    ├─ favicon.ico                              # 文档库页面图标
    ├─ icon.json                                # 自动生成的组件库图标名数组，用于渲染展示组件库包含图标
    ├─ index.js                                 # 文档库主入口
    ├─ index.tpl                                # 文档库主页面渲染模板
    ├─ nav.config.json                          # 用于文档库左侧导航国际化及渲染
    └─ route.config.js                          # 用于生成文档库路由
├─ lib                                          # 组件库打包文件（用于部署）
├─ lib-doc                                      # 文档库打包文件（用于部署）
├─ packages                                     # 组件库核心文件
└─ src                                          # 组件库入口及资源文件
    ├─ locale                                   # 组件国际化
    ├─ mixins                                   # 组件mixins
    ├─ transitions                              # 组件动画
    ├─ utils                                    # 组件工具集
    └─ index.js                                 # 组件主入口（自动生成，在build/bin/entry.js下编辑模板）

```

### 命令脚本

Jeffery-UI 的脚本命令除了在 package.json 中的 scripts 声明外，还使用了 Makefile 记录脚本命令，因此有以下几种命令使用方式：

#### 使用 npm

直接使用 package.json 中的脚本命令，各命令介绍如下：

```bash
bootstrap : 安装依赖（首推 yarn，默认强制 yarn，如使用 npm，yarn.lock将不会锁定依赖版本库）
dev : 运行文档库开发环境
build : 运行组件库生产环境打包，生成 lib 包
deploy : 运行组件库生产环境打包并提交到 Git 版本库
deploy:doc : 运行文单库生产环境打包并发布部署到 Svn
build:file : 依赖文件生成
build:component : 组件库组件生成环境构建打包
build:utils : 组件库工具集构建打包
build:theme : 组件库主体构建打包
build:doc : 文档库生产环境构建打包
i18n : 文档库开发环境自动国际化
clean:lib : 移除 lib 包
clean:lib-doc : 移除 lib-doc 包
lint : 打包构建前进行 eslint 检查
new:component : 构建组件库新组件及其相关文件
```

#### 使用 make

Jeffery-UI 开发过程中强烈推荐使用 make 命令，结合根目录下的 Makefile 文件，可以进行脚本命令的记录、组合和提示等功能。

通过在终端中运行 `make` 命令，终端将会提示可以执行的命令脚本

```bash
make 命令使用说明
make install                         ---  安装依赖
make new <component-name> [中文名]    ---  创建新组件 package. 例如 'make new button 按钮'
make dev                             ---  开发模式
make build                           ---  编译项目，生成目标文件
make deploy                          ---  部署 组件库
make deploy-doc                      ---  部署 文档
```

新建组件库组件时推荐使用 make 命令，可以依据组件名字自动生成相关的国际化文件，但此处新增组件时，examples下 `nav.config.json` 文件默认将其插入最后一个组件后面，因此若新增组件类型和最后一个组件的类型不一致或者需要调整文档渲染时组件文档的展示位置时，需要手动调整该文件的结构顺序


### 依赖安装

Jeffery-UI 开发过程中要求使用 yarn 进行脚本的安装。以下为 yarn 的一些基本操作介绍

**初始化一个项目**

```bash
yarn init
```

**添加依赖包**

```bash
yarn add [package]
yarn add [package]@[version]
yarn add [package]@[tag]
```

此种添加方式默认添加到 `dependencies` 中，`dependencies` 是项目运行时所需要的依赖。由于添加到该目录中的依赖会让 Jeffery-UI 的使用者在安装 Jeffery-UI 时去安装这些依赖，因此一定要分清楚依赖是否需要用户安装

**将依赖项添加到不同依赖项类别中**

分别添加到 `devDependencies`、`peerDependencies` 和 `optionalDependencies` 类别中：

```bash
yarn add [package] --dev
yarn add [package] --peer
yarn add [package] --optional
```

`devDependencies`是开发时依赖，在构建运行之后不需要的依赖，默认情况下组件开发过程中均添加到该类别

`peerDependencies`是同伴依赖，是一种特殊的依赖，在发布包的时候需要。有这种依赖意味着安装包的用户也需要和包同样的依赖

`optionalDependencies`是可选依赖，意味依赖是可选的。这种依赖即便安装失败，Yarn也会认为整个依赖安装过程是成功的。这种类型适用于那些即便没有成功安装可选依赖，也有后备方案的情况（比如 Watchman）。

**升级依赖包**

```bash
yarn upgrade [package]
yarn upgrade [package]@[version]
yarn upgrade [package]@[tag]
```

**移除依赖包**

```bash
yarn remove [package]
```

**安装项目的全部依赖**

```bash
yarn
```

或

```bash
yarn install
```

### 文档开发

Jeffery-UI 文档由 examples/docs 下的 markdown 文件生成，根据目前的国际化只支持 en-US 及 zh-CN，因此在对应目录下放置对应的文档即可，文档命名必须和组件命名相同。

如你使用类似 `make new button 按钮` 命令来生成新组件，在这两个目录下会自动生成对应的组件文档。

在 markdown 文件内部，Jeffery-UI 支持 Vue 组件的编译，因此你可以和平时编写 Vue 单文件组件一样，在文档内部声明 `<template></template>`、`<script></script>`、`<style></style>`，当然这里的 `<style></style>` 是支持 SCSS 的，更重要的是，你可以使用被全局引入的位于 packages/theme/src 下的所有声明变量、mixin、function等，和你开发组件的时候几乎一样。

在 markdown 文件内，有一个很重要标识(`:::demo <代码片段> :::`)，Jeffery-UI 的文档系统能够自动识别，除了示例代码展示，还能生成对应的示例，这也是我们在组件开发过程中，可以直接查看效果的关键点。示例如下

:::demo
```html
<qw-button type="primary">搜索</qw-button>
```
:::

这段示例代码会被文档系统内声明的全局组件 demo-block 包裹，示例效果也是由这个组件提供的，该组件位于 examples/components 下

### 组件开发

组件目录在根目录的 packages 目录下，如 button 组件由 src 目录与 index.js组成，src内存放组件单文件组件，index.js 暴露出组件的安装引入接口，组件的样式文件统一放置在 theme 文件夹下的 src 目录下。

#### 入口文件index.js

以 button 组件为例

```javascript
import QwButton from './src/button';

QwButton.install = function(Vue) {
  Vue.component(QwButton.name, QwButton);
};

export default QwButton;
```

此处将 QwButton 注册成一个 Vue 组件，外部引入时可以通过 Vue.use() 来安装该插件，该插件的功能就是全局注册 QwButton 组件

#### src下单文件组件

src 目录下放置单文件组件，以下为开发单文件组件时需要注意的事项

1. name: 组件的 name 一定要声明，命名格式为双驼峰形式的 QwXxxx，组件 name 可以指引 build/bin/entry 脚本自动生成 src/index.js 文件，提供组件的全局引入与接口暴露

2. props: 组件的 props 一律采用对象的形式验证，必须声明类型、默认值或是否必须，对于对象或者数组或部分情况下，使用函数来返回默认值

```javascript
 props: {
    // 检测类型，不建议使用这种方式
    height: Number,
    // 检测类型 + 其他验证，建议使用
    age: {
      type: Number,
      default: 0,
      required: true,
      validator: function (value) {
        return value >= 0
      }
    },
    // 由函数返回默认值，建议使用
    value: {
      type: Array,
      default() {
        return [];
      }
  }
```

#### 组件样式主题

组件的样式在 packages/theme/src 文件夹下编辑，build/bin/checkscss.js 脚本可以对比 components.json 内声明的组件是否在这个目录下有对应的 scss 文件，若没有，则会自动生成一个对应的样式文件

Jeffery-UI 的样式管理由 sass 来完成，因此你需要对 sass 的一些语法要特别熟悉，如变量声明、 @mixins 、 @function 还有一些常用的内建函数等知识，详细学习请阅读 [SASS参考手册](https://www.css88.com/doc/sass/#features) 及 [SASS内建函数用法一览](https://jimyuan.github.io/blog/2017/06/07/sass-preset-functions-learning.html)

下面介绍一些 Jeffery-UI 中常用的scss模块及用法

**bem**

bem 在 theme/src/mixins/mixins 内被声明，该 mixin 提供了根据输入的组件名作为参数，自动生成组件根类作用域，比如

```scss
@include bem(button){}

// 将会编译为

.qw-button{}
```

**mix**

mix 在 theme/src/mixins/mixins 内被声明，该 mixin 提供了根据传入的一组修饰符作为参数，自动生成基于父集的类作用域空间，主要用于组件的类别修饰符，比如

```scss
@include mix(primary){}

// 将会编译为

&--primary{}
```

& 代表父级，& 会编译为父级，这个类也会被置于根目录，而不是放置在父级下。

**when**

when 在 theme/src/mixins/mixins 内被声明，该 mixin 提供基于父级的状态类作用域空间，主要用于组件的状态修饰符，比如

```scss
@include when(disabled){}

// 将会编译为

&.is-disabled{}
```

这里的 & 代表父级，也会被转化为父级类，存在于根目录中