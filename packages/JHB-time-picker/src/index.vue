<!-- 
 * @description: 封装TimePicker
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div id="jhb-time-picker">
    <span
      class="require-mark"
      v-if="required.visible"
      :style="[...required.labelStyle]"
      ><i :class="required.showRequiredError ? 'show-required-error' : ''">*</i
      >{{ required.label }}</span
    >
    <el-time-picker
      v-bind="$attrs"
      v-on="$listeners"
      v-model="localVal"
      @change="changeval"
    >
      <slot />
    </el-time-picker>
  </div>
</template>

<script>
export default {
  name: "JHBTimePicker",
  props: {
    value: [Date, Array],
    error: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Object,
      default: () => {
        return {
          visible: false,
          showRequiredError: false,
          labelStyle: {
            width: "70px",
          },
          label: "",
        };
      },
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
@import "./timePicker.scss";
</style>
