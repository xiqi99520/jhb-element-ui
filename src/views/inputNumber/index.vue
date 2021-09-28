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
      <p>InputNumber 01</p>
      <jhb-input-number
        v-model="num1"
        size="small"
        controls-position="right"
        @change="handleChange"
        ontrolsIconType="updown"
        :min="1"
        :max="10"
        label="描述文字"
      ></jhb-input-number>
      <jhb-input-number
        v-model="num1"
        size="small"
        error
        controls-position="right"
        ontrolsIconType="updown"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></jhb-input-number>
      <jhb-input-number
        v-model="num1"
        size="small"
        disabled
        controls-position="right"
        ontrolsIconType="updown"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></jhb-input-number>
    </div>
    <div class="button-item">
      <p>InputNumber 02</p>
      <jhb-input-number
        v-model="num2"
        size="small"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
        ontrolsIconType="updown"
      ></jhb-input-number>
      <jhb-input-number
        v-model="num2"
        size="small"
        error
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
        ontrolsIconType="updown"
      ></jhb-input-number>
      <jhb-input-number
        v-model="num2"
        size="small"
        disabled
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
        ontrolsIconType="updown"
      ></jhb-input-number>
    </div>
    <div class="button-item">
      <p>InputNumber 03</p>
      <jhb-input-number
        v-model="num3"
        size="small"
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></jhb-input-number>
      <jhb-input-number
        v-model="num3"
        size="small"
        error
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></jhb-input-number>
      <jhb-input-number
        v-model="num3"
        size="small"
        disabled
        @change="handleChange"
        :min="1"
        :max="10"
        label="描述文字"
      ></jhb-input-number>
    </div>
  </div>
</template>

<script>
import jhbInputNumber from "pkgs/JHB-input-number/src";
export default {
  components: {
    jhbInputNumber,
  },
  data() {
    return {
      num1: 1,
      num2: 1,
      num3: 1,
    };
  },
  methods: {
    handleChange(e) {
      console.log("e========", e);
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
