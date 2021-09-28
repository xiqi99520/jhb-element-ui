<!-- 
 * @description: 封装进度条
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-05 19:14:55 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-progress id="jhb-progress" v-bind="$attrs" v-on="$listeners">
  </el-progress>
</template>

<script>
export default {
  name: "JHBProgress",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./progress.scss";
</style>
