---
title: '常见问题'
order: 3
---

# FAQ

### 使用该组件条件？

当前组件库基于 antd-mobilev5,由于 antd-mobilev5 官网只支持^16.8.0 和 ^17.0.0，所以需要本地框架升级 react 相关版本，且升级 webpack 至 4+。

### 支持小程序吗？

@anon/design-mobile 本身只支持 React 技术栈。微信和其他平台的小程序暂时还没有对应的孪生组件库，欢迎社区同学开发。

### 支持 React Native 吗？

不支持。

### 我应该现在开始使用 @anon/design-mobile？

对于新项目，我们推荐直接使用 当前组件库。

对于旧项目，我们建议采用渐进式的迁移方案，考虑先升级框架，再升级组件。

### 如何避免 300ms 的点击延迟？

在 head 中增加以下内容：

```javascript
<meta name="viewport" content="width=device-width">
```

或者增加以下全局样式：

```javascript
html {
  touch-action: manipulation;
}
```

具体请参考这两篇文章：

\*[300ms tap delay, gone away](https://developer.chrome.com/blog/300ms-tap-delay-gone-away/)

\*[More Responsive Tapping on iOS](https://webkit.org/blog/5610/more-responsive-tapping-on-ios/)

### 在我的项目中，@anon/design-mobile 的组件手势操作无法生效，该怎么解决？

请检查项目中是不是引入了 fastclick，如果有的话，尝试移除掉再试一下。

### 关于 React Hot Loader

React Hot Loader 对项目有比较大的侵入性， 而 @anon/design-mobile 中的很多组件（例如 Swiper Tabs Form TabBar SideBar Dropdown Space Steps）并不能和它兼容，而且 React Hot Loader 本身也在 README 中写了推荐大家不要再使用，所以请考虑移除 React Hot Loader 或将其替换为 React Fast Refresh。
