<!-- 
 * @description: 封装Badge
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-badge
    id="jhb-badge"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="localVal"
    @change="changeval"
  >
    <slot />
  </el-badge>
</template>

<script>
export default {
  name: "JHBBadge",
  model: {
    prop: "value",
    event: "modelVal", // 自定义方法，用来更新 model
  },
  props: {
    value: [Number, String],
  },
  data() {
    return {
      localVal: this.value,
    };
  },
  watch: {
    value(val) {
      this.localVal = val;
    },
  },
  methods: {
    changeval(val, lr) {
      this.$emit("modelVal", val);
      this.$emit("change", val, lr);
    },
  },
};
</script>

<style lang="scss">
@import "./badge.scss";
</style>
