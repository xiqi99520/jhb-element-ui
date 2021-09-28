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
      <p>Tabs</p>
      <jhb-tag v-for="tag in tags" :key="tag.name" closable :type="tag.type">
        {{ tag.name }}
      </jhb-tag>
    </div>
    <div class="button-item">
      <p>Tabs-label</p>
      <jhb-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="dark"
      >
        {{ item.label }}
      </jhb-tag>
    </div>
    <div class="button-item">
      <p>Tabs-label</p>
      <jhb-tag
        v-for="item in items"
        :key="item.label"
        :type="item.type"
        effect="plain"
      >
        {{ item.label }}
      </jhb-tag>
    </div>
  </div>
</template>

<script>
import jhbTag from "pkgs/JHB-tag/src";
export default {
  components: {
    jhbTag,
  },
  data() {
    return {
      tags: [
        { name: "标签一", type: "" },
        { name: "标签三", type: "info" },
      ],
      items: [
        { type: "", label: "标签一" },
        { type: "success", label: "标签二" },
        { type: "info", label: "标签三" },
        { type: "danger", label: "标签四" },
        { type: "warning", label: "标签五" },
        { type: "other", label: "其他" },
      ],
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
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
  justify-content: space-between;
  align-items: center;
}
</style>
