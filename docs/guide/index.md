---
title: '快速上手'
order: 1
nav:
  title: '指南'
  path: '/guide'
---

# 快速上手

# 安装

```js
  $ npm install --save @anon/design-mobile
  # or
  $ yarn add @anon/design-mobile
```

# 引入

直接引入组件即可，antd-mobile 会自动为你加载 css 样式文件：

```js
import { Button } from '@anon/design-mobile';
```

# 兼容性

我们建议在项目中增加下面的 babel 配置，这样可以达到最大兼容性，为 iOS Safari >= 10 和 Chrome >= 49：

```js
  {
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": {
            "chrome": "49",
            "ios": "10"
          }
        }
      ]
    ]
  }
```

对于 TypeScript，我们兼容的版本是 >= 3.8。 对于 React，我们兼容的版本是 ^16.8.0 和 ^17.0.0。
