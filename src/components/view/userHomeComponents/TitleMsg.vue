<template>
  <ul class='userShowList'>
    <li>
      <ul class='titleList'>
        <li>对党忠诚</li>
        <li>服务人民</li>
        <li>执法公正</li>
        <li>纪律严明</li>
      </ul>
    </li>
    <li>4</li>
  </ul>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.userShowList {
  height: 100%;
}
.userShowList > li {
  float: right;
  width: 46%;
  height: 100%;
  background: url("../../../assets/view/img/userHome/rightBox.png") no-repeat;
  background-size: 100% 100%;
  /* margin:2%; */
  font-size: 3vw;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.userShowList > li .titleList {
  font-family: "lv";
  font-size: 1.7vw;
  height: 80%;
  letter-spacing: 0.7vw;
  
}
.userShowList > li .titleList > li {
  height: 25%;
  color: #46d2d3;
    display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
</style>
