<!-- 
 * @description: 封装Pagination
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-pagination id="jhb-pagination" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-pagination>
</template>

<script>
export default {
  name: "JHBPagination",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./pagination.scss";
</style>
