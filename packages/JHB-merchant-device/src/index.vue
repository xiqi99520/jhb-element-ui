<!-- 
 * @description: 商家运营--门店设备
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
      <span>{{ device.title }}</span>
      <span class="sub">{{ device.subTitle }}</span>
    </div>
    <div class="item-list">
      <div class="item" v-for="(item, index) in device.list" :key="index">
        <span class="head"
          ><el-image
            class="image"
            :src="require(`@/assets/img/${item.image}.png`)"
          ></el-image
        ></span>
        <div class="content">
          <div class="content-head">
            <span class="title">{{ item.title }}</span>
            <span class="num">{{ item.num }}</span>
          </div>
          <span class="desc">{{ item.label }}{{ item.value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBMerchantDevice",
  props: ["device"],
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
    width: 200px;
    height: 218px;
    background: #ffffff;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    border: 1px solid #e5e7eb;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    box-sizing: border-box;
    .head {
      width: 198px;
      height: 147px;
      background: linear-gradient(180deg, #eff1f3 0%, #f9fafb 100%);
      border-radius: 8px 8px 0px 0px;
      display: flex;
      justify-content: center;
      align-items: center;
      .image {
        width: 45px;
        height: 105px;
      }
    }
    .content {
      padding: 16px;
      .content-head {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title,
        .num {
          height: 18px;
          font-size: 12px;
          font-weight: 500;
          color: #111827;
          line-height: 18px;
        }
      }
      .desc {
        height: 16px;
        font-size: 11px;
        font-weight: 400;
        color: #888b93;
        line-height: 16px;
      }
    }
  }
}
</style>
