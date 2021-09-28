<!-- 
 * @description: 商家运营--商家概况
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="wrapper">
    <div class="header">{{ profile.title }}</div>
    <div class="item-wrapper">
      <div
        class="item-content"
        v-for="(parentItem, parentIndex) in profile.list"
        :key="parentIndex"
      >
        <div class="head">
          <div class="left">
            <span class="icon-left"
              ><el-image
                class="image"
                :src="require(`@/assets/img/${parentItem.image}.png`)"
              ></el-image
            ></span>
            <span class="title">{{ parentItem.title }}</span>
          </div>
          <div
            class="right"
            @click="parentItem.jump && parentItem.clickFun(parentItem)"
          >
            <span class="num" :class="parentItem.jump ? 'right-icon' : ''">{{
              parentItem.num
            }}</span>
          </div>
        </div>
        <div class="item-list">
          <div
            class="item"
            v-for="(item, index) in parentItem.list"
            :key="index"
          >
            <span>{{ item.label }}{{ item.value }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBMerchantProfile",
  props: ["profile"],
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
.item-wrapper {
  display: flex;
  font-family: PingFangSC-Medium, PingFang SC;
  .item-content {
    width: 268px;
    height: 224px;
    padding: 16px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 12px;
    border: 1px solid #e5e7eb;
    margin-right: 16px;
    box-sizing: border-box;
    .head {
      display: flex;
      justify-content: space-between;
      .left,
      .right {
        display: flex;
        align-items: center;
      }
      .title {
        height: 20px;
        font-size: 14px;
        font-weight: 500;
        color: #111827;
        line-height: 20px;
      }
      .num {
        height: 26px;
        font-size: 18px;
        font-weight: 500;
        color: #456ce6;
        line-height: 26px;
      }
      .icon-left {
        width: 32px;
        height: 32px;
        line-height: 32px;
        margin-right: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: #ebf4ff;
        text-align: center;
        .image {
          width: 16px;
          height: 16px;
        }
      }
    }
    .item-list {
      margin-top: 16px;
      height: 144px;
      overflow: auto;
      .item {
        height: 18px;
        line-height: 18px;
        font-size: 12px;
        font-weight: 400;
        color: #888b93;
      }
      &::-webkit-scrollbar {
        width: 2px !important;
      }
      &::-webkit-scrollbar-thumb {
        border-radius: 1px;
        -webkit-box-shadow: inset 0 30px 0px #d8d8d8;
        background: #fff;
      }
      &::-webkit-scrollbar-track {
        -webkit-box-shadow: inset 0 0 0 #fff;
        background: #fff;
      }
    }
  }
  .icon-right {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
  }
  .right-icon::after {
    display: inline-block;
    content: "";
    width: 10px;
    height: 10px;
    border: 3px solid #456ce6;
    border-left: none;
    border-bottom: none;
    transform: rotate(45deg) scale(0.5);
    margin-left: 4px;
  }
}
</style>
