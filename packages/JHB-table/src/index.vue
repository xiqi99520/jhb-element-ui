<!---
 * @description: table组件
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
-->
<template>
  <div style="height: 100%;">
    <div class="header">{{ title }}</div>
    <el-table
      v-loading="loading"
      element-loading-text="拼命加载中"
      element-loading-spinner="el-icon-loading"
      style="width: 100%;"
      :height="inTableHeight"
      :data="tableData"
      row-key="id"
      default-expand-all
      size="medium"
      ref="table"
      stripe
      @sort-change="handleSort"
      @filter-change="filterHandler"
      @selection-change="handleSelectionChange"
      @cell-mouse-enter="cellMouseEnter"
    >
      <!-- 多选框 -->
      <el-table-column
        v-if="type"
        :label="type == 'index' && '序号'"
        :type="type"
        width="55"
      >
      </el-table-column>
      <el-table-column
        v-for="(th, key) in tableHeader"
        min-height="46"
        :key="key"
        :prop="th.prop"
        :label="th.label"
        :fixed="th.fixed"
        :sortable="th.custom ? 'custom' : false"
        :filters="th.filters"
        :column-key="th.columnKey"
        :filtered-value="th.filteredValue"
        :filter-multiple="th.filterMultiple"
        :width="th.minWidth"
      >
        <template slot-scope="scope">
          <!-- 操作按钮 -->
          <div v-if="th.operation">
            <el-button
              v-for="(o, key) in th.operation"
              :key="key"
              :style="th.style"
              @click="o.clickFun(scope.row)"
              type="text"
              size="mini"
            >
              <!-- v-if="colVisibleFormatters(o.colVisible,scope.row)" -->
              <!-- style="width: 100%;" -->
              {{ o.name }}
            </el-button>
          </div>
          <!-- 点击跳转页面 -->
          <div v-else-if="th.router">
            <router-link
              :to="{
                path: th.router.path,
                query: { expertFields: scope.row['fieldName'] },
              }"
            >
              {{ scope.row[th.prop] }}
            </router-link>
          </div>
          <div v-else-if="th.cellClk">
            <a class="aStyle" @click="cellClk(scope.row)" title="点击查看详情">
              {{ scope.row[th.prop] }}
            </a>
          </div>
          <div v-else-if="th.switch">
            <el-switch
              :disabled="th.switch.disabled"
              v-model="scope.row[th.prop]"
              active-color="#13ce66"
              inactive-color="#ff4949"
            >
            </el-switch>
          </div>
          <div v-else>
            <!-- 鼠标滑过显示气泡框 -->
            <el-popover
              v-if="th.describe"
              popper-class="popover-el-class"
              placement="bottom"
              trigger="hover"
              :content="scope.row[th.prop]"
            >
              <slot name="popover-table"></slot>
              <span
                class="describe-wrap"
                slot="reference"
                style="-webkit-box-orient: vertical;"
              >
                {{ scope.row[th.prop] }}
              </span>
            </el-popover>
            <!-- 下拉选择框 -->
            <el-select
              v-else-if="th.selected"
              :disabled="!th.disabled"
              v-model="scope.row[th.prop]"
              @change="th.changeFunc"
              clearable
            >
              <el-option
                v-for="(item, index) in th.selected"
                :value="item.value"
                :label="item.text"
                :key="index"
              ></el-option>
            </el-select>
            <!-- 需要格式化的图片 -->
            <img
              v-else-if="th.formImage"
              :src="scope.row[th.prop]"
              class="formImageClass"
            />
            <!-- 纯展示数据 -->
            <span v-else-if="!th.formatData && !th.formImage">{{
              scope.row[th.prop]
            }}</span>

            <!-- 需要格式化的数据结构 -->
            <span v-else>{{
              scope.row[th.prop] | formatters(th.formatData)
            }}</span>
          </div>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <jhb-pagination
        v-if="isPaging"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="pageSizes"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next"
        :total="total"
      >
      </jhb-pagination>
    </div>
  </div>
</template>

