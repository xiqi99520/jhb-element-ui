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
      <p>Input 01</p>
      <jhb-input
        type="text"
        v-model="obj.value1"
        maxlength="20"
        :tipTitle="tipTitle"
        show-word-limit
        error
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        type="text"
        v-model="inputvalue1"
        maxlength="20"
        :tipTitle="tipTitle"
        show-word-limit
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        type="text"
        v-model="inputvalue1"
        :tipTitle="tipTitle"
        disabled
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
    </div>
    <div class="button-item">
      <p>Textarea 02</p>
      <jhb-input
        type="textarea"
        v-model="inputvalue1"
        maxlength="20"
        :required="required"
        :tipTitle="tipTitle"
        show-word-limit
        error
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        type="textarea"
        v-model="inputvalue1"
        maxlength="20"
        :tipTitle="tipTitle"
        show-word-limit
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        type="textarea"
        v-model="inputvalue1"
        :tipTitle="tipTitle"
        disabled
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
    </div>
    <div class="button-item">
      <p>Password 03</p>
      <jhb-input
        show-password
        v-model="inputvalue1"
        maxlength="20"
        :required="required"
        :tipTitle="tipTitle"
        clearable
        show-word-limit
        error
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        show-password
        clearable
        v-model="inputvalue1"
        maxlength="20"
        :tipTitle="tipTitle"
        show-word-limit
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        show-password
        v-model="inputvalue1"
        :tipTitle="tipTitle"
        disabled
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
    </div>
    <div class="button-item">
      <p>Password 04</p>
      <jhb-input
        show-password
        v-model="inputvalue1"
        maxlength="20"
        prefix-icon="el-icon-search"
        :required="required"
        :tipTitle="tipTitle"
        clearable
        show-word-limit
        error
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        show-password
        clearable
        prefix-icon="el-icon-search"
        v-model="inputvalue1"
        maxlength="20"
        :tipTitle="tipTitle"
        show-word-limit
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
      <jhb-input
        show-password
        prefix-icon="el-icon-search"
        v-model="inputvalue1"
        :tipTitle="tipTitle"
        disabled
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-input>
    </div>
  </div>
</template>

<script>
import jhbInput from "pkgs/JHB-input/src";
export default {
  components: {
    jhbInput,
  },
  data() {
    return {
      obj: {
        value1: "nihao",
      },
      inputvalue1: "1",
      inputvalue2: "2",
      radio3: "上海",
      required: {
        visible: true,
        showRequiredError: true,
        labelStyle: {
          width: "30px",
        },
        label: "232",
      },
      tipTitle: "这是一段用来提醒的文字",
    };
  },
  methods: {
    handleInput1(e) {
      console.log("handleInput1========", e);
    },
    handleInput2(e) {
      console.log("handleInput2======", e);
    },
    handlefocus1(e) {
      console.log("handlefocus1========", e);
    },
    handlefocus2(e) {
      console.log("handlefocus2========", e);
    },
    handleChange1(e) {
      console.log("handleChange1========", e);
    },
    handleChange2(e) {
      console.log("handleChange2========", e);
    },
    handleblur1(e) {
      console.log("handleblur1========", e);
    },
    handleblur2(e) {
      console.log("handleblur2========", e);
    },
    handleClear1(e) {
      console.log("handleClear1========", e);
    },
    handleClear2(e) {
      console.log("handleClear2========", e);
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
