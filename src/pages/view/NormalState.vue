<template>
  <div>
    <div class='mapBox leftBox'>123</div>
    <div class='mapBox rightBox'>456</div>
    <MapView></MapView>
    <!-- <OLMap></OLMap> -->
  </div>
</template>

<script>
import MapView from "../../components/view/mapview/MapView";
// import OLMap from '../../components/cesiumViewer'
export default {
  data() {
    return {
      path: "ws://192.168.0.200:8005/qrCodePage/ID=1/refreshTime=5",
      socket: ""
    };
  },
  components: {
    MapView
    // OLMap
  },

 
};
</script>
<style>
#app .mapBox {
  height: 85%;
  background: red;
  position: absolute;
  z-index: 1002;
  top: 11%;
}
#app .leftBox {
  left: 0;
}
#app .rightBox {
  right: 0;
}
</style>