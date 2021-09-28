<template>
  <div class="table-header-wrapper">
    <div class="header">{{ title }}</div>
    <div class="table-header">
      <el-form :model="data" class="form" :key="timer">
        <div
          class="form-item"
          :class="[
            item.type === 'daterange' ? 'daterange' : '',
            item.type === 'cascader' ? 'cascader' : '',
          ]"
          v-for="item in dataSource"
          :key="item.code"
        >
          <el-form-item :label="item.title" class="table-header-item">
            <jhb-select
              v-if="item.type === 'select'"
              v-model="data[item.code]"
              :placeholder="item.placeholder"
              clearable
            >
              <el-option
                v-for="option in item.options"
                :key="option.value"
                :value="option.value"
                :label="option.label"
              >
              </el-option>
            </jhb-select>
            <jhb-date-picker
              v-else-if="item.type === 'daterange'"
              v-model="data[item.code]"
              type="daterange"
              :picker-options="item.pickerOptions"
              range-separator="至"
              :start-placeholder="item.startPlaceholder"
              :end-placeholder="item.endPlaceholder"
              clearable
            >
            </jhb-date-picker>
            <jhb-cascader
              v-else-if="item.type === 'cascader'"
              v-model="data[item.code]"
              :options="item.options"
              :placeholder="item.placeholder"
              size="small"
              clearable
            >
            </jhb-cascader>
            <jhb-input
              v-else
              v-model="data[item.code]"
              :placeholder="item.placeholder"
            ></jhb-input>
          </el-form-item>
        </div>
        <div class="form-item bottom">
          <jhb-button baseStyle="Stroke" @click="clear">重置</jhb-button>
          <jhb-button @click="search">搜索</jhb-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
import jhbButton from "../../JHB-button/src";
import jhbInput from "../../JHB-input/src";
import jhbSelect from "../../JHB-select/src";
export default {
  name: "JHBTableHeader",
  components: {
    jhbButton,
    jhbInput,
    jhbSelect,
  },
  props: {
    "config": {
      type: Array,
      default: function() {
        return [];
      },
    }, 
    "data": {
      type: Array,
      default: function() {
        return [];
      },
    },
    "title": {
      type: String,
      default: function() {
        return "查询商家";
      },
    }
  },
  data() {
    return {
      copyData: {},
      dataSource: [],
      timer: "",
    };
  },
  watch: {
    config: {
      immediate: true,
      handler(val) {
        this.dataSource = val;
        this.timer = new Date().getTime();
        this.$forceUpdate();
      },
    },
  },
  mounted() {
    this.copyData = Object.assign({}, this.data);
  },
  methods: {
    search() {
      this.$emit("search", this.data);
    },
    clear() {
      this.$emit("update:data", Object.assign({}, this.copyData));
      this.search();
    },
  },
};
</script>
<style scoped>
.header {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #111827;
  line-height: 20px;
  margin-bottom: 16px;
}
.form {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.form-item {
  /* width: 22%; */
  height: 40px;
  line-height: 40px;
  margin-left: 24px;
  margin-bottom: 10px;
}
.form-item:first-child {
  margin-left: 0;
}
.form-item.daterange {
  width: 30%;
}
.form-item.bottom {
  margin-left: 16px;
}
.table-header {
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px 16px 6px;
  box-sizing: border-box;
}
.table-header-item.el-form-item {
  width: 100%;
  display: flex;
  flex: auto;
  margin-bottom: 12px;
}
.el-form-item__content,
.el-select {
  width: 100%;
}
.table-header >>> label.el-form-item__label {
  font-size: 12px;
  font-family: PingFangSC-Regular, PingFang SC;
  font-weight: 400;
  color: #111827;
  padding: 0 8px 0 0;
  width: 60px;
}
.table-header >>> .el-form-item__content {
  width: 160px;
}
.cascader >>> .el-form-item__content {
  padding-top: 4px;
}
.daterange >>> .el-form-item__content {
  width: 280px;
  padding-top: 5px;
}
.daterange >>> .el-date-editor .el-range-separator {
  padding: 0;
}
.form-item #jhb-select-cascader-root >>> .el-cascader {
  width: 100%;
}
</style>
