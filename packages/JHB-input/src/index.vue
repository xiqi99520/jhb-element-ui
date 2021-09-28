<!-- 
 * @description: 封装input
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-08-06 13:51:12 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div id="jhb-input-root">
    <div id="jhb-input-container" :class="error ? 'error' : ''">
      <span
        class="require-mark"
        v-if="required.visible"
        :style="[...required.labelStyle]"
        ><i :class="required.showRequiredError ? 'show-required-error' : ''"
          >*</i
        >{{ required.label }}</span
      >
      <div class="require-main">
        <el-input
          v-bind="$attrs"
          v-on="$listeners"
          v-model="localVal"
          @input="changeval"
        >
          <slot />
        </el-input>
        <span class="tip">{{ tipTitle }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBInput",
  model: {
    prop: "value",
    event: "modelVal", // 自定义方法，用来更新 model
  },
  props: {
    value: [String, Number],
    required: {
      type: Object,
      default: () => {
        return {
          visible: false,
          showRequiredError: false,
          labelStyle: {
            width: "70px",
          },
          label: "输入标签",
        };
      },
    },
    error: {
      type: Boolean,
      default: false,
    },
    slotname: {
      type: String,
      default: "",
    },
    tipTitle: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      localVal: this.value,
    };
  },
  methods: {
    changeval(val, lr) {
      this.$emit("modelVal", val);
      this.$emit("input", val, lr);
    },
  },
  watch: {
    value(val) {
      this.localVal = val;
    },
  },
};
</script>

<style lang="scss">
@import "./input.scss";
</style>
