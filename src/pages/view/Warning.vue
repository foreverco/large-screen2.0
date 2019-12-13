<template>
  <div class='warning'>
    <Header
      :isShow='isShow'
      style='height:11%'
    ></Header>
    <section class='section'>
      <div class='warningBox left'>
        <div class='son'>
          <Echart1></Echart1>
        </div>
        <div class='son'>
          <Echart1 :option='option1'></Echart1>
        </div>
        <div class='son'>
          <Echart1></Echart1>
        </div>
        <div class='son'>
          <Echart1></Echart1>
        </div>
      </div>
      <div class='warningBox left'>
        <div class='two'>
          <Echart1 ></Echart1>
        </div>
      </div>
      <div class='warningBox left'>
        <div class='two'>
          <Echart1 ></Echart1>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Header from "~/components/view/header/Header.vue";
import Echart1 from "~/components/view/echarts/Echarts";
export default {
  data() {
    return {
      isShow: true,
      path: "ws://123.207.167.163:9010/ajaxchattest",
      message: "",

      option1:{
        title: {
            text: 'ECharts 示例'
        },
        tooltip: {},
        xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
          
            data: [5, 20, 36, 10, 10, 20]
        }]
      }
      
    };
  },
  components: {
    Header,
    Echart1
  },
  mounted() {
    // 初始化
    this.init();
  },
  methods: {
    init: function() {
      if (typeof WebSocket === "undefined") {
        alert("您的浏览器不支持socket");
      } else {
        // 实例化socket
        this.socket = new WebSocket(this.path);
        // 监听socket连接
        this.socket.onopen = this.open;
        // 监听socket错误信息
        this.socket.onerror = this.error;
        // 监听socket消息
        this.socket.onmessage = this.getMessage;
      }
    },
    open: function() {
      console.log("socket连接成功");
    },
    error: function() {
      console.log("连接错误");
    },
    getMessage: function(msg) {
      console.log(msg.data);
      this.message = msg;
    },
    send: function() {
      this.socket.send(params);
    },
    close: function() {
      console.log("socket已经关闭");
    }
  },
  destroyed() {
    // 销毁监听
    this.socket.onclose = this.close;
  }
};
</script>
<style scoped>
.warning {
  background: url("../../assets/view/img/userhomeBg.jpg") no-repeat;
  background-size: 100% 100%;
}
.section {
  height: 89%;
  width: 100%;
}
.warningBox {
  outline: 1px solid red;
  width: 30%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.warningBox:nth-child(2) {
  width: 40%;
}
.warningBox .son {
  width: 49%;
  height: 49%;
}
.two {
  width: 90%;
  height: 90%;
}
</style>