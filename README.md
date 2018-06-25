# vue-dotLoading-template

Demo：

![](http://ww1.sinaimg.cn/large/ec07bbd2gy1fsk76pb0c1j204403ja9u.jpg)



## Options

| Prop    | Type   | Required | Default | 描述          |
| ------- | ------ | -------- | ------- | ------------- |
| size    | String | false    | 20px    | 圆点的直径    |
| color   | String | false    | coral   | 圆点颜色      |
| numbers | Number | false    | 14      | 圆点个数      |
| radius  | Number | false    | 50      | loading的半径 |



## Example 

```javascript
<template>
  <div id="app">
    <load size="14px" :radius= '100' > </load>
  </div>
</template>
<script>
import load from '@/components/dotLoading'
export default {
  name: 'App',
  components: {load},
  methods: {
  },
  mounted () {
  }
}
</script>
```

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
