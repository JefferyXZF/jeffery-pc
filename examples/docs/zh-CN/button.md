# Button 按钮

常用的操作按钮。

## 基础用法

基础的按钮用法。

:::demo 使用`type`、`plain`、`round`和`circle`属性来定义 Button 的样式。

```html
<jy-row>
  <jy-button>默认按钮</jy-button>
  <jy-button type="primary">主要按钮</jy-button>
  <jy-button type="success">成功按钮</jy-button>
  <jy-button type="info">信息按钮</jy-button>
  <jy-button type="warning">警告按钮</jy-button>
  <jy-button type="danger">危险按钮</jy-button>
</jy-row>

<jy-row>
  <jy-button plain>朴素按钮</jy-button>
  <jy-button type="primary" plain>主要按钮</jy-button>
  <jy-button type="success" plain>成功按钮</jy-button>
  <jy-button type="info" plain>信息按钮</jy-button>
  <jy-button type="warning" plain>警告按钮</jy-button>
  <jy-button type="danger" plain>危险按钮</jy-button>
</jy-row>

<jy-row>
  <jy-button round>圆角按钮</jy-button>
  <jy-button type="primary" round>主要按钮</jy-button>
  <jy-button type="success" round>成功按钮</jy-button>
  <jy-button type="info" round>信息按钮</jy-button>
  <jy-button type="warning" round>警告按钮</jy-button>
  <jy-button type="danger" round>危险按钮</jy-button>
</jy-row>

<jy-row>
  <jy-button icon="el-icon-search" circle></jy-button>
  <jy-button type="primary" icon="el-icon-edit" circle></jy-button>
  <jy-button type="success" icon="el-icon-check" circle></jy-button>
  <jy-button type="info" icon="el-icon-message" circle></jy-button>
  <jy-button type="warning" icon="el-icon-star-off" circle></jy-button>
  <jy-button type="danger" icon="el-icon-delete" circle></jy-button>
</jy-row>
```

:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<jy-row>
  <jy-button disabled>默认按钮</jy-button>
  <jy-button type="primary" disabled>主要按钮</jy-button>
  <jy-button type="success" disabled>成功按钮</jy-button>
  <jy-button type="info" disabled>信息按钮</jy-button>
  <jy-button type="warning" disabled>警告按钮</jy-button>
  <jy-button type="danger" disabled>危险按钮</jy-button>
</jy-row>

<jy-row>
  <jy-button plain disabled>朴素按钮</jy-button>
  <jy-button type="primary" plain disabled>主要按钮</jy-button>
  <jy-button type="success" plain disabled>成功按钮</jy-button>
  <jy-button type="info" plain disabled>信息按钮</jy-button>
  <jy-button type="warning" plain disabled>警告按钮</jy-button>
  <jy-button type="danger" plain disabled>危险按钮</jy-button>
</jy-row>
```

:::

### 文字按钮

没有边框和背景色的按钮。

:::demo

```html
<jy-button type="text">文字按钮</jy-button>
<jy-button type="text" disabled>文字按钮</jy-button>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<jy-button type="primary" icon="el-icon-edit"></jy-button>
<jy-button type="primary" icon="el-icon-share"></jy-button>
<jy-button type="primary" icon="el-icon-delete"></jy-button>
<jy-button type="primary" icon="el-icon-search">搜索</jy-button>
<jy-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></jy-button>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   medium / small / mini            |    —     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
