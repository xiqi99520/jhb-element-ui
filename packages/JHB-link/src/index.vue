<!-- 
 * @description: 封装自定义链接
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-05 19:14:55 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-link id="jhb-link" v-bind="$attrs" v-on="$listeners">
    <slot />
    <i :class="rightIcon" class="el-icon--right"></i>
  </el-link>
</template>

<script>
export default {
  name: "JHBLink",
  props: {
    //按钮类型
    rightIcon: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
@import "./link.scss";
</style>
