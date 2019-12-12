<template>
  <div class='userhome'>
    <Header :isShow='isShow' style='height:11%'></Header>
    <section>
      <div class='message timeMsg left'>
        <TimeMsg></TimeMsg>
      </div>
      <div class='message btnMsg left'>
        <BtnMsg></BtnMsg>
      </div>
      <div class='message titleMsg left'>
        <TitleMsg></TitleMsg>
      </div>
    </section>
  </div>
</template>

<script>

import Header from "~/components/view/Header.vue";
import {BtnMsg,TimeMsg,TitleMsg} from "~/components/view/userHomeComponents";
export default {
  components: {
    Header,
    TimeMsg,
    BtnMsg,
    TitleMsg,
  },
  data() {
    return {
      isShow:false,
    };
  }
};
</script>
<style scoped>
.userhome {
  background: url("../../assets/view/img/userhomeBg.jpg") no-repeat;
  background-size: 100% 100%;
}
section {
  height: 89%;
  position: relative;
  display: flex;
  display: -webkit-flex;
  align-items: center;
}
.message {
  width: 25%;
  /* outline: 1px solid blue; */
}
.btnMsg {
  width: 50%;
  display: flex;
  display: -webkit-flex;
  align-items: center;
  justify-content: center;
}
.timeMsg {
  height: 78%;
  position: absolute;
  left: 5%;
  transform-style: preserve-3d;
  transform: perspective(145px) rotateY(5deg);
  z-index: 1001;
}
.btnMsg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
.titleMsg {
  position: absolute;
  right: 5%;
  height: 78%;
  transform-style: preserve-3d;
  transform: perspective(145px) rotateY(-5deg);
}

.timeMsg:hover {
  cursor: pointer;
  /* animation:spin 2s linear;    */
  transform: perspective(230px) rotateY(2deg);
  left: 2%;
  height: 80%;
  transition: all 0.5s linear;
}
.titleMsg:hover {
  cursor: pointer;
  transform: perspective(230px) rotateY(-2deg);
  right: 2%;
  height: 80%;
  transition: all 0.5s linear;
}

/* @keyframes spin{
    0%{
        transform:perspective(145px) rotateY(5deg)
    }
    100%{
        transform:perspective(0px) rotateY(0deg);
        left:0;
        height:80%;
    }
}  */
/* .headerTitle {
  height: 100%;
  width: 100%;
  background: url("../../assets/view/img/userHome/title.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  font-size: 1.3vw;
  font-family: "lv";
  position: relative;
}
.headerTitle span {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
} */
</style>
