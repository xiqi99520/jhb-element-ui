<!-- 
 * @description: 封装Result
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-result id="jhb-result" v-bind="$attrs" v-on="$listeners"> </el-result>
</template>

<script>
export default {
  name: "JHBResult",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./result.scss";
</style>
