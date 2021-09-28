<!-- 
 * @description: 封装InputNumber
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <el-input-number
    id="jhb-inputNumber"
    :class="[error ? 'error' : '', ontrolsIconType]"
    v-bind="$attrs"
    v-on="$listeners"
    v-model="localVal"
    @change="changeval"
  >
  </el-input-number>
</template>

<script>
export default {
  name: "JHBInputNumber",
  props: {
    value: [Number],
    error: {
      type: Boolean,
      default: false,
    },
    ontrolsIconType: {
      type: String,
      default: "",
    },
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
    changeval(val, lr) {
      this.$emit("modelVal", val);
      this.$emit("change", val, lr);
    },
  },
};
</script>

<style lang="scss">
@import "./inputNumber.scss";
</style>
