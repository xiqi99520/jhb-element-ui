<!-- 
 * @description: 封装Upload
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-upload id="jhb-upload" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-upload>
</template>

<script>
export default {
  name: "JHBupload",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./upload.scss";
</style>
