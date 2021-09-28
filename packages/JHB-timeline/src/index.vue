<!-- 
 * @description: 封装Timeline
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-timeline id="jhb-timeline" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-timeline>
</template>

<script>
export default {
  name: "JHBTimeline",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./timeline.scss";
</style>
