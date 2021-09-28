<!-- 
 * @description: 下拉选择框
 * @fileName: userSelector.vue 
 * @author: fzq
 * @date: 2021-08-04 09:44:42 
 * @后台人员:  
 * @path:  
 * @version: V1.0.5 
!-->
<template>
  <div class="container">
    <jhb-select
      :el="{
        attrs: {
          value: this.$attrs.value,
          placeholder: this.$attrs.placeholder,
          valueKey:
            this.$attrs.valueKey || (this.$attrs['with-full-data'] ? 'id' : ''),
        },
      }"
      :config="{
        updateDefaultValue: this.$attrs.updateDefaultValue,
        optionAttrs: {
          value: 'id',
          label: 'name',
        },
      }"
      :remoteFunc="getUserList"
      :remoteFormat="$attrs.formatFunc || formatData"
      @change="$listeners.change"
    >
      <template #default="{scope}">
        <slot :dataList="scope" />
      </template>
    </jhb-select>
  </div>
</template>

<script>
import jhbSelect from "pkgs/JHB-select/src";
import { getUserList } from "@/api/test.js";
export default {
  components: {
    jhbSelect,
  },
  methods: {
    getUserList,
    formatData(res) {
      return res.data;
    },
  },
};
</script>
