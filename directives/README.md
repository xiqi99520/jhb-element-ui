# 快速上手

## Introduce
?> directives, 一个实用的Vue自定义指令库

### 不局限使用vue内置的指令，要勇于尝试注册最适合自己的定制化全局指令！

!> Vue 自定义指令有全局注册和局部注册两种方式。先来看看注册全局指令的方式，通过 Vue.directive( id, [definition] ) 方式注册全局指令。然后在入口文件中进行 Vue.use() 调用

> 批量注册指令 - directives/index.js
```js
    import copy from './copy'
    import longpress from './longpress'
    // 自定义指令
    const directives = {
        copy,
        longpress,
    }
    
    export default {
        install(Vue) {
            Object.keys(directives).forEach((key) => {
                Vue.directive(key, directives[key])
            })
        },
    }
```
> main.js引入
```js
    import Vue from 'vue'
    import Directives from './JS/directives'
    Vue.use(Directives)
```

- #### 指令定义函数提供了几个钩子函数（可选）：
    - bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作

    - inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）

    - update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值

    - componentUpdated: 被绑定元素所在模板完成一次更新周期时调用
 
    - unbind: 只调用一次， 指令与元素解绑时调用