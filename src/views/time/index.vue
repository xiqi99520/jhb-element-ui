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
      <p>time-select</p>
      <jhb-time-select
        v-model="value"
        :picker-options="{
          start: '08:30',
          step: '00:15',
          end: '18:30',
        }"
        placeholder="选择时间"
      >
      </jhb-time-select>
      <jhb-time-select
        disabled
        v-model="datetime"
        placeholder="请选择"
      ></jhb-time-select>
    </div>
    <div class="button-item">
      <p>time-picker</p>
      <jhb-time-picker
        v-model="value1"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00',
        }"
        placeholder="任意时间点"
      >
      </jhb-time-picker>
      <jhb-time-picker
        disabled
        v-model="value1"
        :picker-options="{
          selectableRange: '18:30:00 - 20:30:00',
        }"
        placeholder="任意时间点"
      >
      </jhb-time-picker>
    </div>
    <div class="button-item">
      <p>time-picker-range</p>
      <jhb-time-picker
        is-range
        v-model="value3"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      >
      </jhb-time-picker>
      <jhb-time-picker
        is-range
        disabled
        v-model="value3"
        range-separator="至"
        start-placeholder="开始时间"
        end-placeholder="结束时间"
        placeholder="选择时间范围"
      >
      </jhb-time-picker>
    </div>
    <div class="button-item">
      <p>date-pciker</p>
      <jhb-date-picker
        v-model="datetime"
        @change="changeblur"
        type="date"
        placeholder="选择日期"
      >
      </jhb-date-picker>
      <jhb-date-picker
        disabled
        v-model="value4"
        type="date"
        placeholder="选择日期"
      >
      </jhb-date-picker>
    </div>
    <div class="button-item">
      <p>date-pcik-range</p>
      <jhb-date-picker
        v-model="value5"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </jhb-date-picker>
      <jhb-date-picker
        v-model="value6"
        disabled
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
      >
      </jhb-date-picker>
    </div>
  </div>
</template>

<script>
import jhbTimeSelect from "pkgs/JHB-time-select/src";
import jhbTimePicker from "pkgs/JHB-time-picker/src";
import jhbDatePicker from "pkgs/JHB-date-picker/src";
export default {
  components: {
    jhbTimeSelect,
    jhbTimePicker,
    jhbDatePicker,
  },
  data() {
    return {
      datetime: "",
      form: {
        datetime: "",
      },
      value: "",
      value1: new Date(2016, 9, 10, 18, 40),
      value3: [new Date(2016, 9, 10, 8, 40), new Date(2016, 9, 10, 9, 40)],
      value4: "",
      value5: "",
      value6: "",
      required: {
        visible: true,
        showRequiredError: true,
        labelStyle: {
          width: "70px",
        },
        label: "姓名姓名",
      },
    };
  },
  methods: {
    changeblur(e) {
      console.log("form.datetime========", this.datetime);
      console.log("changeblur========", e);
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
