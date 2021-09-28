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
      <jhb-table-header :config="config" :data.sync="data" />
    </div>
    <div class="button-item">
      <jhb-merchant-profile :profile="profile" />
    </div>
    <div class="button-item">
      <jhb-merchant-photos :photos="photos" />
    </div>
    <div class="button-item">
      <jhb-merchant-settlement :settlement="settlement" />
    </div>
    <div class="button-item">
      <jhb-merchant-device :device="device" />
    </div>
    <div class="button-item">
      <jhb-pay-type :payType="payType" />
    </div>
    <div class="button-item">
      <jhb-merchant-statistics :statistics="statistics" />
    </div>
    <div class="button-item">
      <jhb-base-info-alone :baseInfoAlone="baseInfoAlone" />
    </div>
    <div class="button-item">
      <jhb-base-info :baseInfo="baseInfo" />
    </div>
    <div class="button-item">
      <jhb-table
        :tableData="tableData"
        :tableHeader="tableHeader1"
        @cell-events="cellClk"
        @size-change="sizeChanges"
        @current-change="currentChanges"
      >
        <template slot-scope="scope">
          <img
            :src="scope.row.headImg"
            alt=""
            style="width: 100px; height: 100px;"
          />
        </template>
      </jhb-table>
    </div>
  </div>
</template>

<script>
import jhbMerchantStatistics from "pkgs/JHB-merchant-statistics/src";
import jhbMerchantProfile from "pkgs/JHB-merchant-profile/src";
import jhbTable from "pkgs/JHB-table/src";
import jhbTableHeader from "pkgs/JHB-table-header/src";
import jhbBaseInfo from "pkgs/JHB-base-info/src";
import jhbBaseInfoAlone from "pkgs/JHB-base-info-alone/src";
import jhbMerchantPhotos from "pkgs/JHB-merchant-photos/src";
import jhbPayType from "pkgs/JHB-pay-type/src";
import jhbMerchantDevice from "pkgs/JHB-merchant-device/src";
import jhbMerchantSettlement from "pkgs/JHB-merchant-settlement/src";

