<template>
  <div>
    <div class='loginBg'>
      <transition name="bounce">
        <div class='loginBtn' v-if='show'>
          <router-link :to="{name : 'view_userHome'}">
            <span class='welBtn'>进入系统</span>
          </router-link>
        </div>
      </transition>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  },

  mounted() {
    this.show = true;
  }
};
</script>
<style  scoped>
.loginBg {
  background: url("../../assets/view/img/hello.jpg") no-repeat;
  background-size: 100% 100%;
  display: flex;
  display: -webkit-flex;
  align-items: flex-end;
  justify-content: center;
}
.loginBtn {
  width: 20%;
  height: 20%;
  font-size: 1.5vw;
  text-align: center;
}

.loginBtn:hover {
  cursor: pointer;
}
.bounce-enter-active {
  animation: bounce-in 3s;
}
.bounce-leave-active {
  animation: bounce-in 5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(2);
  }
  100% {
    transform: scale(1);
  }
}

.bounce-enter-active,
.fade-leave-active {
  transition: opacity 5s;
}
.bounce-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.welBtn{
  background: #46d2d350;
  display: inline-block;
  padding:0.2vw 1vw;
  border-radius: 2vw;
  font-family: 'lv';
  letter-spacing: 0.3vw;
}
</style>
