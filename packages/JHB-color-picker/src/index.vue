<!-- 
 * @description: 封装ColorPicker
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-color-picker
    id="jhb-color-picker"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="localVal"
    @change="changeval"
  >
    <slot />
  </el-color-picker>
</template>

<script>
export default {
  name: "JHBColorPicker",
  model: {
    prop: "value",
    event: "modelVal", // 自定义方法，用来更新 model
  },
  props: {
    value: [String],
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
@import "./colorPicker.scss";
</style>
