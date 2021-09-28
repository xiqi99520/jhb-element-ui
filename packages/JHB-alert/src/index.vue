<!-- 
 * @description: 封装Alert
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-alert id="jhb-alert" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-alert>
</template>

<script>
export default {
  name: "JHBAlert",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./alert.scss";
</style>
