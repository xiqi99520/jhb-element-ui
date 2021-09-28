<!-- 
 * @description: 基本信息展示
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="base-info-wrapper">
    <div
      class="from-base"
      :class="indexParent == 0 ? 'notop' : ''"
      v-for="(itemParent, indexParent) in baseInfo"
      :key="indexParent"
    >
      <div class="header">
        <span>{{ itemParent.title }}</span>
        <span v-if="indexParent == 0 && itemParent.edit"
          ><jhb-button size="small" @click="itemParent.clickFun(itemParent)"
            >编辑</jhb-button
          ></span
        >
      </div>
      <div
        class="item-list"
        v-for="(itemChild, indexChild) in itemParent.list"
        :key="indexChild"
      >
        <div class="item" v-for="(item, index) in itemChild" :key="index">
          <span>{{ item.label }}</span>
          <span v-if="item.showImage"
            ><jhb-link :underline="underline" @click="showInfo(item.value)"
              >查看</jhb-link
            ></span
          >
          <span v-else>{{ item.value }}</span>
        </div>
      </div>
    </div>
    <el-image-viewer
      :on-close="
        () => {
          this.centerDialogVisible = false;
        }
      "
      v-if="centerDialogVisible"
      :url-list="srcList"
      :hide-on-click-modal="true"
      :initial-index="firstUrl"
    ></el-image-viewer>
  </div>
</template>

<script>
import ElImageViewer from "element-ui/packages/image/src/image-viewer";
import jhbLink from "../../JHB-link/src";
import jhbButton from "../../JHB-button/src";
export default {
  name: "jhbBaseInfo",
  components: {
    jhbLink,
    ElImageViewer,
    jhbButton,
  },
  props: ["baseInfo"],
  data() {
    return {
      underline: false,
      centerDialogVisible: false,
      firstUrl: 0,
      srcList: [],
    };
  },
  methods: {
    showInfo(arg) {
      this.centerDialogVisible = true;
      this.srcList = arg;
    },
    edit(val) {
      this.$emit("edit", val);
    },
  },
};
</script>

<style lang="scss" scoped>
.base-info-wrapper {
  background: #f9fafb;
  border-radius: 12px;
  padding: 16px;
  .from-base {
    margin-top: 16px;
    &.notop {
      margin-top: 0;
    }
  }
  .header {
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #111827;
    line-height: 26px;
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
  }
  .item-list {
    display: flex;
    font-family: PingFangSC-Medium, PingFang SC;
    margin-bottom: 8px;
    font-size: 12px;
    font-weight: 400;
    color: #111827;
    .item {
      width: 420px;
      height: 18px;
      line-height: 18px;
    }
  }
}
</style>