<script>
import jhbPagination from "../../JHB-pagination/src";
export default {
  name: "JHBTable",
  components: {
    jhbPagination,
  },
  props: {
    type: String,
    loading: {
      type: Boolean,
      default: function() {
        return false;
      },
    },
    reduceNum: {
      type: Number,
      default: function() {
        return 150;
      },
    },
    tableData: {
      type: Array,
      default: function() {
        return [];
      },
    },
    tableHeader: {
      type: Array,
      default: function() {
        return [];
      },
    },
    multipleSelection: {
      type: Array,
      default: function() {
        return [];
      },
    },
    isPaging: {
      type: Boolean,
      default: function() {
        return true;
      },
    },
    pageSizes: {
      type: Array,
      default: function() {
        return [10, 20, 30, 40, 50];
      },
    }, // 分页界点
    pageSize: {
      type: Number,
      default: function() {
        return 10;
      },
    }, // 一页显示多少条
    pageNum: {
      type: Number,
      default: function() {
        return 1;
      },
    },
    total: {
      type: Number,
      default: function() {
        return 400;
      },
    }, 
    // 总页数
    title: {
      type: String,
      default: function() {
        return "商家列表";
      },
    }, 
    // 表格高度
    height: {
      type: Number,
      default: function() {
        return null;
      },
    }, // 总页数
  },
  filters: {
    formatters(val, format) {
      if (typeof format === "function") {
        return format(val);
      } else return val;
    },
  },
  data() {
    return {
      inTableHeight: null,
    };
  },
  computed: {},
  watch: {
    tableData() {
      this.$nextTick(() => {
        this.changeTableheight();
      });
    },
  },
  created() {
    this.inTableHeight = this.height;
  },
  mounted() {
    this.$nextTick(() => {
      this.changeTableheight();
      if (!this.height) {
        window.onresize = () => {
          this.changeTableheight();
        };
      }
    });
  },
  methods: {
    colVisibleFormatters(format, row) {
      if (format === undefined) {
        return true;
      }
      if (typeof format === "function") {
        return format(row);
      } else return format;
    },
    changeTableheight() {
      if (this.height) {
        this.inTableHeight = this.height;
        this.$refs.table.doLayout();
        return;
      }
      let tableHeight = window.innerHeight || document.body.clientHeight;
      let disTop = this.$refs.table.$el;
      tableHeight -= disTop.offsetTop + 66;
      if (disTop.offsetParent) tableHeight < 460 ? 460 : tableHeight;
      this.$refs.table.doLayout();
    },
    handleSelectionChange(val) {
      this.$emit("multipleSelection", val);
    },
    cellMouseEnter(row) {
      this.$emit("cell-mouse-enter", row);
    },
    cellClk(row) {
      this.$emit("cell-events", row);
    },
    handleSort(sort) {
      this.$emit("sort-events", sort);
    },
    filterHandler(filters) {
      this.$emit("filter-events", filters);
    },
    handleSizeChange(num) {
      this.$emit("size-change", num);
    }, // pageSize 改变时会触发
    handleCurrentChange(num) {
      this.$emit("current-change", num);
    }, // current 改变时会触发
  },
  beforeDestroy() {},
  destroyed() {
    Window.onresize = null;
  },
};
</script>
<style>
.header {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #111827;
  line-height: 20px;
  margin-bottom: 16px;
}
.el-table {
  color: #111827;
  font-size: 12px;
  line-height: 18px;
  font-weight: 400;
  font-family: PingFangSC-Regular, PingFang SC;
}
.el-table .cell {
  line-height: 18px;
}
.el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #e5e7eb;
}
.el-table .el-table__header-wrapper {
  border-bottom: 2px solid #e5e7eb;
}
.el-table .el-table__header-wrapper td,
.el-table .el-table__header-wrapper th.is-leaf {
  border-bottom: 0px solid #e5e7eb;
}
.el-table thead {
  color: #111827;
  font-weight: 500;
  background: #fff;
}
.el-table--medium td,
.el-table--medium th {
  padding: 8.5px 0;
}
.el-table--border {
  border: 1px solid #ebeef5 !important;
}
.el-button--mini,
.el-button--mini.is-round {
  padding: 0 8px;
}
.el-button--text {
  color: #456ce6;
  font-size: 12px;
  font-weight: 400;
  line-height: 17px;
  height: 17px;
  box-sizing: border-box;
}
.el-button--text:focus,
.el-button--text:hover {
  color: #6a89eb;
}
/* element-ui 固定表头 固定列 最后一行错位问题解决 */
/* 设置滚动条的样式 */
::-webkit-scrollbar {
  width: 10px !important;
  height: 10px !important;
}
::-webkit-scrollbar-track {
  background-color: #ff5c101a;
}
::-webkit-scrollbar-thumb {
  background-color: #ff5c1066;
  border-radius: 8px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: #ff5c1066;
}
::-webkit-scrollbar-thumb:active {
  background-color: #ff5c1066;
}
.el-table--striped .el-table__body tr.el-table__row--striped td {
  background: #f9fafb;
}
.el-table__fixed::before,
.el-table__fixed-right::before {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background-color: unset;
  z-index: 4;
}
/* element-ui 固定表头 固定列 最后一行错位问题解决 */
</style>
<style rel="stylesheet/scss" lang="scss" scoped>
.block {
  padding: 18px;
  text-align: right;
}
.aStyle {
  cursor: pointer;
  &:hover {
    text-decoration: underline;
    color: #409eff;
  }
}
div span {
  cursor: context-menu;
}
.formImageClass {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  vertical-align: middle;
  border: 0;
  display: inline-block;
}
</style>
