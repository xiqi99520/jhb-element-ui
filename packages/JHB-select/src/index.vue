<!-- 
 * @description: 封装select
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div id="jhb-select-root">
    <span
      class="require-mark"
      v-if="required.visible"
      :style="[...required.labelStyle]"
      ><i :class="required.showRequiredError ? 'show-required-error' : ''">*</i
      >{{ required.label }}</span
    >
    <div id="jhb-select-container" :class="error ? 'error' : ''">
      <el-select
        v-bind="$attrs"
        v-on="$listeners"
        v-model="localVal"
        @change="changeval"
      >
        <slot />
      </el-select>
      <p class="tip">{{ tipTitle }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBSelect",
  props: {
    value: [String, Number, Boolean],
    error: {
      type: Boolean,
      default: false,
    },
    tipTitle: {
      type: String,
      default: "",
    },
    required: {
      type: Object,
      default: () => {
        return {
          visible: false,
          showRequiredError: false,
          labelStyle: {
            width: "",
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
@import "./select.scss";
</style>
