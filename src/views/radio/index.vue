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
      <p>Radio 01</p>
      <jhb-radio v-model="radio1" label="1" @change="radioChange"
        >已选</jhb-radio
      >
      <jhb-radio v-model="radio1" label="2">未选</jhb-radio>
      <jhb-radio v-model="radio2" label="1" disabled>已选-禁用</jhb-radio>
      <jhb-radio v-model="radio2" label="2" disabled>未选-禁用</jhb-radio>
    </div>
    <div class="button-item" style="padding-left:50px;">
      <jhb-radio v-model="radio5" label="1" border>已选</jhb-radio>
      <jhb-radio v-model="radio5" label="2" border>未选</jhb-radio>
      <jhb-radio v-model="radio4" label="1" disabled border
        >已选-禁用</jhb-radio
      >
      <jhb-radio v-model="radio4" label="2" disabled border
        >未选-禁用</jhb-radio
      >
    </div>
    <div class="button-item" style="padding-left:30px;">
      <jhb-radio-group v-model="radio3" @change="groupChange">
        <jhb-radio-button label="上海"></jhb-radio-button>
        <jhb-radio-button label="北京"></jhb-radio-button>
        <jhb-radio-button label="广州"></jhb-radio-button>
        <jhb-radio-button label="深圳"></jhb-radio-button>
      </jhb-radio-group>
    </div>
  </div>
</template>

<script>
import jhbRadio from "pkgs/JHB-radio/src";
import jhbRadioButton from "pkgs/JHB-radio-button/src";
import jhbRadioGroup from "pkgs/JHB-radio-group/src";
export default {
  components: {
    jhbRadio,
    jhbRadioButton,
    jhbRadioGroup,
  },
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio4: "1",
      radio5: "1",
      radio3: "上海",
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
