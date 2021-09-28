<!-- 
 * @description: 
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-19 21:55:55 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="page-container">
    <div class="button-item">
      <span>Primary</span>
      <jhb-link>主要链接</jhb-link>
      <jhb-link icon="el-icon-edit">主要链接</jhb-link>
      <jhb-link rightIcon="el-icon-edit">主要链接</jhb-link>
    </div>
    <div class="button-item">
      <span>Danger</span>
      <jhb-link type="danger">危险链接</jhb-link>
      <jhb-link type="danger" icon="el-icon-edit">危险链接</jhb-link>
      <jhb-link type="danger" rightIcon="el-icon-edit">危险链接</jhb-link>
    </div>
    <div class="button-item">
      <span>Success</span>
      <jhb-link type="success">成功链接</jhb-link>
      <jhb-link type="success" icon="el-icon-edit">成功链接</jhb-link>
      <jhb-link type="success" rightIcon="el-icon-edit">成功链接</jhb-link>
    </div>
  </div>
</template>

<script>
import jhbLink from "pkgs/JHB-link/src";
export default {
  components: {
    jhbLink,
  },
  data() {
    return {};
  },
};
</script>

<style lang="css" scoped>
.page-container {
  display: flex;
  flex-direction: column;
}
.page-container .button-item {
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
