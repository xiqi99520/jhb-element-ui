<!-- 
 * @description: 
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-19 21:55:55 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="page-container">
    <div class="button-item">
      <p>checkbox 01</p>
      <jhb-checkbox v-model="radio1">已选</jhb-checkbox>
      <jhb-checkbox v-model="radio2">未选</jhb-checkbox>
      <jhb-checkbox v-model="radio1" disabled>已选--禁止</jhb-checkbox>
      <jhb-checkbox v-model="radio2" disabled>未选--禁止</jhb-checkbox>
      <jhb-checkbox v-model="radio1" :indeterminate="indeterminate"
        >全选</jhb-checkbox
      >
    </div>
    <div class="button-item">
      <p>checkbox 02</p>
      <jhb-checkbox v-model="radio1" border>已选</jhb-checkbox>
      <jhb-checkbox v-model="radio2" border>未选</jhb-checkbox>
      <jhb-checkbox v-model="radio1" disabled border>已选--禁止</jhb-checkbox>
      <jhb-checkbox v-model="radio2" disabled border>未选--禁止</jhb-checkbox>
    </div>
    <div class="button-item">
      <p>checkbox 03</p>
      <jhb-checkbox-group v-model="checkboxGroup1" size="small">
        <jhb-checkbox-button v-for="city in cities" :label="city" :key="city">{{
          city
        }}</jhb-checkbox-button>
      </jhb-checkbox-group>
    </div>
  </div>
</template>

<script>
import jhbCheckbox from "pkgs/JHB-checkbox/src";
import jhbCheckboxButton from "pkgs/JHB-checkbox-button/src";
import jhbCheckboxGroup from "pkgs/JHB-checkbox-group/src";

const cityOptions = ["周一", "周二", "周三", "周四", "周五"];
export default {
  components: {
    jhbCheckbox,
    jhbCheckboxButton,
    jhbCheckboxGroup,
  },
  data() {
    return {
      radio1: true,
      radio2: false,
      indeterminate: true,
      checkboxGroup1: ["周一"],
      cities: cityOptions,
    };
  },
  methods: {
    radioChange(e) {
      console.log("e========", e);
    },
    groupChange(e) {
      console.log("e2======", e);
    },
  },
};
</script>

<style lang="css" scoped>
.page-container {
  display: flex;
  flex-direction: column;
}
.page-container .button-item {
  margin: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
