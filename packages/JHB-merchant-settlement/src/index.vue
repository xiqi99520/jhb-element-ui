<!-- 
 * @description: 商家运营--商家结算
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="wrapper">
    <div class="header">
      <span>{{ settlement.title }}</span>
      <span class="sub">{{ settlement.subTitle }}</span>
    </div>
    <div class="item-list">
      <div
        class="item"
        v-for="(item, index) in settlement.list"
        :key="index"
        @click="item.clickFun(item)"
      >
        <div class="head">
          <span class="title">{{ item.title }}</span>
          <span class="num">{{ item.title }}</span>
        </div>
        <div class="content">
          <div>
            <span class="name">{{ item.name }}</span>
            <span class="sv-type">{{ item.svType }}</span>
          </div>
          <span class="name">{{ item.no }}</span>
        </div>
        <div class="foot">
          <span class="title">该账户已经开通</span>
          <el-image
            class="image"
            v-for="(icon, iconIndex) in item.payType"
            :key="iconIndex"
            :src="require(`@/assets/img/${icon}.png`)"
          ></el-image>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBMerchantSettlement",
  props: ["settlement"],
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
  .sub {
    padding-left: 6px;
    height: 18px;
    font-size: 12px;
    font-weight: 400;
    color: #888b93;
    line-height: 18px;
  }
}
.item-list {
  display: flex;
  font-family: PingFangSC-Medium, PingFang SC;
  .item {
    padding-top: 16px;
    width: 274px;
    height: 148px;
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 16px;
    box-sizing: border-box;
    .head {
      padding: 0 16px;
      display: flex;
      justify-content: space-between;
      .title {
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #111827;
        line-height: 20px;
      }
      .num {
        height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #888b93;
        line-height: 18px;
      }
    }
    .content {
      padding: 0 16px;
      margin-top: 16px;
      .name {
        height: 18px;
        font-size: 12px;
        font-weight: 500;
        color: #111827;
        line-height: 18px;
      }
      .sv-type {
        height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #888b93;
        line-height: 18px;
        margin-left: 8px;
      }
    }
    .foot {
      padding: 16px;
      width: 100%;
      height: 40px;
      background: #f9fafb;
      border-radius: 0px 0px 8px 8px;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      .title {
        height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #888b93;
        line-height: 18px;
        padding-right: 14px;
      }
      .image {
        width: 14px;
        height: 14px;
        margin-right: 9px;
      }
    }
  }
}
</style>
