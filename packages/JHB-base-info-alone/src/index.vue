<!-- 
 * @description: 基本信息展示--分开单独显示
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="base-info-wrapper">
    <div class="from-base">
      <div class="header">
        <span>{{ baseInfoAlone.title }}</span>
        <span v-if="baseInfoAlone.edit"
          ><jhb-button
            size="small"
            @click="baseInfoAlone.clickFun(baseInfoAlone)"
            >编辑</jhb-button
          ></span
        >
      </div>
      <div class="content">
        <div
          class="item-list"
          v-for="(itemChild, indexChild) in baseInfoAlone.list"
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
  name: "JHBBaseInfoAlone",
  components: {
    jhbLink,
    ElImageViewer,
    jhbButton,
  },
  props: ["baseInfoAlone"],
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
  },
};
</script>

<style lang="scss" scoped>
.base-info-wrapper {
  border-radius: 12px;
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
  .content {
    background: #f9fafb;
    padding: 16px;
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
}
</style>
