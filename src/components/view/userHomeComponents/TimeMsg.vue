<template>
  <ul class='userShowList'>
    <li>
      <ul class='timeList'>
        <li>{{datetime | comverTime('HH:mm:ss')}}</li>
        <li>{{datetime | comverTime('YYYY-MM-DD dddd')}}</li>
        <li>乙亥年 冬月初二</li>
        <li>距离<span class='dateName'>冬季日</span>还有<span class='dateNum'>15</span>天</li>
        <li>{{tqObj.basic.admin_area}}{{tqObj.basic.parent_city}} 今天{{tqObj.now.cond_txt}}</li>
        <li>室外温度{{tqObj.now.tmp}}℃</li>
        <li>湿度{{tqObj.now.hum}}%</li>
        <li>空气质量：46<span class='tqType'>优</span></li>

      </ul>
    </li>
    <li>2</li>
  </ul>
</template>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'
export default {
  data() {
    return {
      chDate: "",
      datetime: new Date(),
      
    };
  },
  computed: {
    ...mapState(['tqObj'])
  },
  mounted() {
    this.getTq()
    setInterval(() => {
      this.datetime = new Date();
    }, 1000);
  },
  methods: {
    ...mapActions(['getTq']),
    
  }
};
</script>
<style scoped>
.userShowList {
  height: 100%;
}
.userShowList > li {
  float: left;
  width: 46%;
  height: 100%;
  background: url("../../../assets/view/img/userHome/leftBox.png") no-repeat;
  background-size: 100% 100%;
  /* margin:2%; */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.userShowList > li .timeList {
  height: 80%;
  font-size: 0.8vw;
  letter-spacing: 0.2vw;
}
.userShowList > li .timeList > li {
  height: 12%;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.userShowList > li .timeList > li:first-child {
  font-size: 1.5vw;
  color: #46d2d3;
  font-family: "lv";
}
.userShowList > li .timeList > li:nth-child(5) {
  margin-top: 8%;
}
.userShowList > li .timeList > li .dateName {
  color: pink;
}
.userShowList > li .timeList > li .dateNum {
  color: yellow;
  font-size: 1.2vw;
  font-family: "lv";
}
.userShowList > li .timeList > li .tqType {
  color: green;
}
</style>
