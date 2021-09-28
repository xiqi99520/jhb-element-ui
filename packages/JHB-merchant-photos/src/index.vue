<!-- 
 * @description: 商家运营--商家照片
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-07 16:15:20 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="wrapper">
    <div class="header">{{ photos.title }}</div>
    <div class="item-list">
      <div class="item" v-for="(item, index) in photos.list" :key="index">
        <span class="image-wrapper">
          <el-image class="image" :src="item.image"></el-image>
        </span>
        <span class="title">{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "JHBMerchantPhotos",
  props: ["photos"],
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
    width: 188px;
    display: flex;
    flex-direction: column;
    margin-right: 16px;
    box-sizing: border-box;
    .image-wrapper {
      display: block;
      height: 120px;
      background: #f9fafb;
      .image {
        width: 100%;
        height: 100%;
        border-radius: 8px;
      }
    }
    .title {
      display: inline-block;
      height: 18px;
      font-size: 12px;
      font-weight: 400;
      color: #111827;
      line-height: 18px;
      margin-top: 8px;
      width: 60px;
    }
  }
}
</style>
