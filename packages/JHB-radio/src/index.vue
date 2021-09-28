<!-- 
 * @description: 封装radio
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-radio
    id="jhb-radio"
    v-bind="$props"
    v-model="localVal"
    @change="changeVal"
  >
    <slot />
  </el-radio>
</template>

<script>
import { Radio } from "element-ui";
export default {
  name: "JHBRadio",
  props: {
    ...Radio.props,
    value: [String, Boolean, Number],
  },
  model: {
    prop: "value",
    event: "modelVal", // 自定义方法，用来更新 model
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
    changeVal(val, lr) {
      this.$emit("modelVal", val); // 更新 model
      this.$emit("change", val, lr); // 事件传值
    },
  },
};
</script>

<style lang="scss">
@import "./radio.scss";
</style>
