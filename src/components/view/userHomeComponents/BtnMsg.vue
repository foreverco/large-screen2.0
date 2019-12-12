<template>
  <div class='navAll'>
    <div class='navPage'>
      <ul class='navPageList'>
        <li
          v-for="(navPageList, index) in navPageLists"
          :key="index"
        >
          <router-link :to='{path:navPageList.pathBtn}'>
            <p class='roteBox'>
              <span class='shadow'></span>
              <img
                :src="navPageList.imgSrc"
                alt=""
              >
              <img
                :src="navPageList.imgSrc1"
                alt=""
              >
            </p>
            <p>
              {{navPageList.title}}
            </p>
          </router-link>
        </li>

      </ul>
    </div>
    <div class='navSys'>
      <ul class='navSysList'>
        <li
          v-for="(navSysList, index) in navSysLists"
          :key="index"
        >
        <router-link :to='{path:navSysList.pathBtn}'>
          <p class='roteBox'>
            <img
              :src="navSysList.imgSrc1"
              class='baseImg'
            >
            <img
              :src="navSysList.imgSrc"
              class='roteImg'
            >
          </p>
          <p>
            {{navSysList.title}}
          </p>
        </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script >
export default {
  mounted() {
    console.log(this.$config.view.route_pre)
  },
  data() {
    return {
      navPageLists: [
        {
          title: "常态监控",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/view.png",
          pathBtn: `/${this.$config.view.route_pre}/NormalState`
        },
        {
          title: "应急处置",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/hurry.png",
          pathBtn: `/${this.$config.view.route_pre}/NormalState`
        },
        {
          title: "警情研判",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/jingqing.png",
          pathBtn: `/${this.$config.view.route_pre}/Warning`
        },
        {
          title: "情报舆情",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/yuqing.png",
          pathBtn: `/${this.$config.view.route_pre}/PublicMsg`
        },
        {
          title: "交通大数据",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/trafic.png",
          pathBtn: `/${this.$config.view.route_pre}/Trafic`
        },
        {
          title: "治安大数据",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/zhian.png",
          pathBtn: `/${this.$config.view.route_pre}/Security`
        },
        {
          title: "欢迎页",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/welcome.png",
          pathBtn: `/${this.$config.view.route_pre}/welcome`
        },
         {
          title: "县局展示页",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/zhian.png",
          pathBtn: `/${this.$config.view.route_pre}/welcome`
        },
        {
          title: "区域安保",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/anbao.png",
          pathBtn: `/${this.$config.view.route_pre}/welcome`
        },
         {
          title: "视频监控",
          imgSrc: "statics/img/homeBtn/footer.png",
          imgSrc1: "statics/img/homeBtn/shipin.png",
          pathBtn: `/${this.$config.view.route_pre}/welcome`
        }
      ],
      navSysLists: [
        {
          title: "文档",
          imgSrc: "statics/img/userBtn/btnlogo.png",
          imgSrc1: "statics/img/userBtn/txt.png",
          pathBtn: "/manager/login"
        },
        {
          title: "管理后台",
          imgSrc: "statics/img/userBtn/btnlogo.png",
          imgSrc1: "statics/img/userBtn/backSys.png",
          pathBtn: "/manager/login"
        },
        {
          title: "系统桌面",
          imgSrc: "statics/img/userBtn/btnlogo.png",
          imgSrc1: "statics/img/userBtn/desk.png",
          pathBtn: "/manager/login"
        },
        {
          title: "应用",
          imgSrc: "statics/img/userBtn/btnlogo.png",
          imgSrc1: "statics/img/userBtn/sys.png",
          pathBtn: "/manager/login"
        },
        {
          title: "高分地图",
          imgSrc: "statics/img/userBtn/btnlogo.png",
          imgSrc1: "statics/img/userBtn/map.png",
          pathBtn: "/manager/login"
        },
        // {
        //   title: "帮助",
        //   imgSrc: "statics/img/userBtn/btnlogo.png",
        //   imgSrc1: "statics/img/userBtn/hurry.png"
        // },
        {
          title: "帮助",
          imgSrc: "statics/img/userBtn/btnlogo.png",
          imgSrc1: "statics/img/userBtn/help.png",
          pathBtn: "/manager/login"
        }
      ]
    };
  }
};
</script>
<style scoped>
.navAll {
  height: 95%;
  width: 90%;
}
.navPage {
  /* background: pink; */
  height: 75%;
  width: 100%;
}
.navSys {
  /* background: skyblue; */
  height: 25%;
}
.navPageList {
  height: 100%;
  /* border: 1px solid green; */
  display: flex;
  flex-wrap: wrap;
  /* display: -webkit-flex; */
  /* align-items: flex-end; */
  justify-content: space-between;
}

