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
      <p>Pagination</p>
      <jhb-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="10"
        :page-sizes="[10, 20, 30, 40]"
        layout="total,sizes, prev, pager, next"
        :total="100"
      >
      </jhb-pagination>
    </div>
    <div class="button-item">
      <p>Color Picker</p>
      <jhb-color-picker v-model="color1"> </jhb-color-picker>
    </div>
    <div class="button-item">
      <p>Rate</p>
      <jhb-rate
        v-model="value2"
        allow-half
        text-color="#FFBF47"
        disabled-void-color="red"
      >
      </jhb-rate>
    </div>
    <div class="button-item">
      <p>Badge</p>
      <jhb-badge :value="12">
        <el-button>评论</el-button>
      </jhb-badge>
      <jhb-badge :value="200" :max="99">
        <el-button>评论</el-button>
      </jhb-badge>
      <jhb-badge value="new">
        <el-button>评论</el-button>
      </jhb-badge>
      <jhb-badge is-dot><el-button>数据查询</el-button></jhb-badge>
    </div>
    <div>
      <p>Progress</p>
      <div>
        <jhb-progress :percentage="69"></jhb-progress>
      </div>
      <div>
        <jhb-progress :percentage="100" status="success"></jhb-progress>
        <jhb-progress :percentage="100" status="warning"></jhb-progress>
        <jhb-progress :percentage="50" status="exception"></jhb-progress>
      </div>
    </div>
    <div>
      <p>Slider</p>
      <div class="block">
        <span class="demonstration">默认</span>
        <jhb-slider v-model="value3"></jhb-slider>
      </div>
    </div>
    <div>
      <div class="block">
        <span class="demonstration">赋值</span>
        <jhb-slider v-model="value4"></jhb-slider>
      </div>
    </div>
    <div>
      <span class="demonstration">分段</span>
      <jhb-slider v-model="value5" range show-stops :max="10"> </jhb-slider>
    </div>
    <div>
      <span class="demonstration">steps</span>
      <jhb-steps :active="2" align-center finish-status="success">
        <el-step
          title="步骤01"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤02"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤03"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤04"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
      </jhb-steps>
    </div>
    <div style="height: 300px;margin-top: 30px;">
      <jhb-steps
        direction="vertical"
        :active="2"
        align-center
        finish-status="success"
      >
        <el-step
          title="步骤01"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤02"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤03"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
        <el-step
          title="步骤04"
          description="这是一段很长很长很长的描述性文字"
        ></el-step>
      </jhb-steps>
    </div>
    <div>
      <span class="demonstration">timeline</span>
      <jhb-timeline :reverse="reverse">
        <el-timeline-item
          v-for="(activity, index) in activities"
          :key="index"
          :timestamp="activity.timestamp"
        >
          {{ activity.content }}
        </el-timeline-item>
      </jhb-timeline>
    </div>
    <div>
      <jhb-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </jhb-timeline>
    </div>
    <div style="margin-top: 20px;">
      <el-row>
        <el-col :span="8">
          <jhb-card :body-style="{ padding: '0px' }">
            <div style="padding: 14px;display: flex;align-items: center;">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image-small-right"
              />
              <div class="content" style="padding-left: 8px;">
                <span>主标题文字</span>
                <div>辅助文字</div>
              </div>
            </div>
          </jhb-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <el-row>
        <el-col :span="8">
          <jhb-card :body-style="{ padding: '0px' }">
            <div class="content" style="padding: 16px;">
              <img
                src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                class="image-small"
              />
              <span>主标题文字</span>
              <div>辅助文字或者描述性文字都可以</div>
            </div>
          </jhb-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <el-row>
        <el-col :span="8">
          <jhb-card :body-style="{ padding: '0px' }">
            <img
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
            <div class="content" style="padding: 16px;">
              <span>主标题文字</span>
              <div>辅助文字或者描述性文字都可以</div>
            </div>
          </jhb-card>
        </el-col>
      </el-row>
    </div>
    <div style="margin-top: 20px;">
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="top"
      >
        <el-button>top</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="left"
      >
        <el-button>left</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="right"
      >
        <el-button>right</el-button>
      </el-tooltip>
      <el-tooltip
        class="item"
        effect="dark"
        content="Top Left 提示文字"
        placement="bottom"
      >
        <el-button>bottom</el-button>
      </el-tooltip>
    </div>
    <div style="margin-top: 20px;">
      <jhb-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <div class="avatar-uploader-icon" v-else>
          <i class="el-icon-plus"></i>
          <span>上传图片</span>
        </div>
      </jhb-upload>
    </div>
    <div style="margin-top: 20px;">
      <jhb-upload
        class="avatar-uploader disabled"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <img v-if="imageUrl" :src="imageUrl" class="avatar" />
        <div class="avatar-uploader-icon" v-else>
          <i class="el-icon-plus"></i>
          <span>上传图片</span>
        </div>
      </jhb-upload>
    </div>
  </div>
</template>
<script>
import jhbPagination from "pkgs/JHB-pagination/src";
import jhbColorPicker from "pkgs/JHB-color-picker/src";
import jhbRate from "pkgs/JHB-rate/src";
import jhbBadge from "pkgs/JHB-badge/src";
import jhbProgress from "pkgs/JHB-progress/src";
import jhbSlider from "pkgs/JHB-slider/src";
import jhbSteps from "pkgs/JHB-steps/src";
import jhbTimeline from "pkgs/JHB-timeline/src";
import jhbUpload from "pkgs/JHB-upload/src";
import jhbCard from "pkgs/JHB-card/src";
export default {
  components: {
    jhbPagination,
    jhbColorPicker,
    jhbRate,
    jhbBadge,
    jhbProgress,
    jhbSlider,
    jhbSteps,
    jhbTimeline,
    jhbUpload,
    jhbCard,
  },
  data() {
    return {
      value: false,
      value1: true,
      value2: 3.7,
      value3: 0,
      value4: 50,
      value5: [4, 8],
      currentPage1: 5,
      color1: "#456CE6",
      reverse: true,
      imageUrl: "",
      activities: [
        {
          content: "活动按期开始",
          timestamp: "2018-04-15",
        },
        {
          content: "通过审核",
          timestamp: "2018-04-13",
        },
        {
          content: "创建成功",
          timestamp: "2018-04-11",
        },
      ],
      currentDate: new Date(),
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    format(percentage) {
      return percentage === 100 ? "满" : `${percentage}%`;
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
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
