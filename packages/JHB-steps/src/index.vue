<!-- 
 * @description: 封装Steps
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-steps id="jhb-steps" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-steps>
</template>

<script>
export default {
  name: "JHBSteps",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./steps.scss";
</style>