.navPageList li {
  /* background: blue; */
  /* border:1px solid red; */
  width: 15%;
  height: 30%;
}
.navPageList li:hover {
  cursor: pointer;
}
.navPageList li:nth-child(7) {
  margin-left: 3%;
}
.navPageList li:nth-child(8) {
  margin-left: -28%;
}
.navPageList li:nth-child(9) {
  margin-right: -28%;
}
.navPageList li:last-child {
  margin-right: 3%;
}
.navPageList li p {
  font-size: 0.7vw;
  font-family: 'lv';
  margin-top:1.0vw;
  letter-spacing: 0.2vw;
}
.navPageList li p img {
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.navPageList li .roteBox img:last-child {
  width: 20%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -25%);
}

.navSysList {
  display: flex;
  /* display: -webkit-flex; */
  align-items: flex-end;
  justify-content: space-between;
  height: 100%;
}
.navSysList li {
  float: left;
  width: 3vw;
  height: 4vw;
}
.navSysList li:last-child,
.navSysList li:nth-child(4),
.navSysList li:nth-child(5) {
  float: right;
}
.navSysList li p {
  font-size: 0.6vw;
}

.roteBox {
  /* border:1px solid red; */
  position: relative;
  height: 80%;
}

.navSysList li .roteBox .baseImg {
  position: absolute;
  width: 40%;
  top: 40%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1002;
}
.navSysList li:hover {
  cursor: pointer;
}
.navSysList li:hover .baseImg {
  transition: all 0.3s linear;
  top: 25%;
  /* transform: translateY(-50%); */
}

.navSysList li .roteBox .roteImg {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: -30%;
  width: 100%;
  transform: rotateX(70deg);
  animation: haha1 2s linear infinite;
}
@keyframes haha1 {
  0% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(0deg);
  }

  25% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(90deg);
  }

  50% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(180deg);
  }

  75% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(270deg);
  }

  100% {
    -webkit-transform: translateX(-50%) rotateX(70deg) rotateZ(360deg);
  }
}

/* 光圈 */
/* .shadow {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: red;
} */

.shadow:before {
	position: absolute;
    top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
	content: '';
	width: 0.5vw;
	height: 0.5vw;
	border-radius: 100%;
	border-bottom: 0 solid #ffffff05;
	
	box-shadow: 
		/* 0 -10px 20px 20px #ffffff40 inset,
		0 -5px 15px 10px #ffffff50 inset,
		0 -2px 5px #ffffff80 inset,
		0 -3px 2px #ffffffBB inset,
		0 2px 0px #ffffff,
		0 2px 3px #ffffff,
		0 5px 5px #ffffff90,
		0 10px 15px #ffffff60,
		0 10px 20px 20px #ffffff40; */
    0 -0.5vw 1vw 1vw #46d2d340 inset,
		0 -0.25vw 0.75vw 0.75vw #46d2d350 inset,
		0 -0.1vw 0.75vw #46d2d380 inset,
		0 -0.15vw 0.1vw #46d2d3BB inset,
		0 0.1vw 0vw #46d2d3,
		0 0.1vw 0.15vw #46d2d3,
		0 0.25vw 0.25vw #46d2d390,
		0 0.5vw 0.75vw #46d2d360,
		0 0.5vw 1vw 1vw #46d2d340;
	filter: blur(0.3vw);
	animation: 2s rotate linear infinite;
}

@keyframes rotate {
	100% {
		transform:translate(-50%, -50%) rotate(360deg)
	}
}
</style>