export default {
  components: {
    jhbMerchantStatistics,
    jhbTable,
    jhbBaseInfo,
    jhbTableHeader,
    jhbMerchantProfile,
    jhbMerchantPhotos,
    jhbPayType,
    jhbMerchantDevice,
    jhbMerchantSettlement,
    jhbBaseInfoAlone,
  },
  data() {
    return {
      statistics: {
        title: "商家统计",
        list: [
          { num: 2233, desc: "累计商家数" },
          { num: 2399, desc: "累计连锁商家数" },
          { num: 23993, desc: "累计单店商家数" },
        ],
      },
      device: {
        title: "门店设备",
        subTitle: "共有9个智能设备",
        list: [
          {
            title: "小青竹全能付",
            num: 7,
            label: "型号：",
            value: "ME55",
            image: "qnf_shebei",
          },
          {
            title: "油宝宝",
            num: 7,
            label: "型号：",
            value: "商米台式全系列",
            image: "ybb_shebei",
          },
        ],
      },
      settlement: {
        title: "结算账户",
        subTitle: "共2个结算账户",
        list: [
          {
            title: "中国工商银行",
            clickFun: this.editDomain,
            id: { label: "ID：", value: "1001" },
            name: "何派",
            svType: "企业账户-对法人",
            no: "**** **** **** 0001",
            payType: ["zfb", "wx", "yl", "sk"],
          },
          {
            title: "中国工商银行",
            clickFun: this.editDomain,
            id: { label: "ID：", value: "1001" },
            name: "何派",
            svType: "企业账户-对法人",
            no: "**** **** **** 0001",
            payType: ["zfb", "wx", "yl", "sk"],
          },
        ],
      },
      photos: {
        title: "门店照片",
        list: [
          {
            image:
              "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
            desc: "门店门头照",
          },
          {
            image:
              "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
            desc: "门店全景照",
          },
          {
            image:
              "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
            desc: "收银台照",
          },
        ],
      },
      data: {
        productId: "",
        productName: "",
        productType: "",
        time: "",
      },
      payType: {
        title: "支付方式",
        list: [
          {
            image: "zfb_pay",
            title: "支付宝",
            clickFun: this.editDomain,
            list: [
              {
                title: "签约费率：",
                list: ["0.38%"],
              },
              {
                title: "结算周期：",
                list: ["D+1"],
              },
            ],
          },
          {
            image: "wx_pay",
            title: "微信",
            clickFun: this.editDomain,
            list: [
              {
                title: "签约费率：",
                list: ["0.38%"],
              },
              {
                title: "结算周期：",
                list: ["D+1"],
              },
            ],
          },
          {
            image: "ylewm_pay",
            title: "银联二维码",
            clickFun: this.editDomain,
            list: [
              {
                title: "签约费率：",
                list: ["贷记0.60%", "借记0.55%/25元封顶", "小额0.38%0.38%"],
              },
              {
                title: "结算周期：",
                list: ["D+1"],
              },
            ],
          },
          {
            image: "sk_pay",
            title: "刷卡",
            clickFun: this.editDomain,
            list: [
              {
                title: "签约费率：",
                list: ["贷记0.60%", "借记0.55%/25元封顶", "小额0.38%0.38%"],
              },
              {
                title: "结算周期：",
                list: ["D+1"],
              },
            ],
          },
        ],
      },
      profile: {
        title: "商家概况",
        list: [
          {
            image: "mdgk",
            title: "商家门店概况",
            num: 300,
            jump: true,
            clickFun: this.editDomain,
            list: [
              { label: "一团火：", value: 100 },
              { label: "一团火：", value: 100 },
              { label: "一团火：", value: 100 },
              { label: "一团火：", value: 100 },
            ],
          },
          {
            image: "mdgk",
            title: "商家设备情况",
            num: 200,
            jump: false,
            list: [
              { label: "POS机：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "POS机：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
              { label: "收款码：", value: 100 },
            ],
          },
          {
            image: "sjjs",
            title: "商家结算账户概况",
            num: 400,
            jump: true,
            clickFun: this.editDomain,
            list: [
              { label: "企业账户-对公：", value: 1 },
              { label: "企业账户-对法人：", value: 1 },
            ],
          },
        ],
      },
      config: [
        { title: "拓展员", code: "productType" },
        { title: "产品编号", code: "productId" },
        { title: "产品名称", code: "productName" },
        {
          title: "产品周期",
          code: "time",
          type: "select",
          options: [
            {
              value: 0,
              label: "未到期",
            },
            {
              value: 1,
              label: "已到期",
            },
          ],
        },
      ],
      baseInfoAlone: {
        title: "基本信息",
        edit: true,
        clickFun: this.editDomain,
        list: [
          [
            { label: "商家MID：", value: "0000001" },
            { label: "商家地址：", value: "内蒙古呼和浩特市恩和大厦" },
            { label: "注册时间：", value: "2021-10-01" },
          ],
          [
            { label: "商家简称：", value: "一团火有限公司" },
            { label: "联系人：", value: "小李" },
            { label: "拓展员：", value: "小李" },
          ],
          [{ label: "商家类型：", value: "连锁商家" }],
        ],
      },
      baseInfo: [
        {
          title: "基本信息",
          edit: true,
          clickFun: this.editDomain,
          list: [
            [
              { label: "商家MID：", value: "0000001" },
              { label: "商家地址：", value: "内蒙古呼和浩特市恩和大厦" },
              { label: "注册时间：", value: "2021-10-01" },
            ],
            [
              { label: "商家简称：", value: "一团火有限公司" },
              { label: "联系人：", value: "小李" },
              { label: "拓展员：", value: "小李" },
            ],
            [{ label: "商家类型：", value: "连锁商家" }],
          ],
        },
        {
          title: "工商信息",
          list: [
            [
              { label: "工商名称：", value: "一团火有限公司" },
              { label: "法人：", value: "张萧" },
              {
                label: "营业执照照片：",
                value: [
                  "https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg",
                  "https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg",
                ],
                showImage: true,
              },
            ],
            [
              { label: "营业执照有效期：", value: "2010-10-01 至 长期" },
              { label: "身份证有效期：", value: "2010-10-10至2030-10-09" },
            ],
          ],
        },
      ],
      tableData: [
        {
          name: "小鱼儿",
          userNo: "百盛集团",
          memberGrade: "集团商家",
          age: "小李",
          phone: "2021-07-30",
          isRegister: "内蒙古呼和浩特赛罕区",
          headImg: "http://img.all-pay.cn/2020-04-21/N07Pf075g5.png",
        },
        {
          name: "000002",
          userNo: "百盛集团",
          memberGrade: "集团商家",
          age: "小李",
          phone: "2021-07-30",
          isRegister: "内蒙古呼和浩特赛罕区",
        },
        {
          name: "000003",
          userNo: "百盛集团",
          memberGrade: "集团商家",
          age: "小李",
          phone: "2021-07-30",
          isRegister: "内蒙古呼和浩特赛罕区",
        },
        {
          name: "000004",
          memberGrade: "百盛集团",
          userNo: "集团商家",
          age: "小李",
          phone: "2021-07-30",
          isRegister: "内蒙古呼和浩特赛罕区",
        },
      ], // 请求到的表格数据
      tableHeader1: [
        // 表头信息
        {
          prop: "userNo",
          label: "商家MID",
          minWidth: "120px",
          cellClk: true,
        },
        {
          prop: "name",
          label: "商家简称",
          minWidth: "120px",
        },
        {
          prop: "memberGrade",
          label: "商家类型",
          minWidth: "120px",
        },
        {
          prop: "age",
          label: "拓展员",
          minWidth: "120px",
        },
        {
          prop: "phone",
          label: "注册时间",
          minWidth: "120px",
        },
        {
          prop: "isRegister",
          label: "所在地区",
          minWidth: "180px",
        },
        {
          prop: "operation",
          label: "操作",
          fixed: "right",
          minWidth: "260px",
          operation: [
            {
              name: "编辑",
              clickFun: this.editDomain,
            },
            {
              name: "查看",
              clickFun: this.editDomain,
            },
          ],
        },
      ],
    };
  },
  methods: {
    cellClk(row) {
      this.dialog.Visible = true;
      console.log("固定列操作返回", row);
    },
    sizeChanges(row) {
      console.log("固定列操作返回", row);
    },
    currentChanges(row) {
      console.log("固定列操作返回", row);
    },
    edit(val) {
      console.log("val=====", val);
    },
    handleClick(val) {
      console.log("val======", val);
    },
    editDomain(val) {
      console.log("val======", val);
    },
  },
};
</script>

<style lang="css" scoped>
.page-container .button-item {
  margin: 30px;
}
</style>
