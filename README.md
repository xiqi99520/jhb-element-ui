# jhb-element-ui

#### 介绍

本项目基于 Vue，对 Element-UI 常用组件进行二次封装，提供后台管理系统中常用组件的开箱即用。部分组件在相应文件夹下提供了配置文件，稍微改动配置或部分代码即可实现常见业务需求。本项目只提供组件的封装使用，不提供后台管理系统模板，请自行搭建或搭配其它后台管理系统模板

#### 使用文档

[jhb-element-ui使用文档](http://jhb-element-ui.top)

#### 软件架构

1. Vue.js
2. element-ui
3. axios

#### 安装教程

NPM:

1.  ```
    npm install jhb-element-ui
    ```
2.  main.js 引入 jhb-element-ui:

    ```
        import JHBElement from "jhb-element-ui";
        import ElementUI from 'element-ui';
        import "element-ui/lib/theme-chalk/index.css";
        import "jhb-element-ui/lib/jhb-element-ui.css";

        Vue.use(ElementUI);
        Vue.use(JHBElement);

    ```

3.  引用组件。

克隆项目:

1.  下载或克隆本项目到本地；
2.  将根目录下 packages 文件夹内文件及其它依赖文件拷贝到开发项目中；
3.  配置组件默认参数，或根据自身需求修改源码；
4.  引用组件。

#### 使用说明

1.  ##### JHBButton

    ```
    <JHB-button base-style="Primary" right-icon="el-icon-dianzan">常规</JHB-button>
    ```
