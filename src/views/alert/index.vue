<!-- 
 * @description: 
 * @fileName: index.vue 
 * @author: fzq
 * @date: 2021-09-19 21:55:55 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="page-container">
    <div class="button-item">
      <p>Notice Single</p>
      <jhb-alert title="成功提示的文案" type="success" show-icon> </jhb-alert>
      <jhb-alert title="消息提示的文案" type="default" show-icon> </jhb-alert>
      <jhb-alert title="消息提示的文案" type="info" show-icon> </jhb-alert>
      <jhb-alert title="警告提示的文案" type="warning" show-icon> </jhb-alert>
      <jhb-alert title="错误提示的文案" type="error" show-icon> </jhb-alert>
    </div>
    <div class="button-item">
      <p>Notice</p>
      <jhb-alert
        title="成功提示的文案"
        type="success"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon
      >
      </jhb-alert>
      <jhb-alert
        title="消息提示的文案"
        type="default"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon
      >
      </jhb-alert>
      <jhb-alert
        title="消息提示的文案"
        type="info"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon
      >
      </jhb-alert>
      <jhb-alert
        title="警告提示的文案"
        type="warning"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon
      >
      </jhb-alert>
      <jhb-alert
        title="错误提示的文案"
        type="error"
        description="文字说明文字说明文字说明文字说明文字说明文字说明"
        show-icon
      >
      </jhb-alert>
    </div>
  </div>
</template>

<script>
import jhbAlert from "pkgs/JHB-alert/src";
export default {
  components: {
    jhbAlert,
  },
  data() {
    return {};
  },
  methods: {},
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
  justify-content: space-between;
  align-items: center;
}
</style>
