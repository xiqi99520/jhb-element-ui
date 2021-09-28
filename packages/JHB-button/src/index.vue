<!-- 
 * @description: 按钮组件
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-05 08:42:49 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-button
    id="jhb-button"
    :class="[baseStyle, size]"
    :plain="getPlain"
    v-bind="$attrs"
    v-on="$listeners"
    ><slot /><i :class="rightIcon" class="el-icon--right"></i
  ></el-button>
</template>

<script>
import { ButtonBaseStyle, ButtonBaseStyleConstant } from "./constant";
export default {
  name: "JHBButton",
  model: {
    prop: "value",
    event: "modelVal", // 自定义方法，用来更新 model
  },
  props: {
    //按钮基本风格
    baseStyle: {
      type: String,
      default: ButtonBaseStyleConstant.Primary,
    },
    rightIcon: {
      type: String,
      default: "",
    },
    size: {
      type: String,
      default: "",
    },
  },
  computed: {
    //根据传递的基础风格 设置plain
    getPlain() {
      return this.plain || ButtonBaseStyle[this.baseStyle].plain;
    },
  },
};
</script>

<style lang="scss">
@import "./button.scss";
</style>
