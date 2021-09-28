<!-- 
 * @description: 封装Tabs
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-tabs id="jhb-tabs" :class="[size]" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-tabs>
</template>

<script>
export default {
  name: "JHBTabs",
  props: {
    size: {
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./tabs.scss";
</style>
