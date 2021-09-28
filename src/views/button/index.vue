<template>
  <div class="page-container">
    <div class="button-item">
      <span>Primary</span>
      <jhb-button baseStyle="Primary" @click="handleClick">常规</jhb-button>
      <jhb-button baseStyle="Primary">悬停</jhb-button>
      <jhb-button baseStyle="Primary">点击</jhb-button>
      <jhb-button baseStyle="Primary" disabled>失效</jhb-button>
    </div>
    <div class="button-item">
      <span>Primary Small</span>
      <jhb-button baseStyle="Primary" size="small" @click="handleClick"
        >常规</jhb-button
      >
      <jhb-button baseStyle="Primary" size="small">悬停</jhb-button>
      <jhb-button baseStyle="Primary" size="small">点击</jhb-button>
      <jhb-button baseStyle="Primary" size="small" disabled>失效</jhb-button>
    </div>
    <div class="button-item">
      <span>Stroke</span>
      <jhb-button baseStyle="Stroke">常规</jhb-button>
      <jhb-button baseStyle="Stroke">悬停</jhb-button>
      <jhb-button baseStyle="Stroke">点击</jhb-button>
      <jhb-button baseStyle="Stroke" disabled>失效</jhb-button>
    </div>
    <div class="button-item">
      <span>Stroke Small</span>
      <jhb-button baseStyle="Stroke" size="small">常规</jhb-button>
      <jhb-button baseStyle="Stroke" size="small">悬停</jhb-button>
      <jhb-button baseStyle="Stroke" size="small">点击</jhb-button>
      <jhb-button baseStyle="Stroke" size="small" disabled>失效</jhb-button>
    </div>
    <div class="button-item">
      <span>Secondary</span>
      <jhb-button baseStyle="Secondary">常规</jhb-button>
      <jhb-button baseStyle="Secondary">悬停</jhb-button>
      <jhb-button baseStyle="Secondary">点击</jhb-button>
      <jhb-button baseStyle="Secondary" disabled>失效</jhb-button>
    </div>
    <div class="button-item">
      <span>Secondary small</span>
      <jhb-button baseStyle="Secondary" size="small">常规</jhb-button>
      <jhb-button baseStyle="Secondary" size="small">悬停</jhb-button>
      <jhb-button baseStyle="Secondary" size="small">点击</jhb-button>
      <jhb-button baseStyle="Secondary" size="small" disabled>失效</jhb-button>
    </div>
    <div class="button-item">
      <span>LeftIcon</span>
      <jhb-button baseStyle="Primary" icon="el-icon-dianzan">常规</jhb-button>
      <jhb-button baseStyle="Primary" icon="el-icon-dianzan">悬停</jhb-button>
      <jhb-button baseStyle="Primary" icon="el-icon-dianzan">点击</jhb-button>
      <jhb-button baseStyle="Primary" disabled icon="el-icon-dianzan"
        >失效</jhb-button
      >
    </div>
    <div class="button-item">
      <span>RightIcon</span>
      <jhb-button baseStyle="Primary" rightIcon="el-icon-dianzan"
        >常规</jhb-button
      >
      <jhb-button baseStyle="Primary" rightIcon="el-icon-dianzan"
        >悬停</jhb-button
      >
      <jhb-button baseStyle="Primary" rightIcon="el-icon-dianzan"
        >点击</jhb-button
      >
      <jhb-button baseStyle="Primary" disabled rightIcon="el-icon-dianzan"
        >失效</jhb-button
      >
    </div>
  </div>
</template>
<script>
import jhbButton from "pkgs/JHB-button/src";
export default {
  components: {
    jhbButton,
  },
  data() {
    return {};
  },
  methods: {
    handleConfirm() {
      this.visible2 = false;
    },
    handleClick(e) {
      console.log("e111======", e);
    },
  },
};
</script>
<style lang="css" scoped>
.page-container {
  display: flex;
  flex-direction: column;
}
.page-container .button-item {
  margin: 30px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
</style>
