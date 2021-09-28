<!-- 
 * @description: 商家运营--商家统计组件
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="wrapper">
    <div class="header">{{ payType.title }}</div>
    <div class="item-list">
      <div
        class="item"
        v-for="(parentItem, parentIndex) in payType.list"
        :key="parentIndex"
        @click="parentItem.clickFun(parentItem)"
      >
        <div class="head">
          <el-image
            class="icon-left"
            :src="require(`@/assets/img/${parentItem.image}.png`)"
          ></el-image>
          <span class="title">{{ parentItem.title }}</span>
        </div>
        <div class="content">
          <div
            class="content-item"
            v-for="(childItem, childIndex) in parentItem.list"
            :key="childIndex"
          >
            <span>{{ childItem.title }}</span>
            <div>
              <div v-for="(item, index) in childItem.list" :key="index">
                {{ item }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBPayType",
  props: ["payType"],
};
</script>

<style lang="scss" scoped>
.header {
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  font-weight: 500;
  color: #111827;
  line-height: 20px;
  margin-bottom: 16px;
}
.item-list {
  display: flex;
  font-family: PingFangSC-Medium, PingFang SC;
  .item {
    width: 268px;
    height: 160px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    padding: 16px;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    box-sizing: border-box;
    color: #111827;
    .head {
      display: flex;
      align-items: center;
      .icon-left {
        margin-right: 14px;
      }
      .title {
        display: inline-block;
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        line-height: 20px;
      }
    }
    .content {
      margin-top: 16px;
      .content-item {
        display: flex;
        font-size: 12px;
        font-weight: 400;
        color: #888b93;
        line-height: 18px;
      }
    }
  }
}
</style>
