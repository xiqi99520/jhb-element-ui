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
    <div class="header">{{ statistics.title }}</div>
    <div class="item-list">
      <div class="item" v-for="(item, index) in statistics.list" :key="index">
        <span class="num">{{ item.num }}</span>
        <span class="title">{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBMerchantStatistics",
  props: ["statistics"],
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
    width: 180px;
    height: 64px;
    padding: 8px 20px;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    box-sizing: border-box;
    .num {
      display: inline-block;
      height: 26px;
      font-size: 18px;
      font-weight: 500;
      color: #111827;
      line-height: 26px;
    }
    .title {
      display: inline-block;
      height: 18px;
      font-size: 12px;
      font-weight: 400;
      color: #888b93;
      line-height: 18px;
      margin-top: 4px;
    }
  }
}
</style>
