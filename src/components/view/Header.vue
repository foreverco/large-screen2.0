<template>
  <div class='header-container'>
    <div class='headerSlot'>
      <div
        class='dateBox'
        v-if='dateShow'
      >
        <p>{{datetime | comverTime('YYYY/MM/DD HH:mm:ss dddd')}} 30℃ 多云</p>
      </div>
    </div>
    <div class='headerSlot'>
      <ul class='headerList' v-if='navisShow'>
        <li v-for="(navList, index) in navLists" :key="index">
        <router-link :to='{path:navList.pathBtn}'>
          <span :class='$route.path===navList.pathBtn?"activeNav":""'>{{navList.name}}</span>
        </router-link>
        </li>
      </ul>
      <div class='headerTitle'>
        <span>可视化大数据指挥中心</span>
      </div>
    </div>
    <div class='headerSlot'>
      <div class='btnBox' v-if='btnShow'>
        <router-link to='/view/userHome'>
          <p>◀ 返回首页</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean
    },
    // isActive:{
    //   type:String
    // }
  },
  data() {
    return {
      datetime: new Date(),
      navisShow: false,
      dateShow: false,
      btnShow: false,
      myActive:'',
      navLists: [
        {name: "警情研判",pathBtn:'/view/Warning'},
        {name: "交通大数据",pathBtn:'/view/Trafic' },
        {name: "治安大数据",pathBtn:'/view/Security' },
        {name: "情报舆情",pathBtn:'/view/PublicMsg' },
        {name: "常态监控",pathBtn:'/view/NormalState' },
        {name: "应急处置",pathBtn:'/view/NormalState' },
        {name: "区域安保",pathBtn:'/view/NormalState' },
        {name: "视频监控",pathBtn:'/view/NormalState' }
      ]
    };
  },
  mounted() {
    console.log(this.isShow);
    this.navisShow = this.isShow;
    this.dateShow = this.isShow;
    this.btnShow = this.isShow;

    setInterval(() => {
      this.datetime = new Date();
    }, 1000);
  },
  // created() {
  //   console.log(this.$route)
  // },
  
  methods: {
   
  },
};
</script>
<style scoped>
.header-container {
  height: 100%;
}
.headerSlot {
  height: 100%;
  width: 20%;
  float: left;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  /* outline: 1px solid red; */
}
.headerSlot:nth-child(2) {
  width: 60%;
  position: relative;
  /* background: red; */
  /* background: url('../../assets/view/img/userHome/title.png') no-repeat; */
}
.headerSlot .headerTitle {
  width: 40%;
  position: relative;
  position: absolute;
  background: url("../../assets/view/img/userHome/title.png") no-repeat;
  background-size: 100% 100%;
}
.headerSlot .headerTitle span {
  font-size: 1.1vw;
  font-family: "lv";
  position: absolute;
  position: absolute;
  width: 100%;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
}
.headerSlot .headerList {
  /* background: green; */
  width: 100%;
  height: 100%;
}
.headerSlot .headerList li {
  float: left;
  height: 100%;
  /* outline: 1px solid black; */
  width: 7%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}
.headerSlot .headerList li:hover {
  cursor: pointer;
}
.headerSlot .headerList li:nth-child(5),
.headerSlot .headerList li:nth-child(6),
.headerSlot .headerList li:nth-child(7),
.headerSlot .headerList li:nth-child(8) {
  float: right;
}
.headerSlot .headerList li span:hover{
    background: url("../../assets/view/img/navActive.png") no-repeat !important;
  background-size: 100% 100% !important;
  color: white;
}
.headerSlot .headerList li span {
  display: inline-block;
  background: url("../../assets/view/img/nav.png") no-repeat;
  background-size: 100% 100%;
  height: 1vw;
  line-height: 1vw;
  width: 3.6vw;
  font-size: 0.5vw;
  color: #46d2d3;
  font-family: "lv";

}
.activeNav {
  background: url("../../assets/view/img/navActive.png") no-repeat !important;
  background-size: 100% 100% !important;
  color: white !important;
}
/* 日期模块 */
.headerSlot .dateBox {
  width: 100%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8vw;
}
.headerSlot .dateBox p {
  color: #46d2d3;
  font-family: "lv";
}
/* 导航栏按钮模块 */
.headerSlot .btnBox {
  width: 100%;
  font-size: 0.8vw;
  position: relative;
}
.headerSlot .btnBox p {
  color: #46d2d3;
  font-family: "lv";
  position: absolute;
  right: 5%;
  top: 50%;
  transform: translateY(-50%);
  /* border:1px solid red; */
  z-index: 10003;
}
.headerSlot .btnBox p:hover {
  cursor: pointer;
}
</style>


