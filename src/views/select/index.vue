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
      <p>Select 01</p>
      <jhb-select placeholder="请选择" v-model="value">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
          :disabled="item.disabled"
        >
        </el-option>
      </jhb-select>
      <jhb-select
        v-model="value"
        placeholder="请选择"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-select>
      <jhb-select
        disabled
        v-model="value"
        placeholder="请选择"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-select>
    </div>
    <div class="button-item">
      <p>Select 02</p>
      <jhb-select
        v-model="value"
        filterable
        placeholder="请搜索"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-select>
      <jhb-select
        v-model="value"
        filterable
        placeholder="请搜索"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-select>
      <jhb-select
        filterable
        disabled
        v-model="value"
        placeholder="请搜索"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-select>
    </div>
    <div class="button-item">
      <p>Select 03</p>
      <jhb-select
        v-model="value1"
        multiple
        filterable
        allow-create
        default-first-option
        error
        :required="required"
        :tipTitle="tipTitle"
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </jhb-select>
      <jhb-select
        multiple
        v-model="value1"
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </jhb-select>
      <jhb-select
        disabled
        v-model="value1"
        placeholder="请输入内容"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-select>
    </div>
    <div class="button-item">
      <p>Select 04</p>
      <jhb-cascader
        v-model="value4"
        :options="options4"
        placeholder="请选择"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-cascader>
      <jhb-cascader
        v-model="value4"
        :options="options4"
        placeholder="请选择"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-cascader>
      <jhb-cascader
        v-model="value4"
        :options="options4"
        placeholder="请选择"
        @input="handleInput1"
        @focus="handlefocus1"
        @change="handleChange1"
        @blur="handleblur1"
        @clear="handleClear1"
      ></jhb-cascader>
    </div>
  </div>
</template>

<script>
import jhbSelect from "pkgs/JHB-select/src";
import jhbCascader from "pkgs/JHB-cascader/src";
export default {
  components: {
    jhbSelect,
    jhbCascader,
  },
  data() {
    return {
      options: [
        {
          value: "",
          label: "请选择",
        },
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
          disabled: true,
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      value: "",
      value1: "",
      value4: [],
      required: {
        visible: true,
        showRequiredError: true,
        labelStyle: {
          width: "70px",
        },
        label: "姓名姓名",
      },
      tipTitle: "这是一段用来提醒的文字",
      options4: [
        {
          value: "zhinan",
          label: "指南",
          children: [
            {
              value: "shejiyuanze",
              label: "设计原则",
              children: [
                {
                  value: "yizhi",
                  label: "一致",
                },
                {
                  value: "fankui",
                  label: "反馈",
                },
                {
                  value: "xiaolv",
                  label: "效率",
                },
                {
                  value: "kekong",
                  label: "可控",
                },
              ],
            },
            {
              value: "daohang",
              label: "导航",
              children: [
                {
                  value: "cexiangdaohang",
                  label: "侧向导航",
                },
                {
                  value: "dingbudaohang",
                  label: "顶部导航",
                },
              ],
            },
          ],
        },
        {
          value: "zujian",
          label: "组件",
          children: [
            {
              value: "basic",
              label: "Basic",
              children: [
                {
                  value: "layout",
                  label: "Layout 布局",
                },
                {
                  value: "color",
                  label: "Color 色彩",
                },
                {
                  value: "typography",
                  label: "Typography 字体",
                },
                {
                  value: "icon",
                  label: "Icon 图标",
                },
                {
                  value: "button",
                  label: "Button 按钮",
                },
              ],
            },
            {
              value: "form",
              label: "Form",
              children: [
                {
                  value: "radio",
                  label: "Radio 单选框",
                },
                {
                  value: "checkbox",
                  label: "Checkbox 多选框",
                },
                {
                  value: "input",
                  label: "Input 输入框",
                },
                {
                  value: "input-number",
                  label: "InputNumber 计数器",
                },
                {
                  value: "select",
                  label: "Select 选择器",
                },
                {
                  value: "cascader",
                  label: "Cascader 级联选择器",
                },
                {
                  value: "switch",
                  label: "Switch 开关",
                },
                {
                  value: "slider",
                  label: "Slider 滑块",
                },
                {
                  value: "time-picker",
                  label: "TimePicker 时间选择器",
                },
                {
                  value: "date-picker",
                  label: "DatePicker 日期选择器",
                },
                {
                  value: "datetime-picker",
                  label: "DateTimePicker 日期时间选择器",
                },
                {
                  value: "upload",
                  label: "Upload 上传",
                },
                {
                  value: "rate",
                  label: "Rate 评分",
                },
                {
                  value: "form",
                  label: "Form 表单",
                },
              ],
            },
            {
              value: "data",
              label: "Data",
              children: [
                {
                  value: "table",
                  label: "Table 表格",
                },
                {
                  value: "tag",
                  label: "Tag 标签",
                },
                {
                  value: "progress",
                  label: "Progress 进度条",
                },
                {
                  value: "tree",
                  label: "Tree 树形控件",
                },
                {
                  value: "pagination",
                  label: "Pagination 分页",
                },
                {
                  value: "badge",
                  label: "Badge 标记",
                },
              ],
            },
            {
              value: "notice",
              label: "Notice",
              children: [
                {
                  value: "alert",
                  label: "Alert 警告",
                },
                {
                  value: "loading",
                  label: "Loading 加载",
                },
                {
                  value: "message",
                  label: "Message 消息提示",
                },
                {
                  value: "message-box",
                  label: "MessageBox 弹框",
                },
                {
                  value: "notification",
                  label: "Notification 通知",
                },
              ],
            },
            {
              value: "navigation",
              label: "Navigation",
              children: [
                {
                  value: "menu",
                  label: "NavMenu 导航菜单",
                },
                {
                  value: "tabs",
                  label: "Tabs 标签页",
                },
                {
                  value: "breadcrumb",
                  label: "Breadcrumb 面包屑",
                },
                {
                  value: "dropdown",
                  label: "Dropdown 下拉菜单",
                },
                {
                  value: "steps",
                  label: "Steps 步骤条",
                },
              ],
            },
            {
              value: "others",
              label: "Others",
              children: [
                {
                  value: "dialog",
                  label: "Dialog 对话框",
                },
                {
                  value: "tooltip",
                  label: "Tooltip 文字提示",
                },
                {
                  value: "popover",
                  label: "Popover 弹出框",
                },
                {
                  value: "card",
                  label: "Card 卡片",
                },
                {
                  value: "carousel",
                  label: "Carousel 走马灯",
                },
                {
                  value: "collapse",
                  label: "Collapse 折叠面板",
                },
              ],
            },
          ],
        },
        {
          value: "ziyuan",
          label: "资源",
          children: [
            {
              value: "axure",
              label: "Axure Components",
            },
            {
              value: "sketch",
              label: "Sketch Templates",
            },
            {
              value: "jiaohu",
              label: "组件交互文档",
            },
          ],
        },
      ],
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
