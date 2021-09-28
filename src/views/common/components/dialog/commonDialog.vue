<!--
 * @Descripttion: common dialog
 * @Author: WingHong
 * @version: 1.0.0
 * @Date: 2020-12-21 17:24:03
 * @LastEditors: WingHong
 * @LastEditTime: 2020-12-21 17:24:04
-->
<template>
    <el-button>hi,button</el-button>
</template>
<script>
export default {
    name: "DeviceDialog",
    props: {
        visible: Boolean
    },
    data() {
        return {
            dialogVisible: false,
            selectedData: []
        };
    },
    methods: {
        handleChange(data) {
            this.selectedData = data;
        },

        handleConfirm() {
            // if (this.selectedData.length) {
            //     this.$emit("confirm", this.selectedData);
            //     this.dialogVisible = false;
            //     // return true;
            // } else {
            //     this.$message.warning("请选择设备");
            //     // return false;
            // }
            this.dialogVisible = false
        }
    },
    watch: {
        visible(val) {
            this.dialogVisible = val;
        },
        dialogVisible(val) {
            this.$emit("update:visible", val);
        }
    }
};
</script>
<style>
.device-dialog .el-dialog__body {
        height: 400px;
        overflow: auto;
    }
</style>
