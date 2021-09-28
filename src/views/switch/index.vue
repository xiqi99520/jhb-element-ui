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
      <p>switch</p>
      <jhb-switch
        v-model="value"
        style="width: 32px;"
        active-color="#456CE6"
        inactive-color="#CFD0D3"
      >
      </jhb-switch>
      <jhb-switch
        v-model="value1"
        style="width: 32px;"
        active-color="#456CE6"
        inactive-color="#CFD0D3"
      >
      </jhb-switch>
      <jhb-switch
        v-model="value"
        disabled
        style="width: 32px;"
        active-color="#456CE6"
        inactive-color="#CFD0D3"
      >
      </jhb-switch>
      <jhb-switch
        v-model="value1"
        disabled
        style="width: 32px;"
        active-color="#456CE6"
        inactive-color="#CFD0D3"
      >
      </jhb-switch>
    </div>
    <div style="padding-left: 30px;">
      <p>tree</p>
      <jhb-tree
        :data="data"
        show-checkbox
        node-key="id"
        :default-expanded-keys="[2, 3]"
        :default-checked-keys="[5]"
      >
      </jhb-tree>
    </div>
  </div>
</template>

<script>
import jhbSwitch from "pkgs/JHB-switch/src";
import jhbTree from "pkgs/JHB-tree/src";
export default {
  components: {
    jhbSwitch,
    jhbTree,
  },
  data() {
    return {
      value: false,
      value1: true,
      data: [
        {
          id: 1,
          label: "一级 2",
          children: [
            {
              id: 3,
              label: "二级 2-1",
              children: [
                {
                  id: 4,
                  label: "三级 3-1-1",
                },
                {
                  id: 5,
                  label: "三级 3-1-2",
                  disabled: true,
                },
              ],
            },
            {
              id: 2,
              label: "二级 2-2",
              disabled: true,
              children: [
                {
                  id: 6,
                  label: "三级 3-2-1",
                },
                {
                  id: 7,
                  label: "三级 3-2-2",
                  disabled: true,
                },
              ],
            },
          ],
        },
      ],
      defaultProps: {
        children: "children",
        label: "label",
      },
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
