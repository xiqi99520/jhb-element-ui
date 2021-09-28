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
    <div>
      <el-row>
        <el-col :sm="12" :lg="6">
          <jhb-result
            icon="success"
            title="成功提示"
            subTitle="请根据提示进行操作"
          >
            <template slot="extra">
              <el-button type="primary" size="mini">返回</el-button>
            </template>
          </jhb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
          <jhb-result
            icon="warning"
            title="警告提示"
            subTitle="请根据提示进行操作"
          >
            <template slot="extra">
              <el-button type="primary" size="mini">返回</el-button>
            </template>
          </jhb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
          <jhb-result
            icon="error"
            title="错误提示"
            subTitle="请根据提示进行操作"
          >
            <template slot="extra">
              <el-button type="primary" size="mini">返回</el-button>
            </template>
          </jhb-result>
        </el-col>
        <el-col :sm="12" :lg="6">
          <jhb-result
            icon="info"
            title="信息提示"
            subTitle="请根据提示进行操作"
          >
            <template slot="extra">
              <el-button type="primary" size="mini">返回</el-button>
            </template>
          </jhb-result>
        </el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
import jhbResult from "pkgs/JHB-result/src";
export default {
  components: {
    jhbResult,
  },
  data() {
    return {
      activeName: "second",
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
