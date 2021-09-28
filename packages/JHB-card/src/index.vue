<!-- 
 * @description: 封装Card
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-card id="jhb-card" v-bind="$attrs" v-on="$listeners">
    <slot />
  </el-card>
</template>

<script>
export default {
  name: "JHBCard",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "./card.scss";
</style>
