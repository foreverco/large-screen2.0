<template>
  <div>
      <div class='mapBox leftBox'>123</div>
      <div class='mapBox rightBox'>456</div>
      <MapView></MapView>
      <!-- <OLMap></OLMap> -->
  </div>
</template>

<script>
import MapView from '../../components/view/mapview/MapView'
// import OLMap from '../../components/cesiumViewer'
export default {
  data () {
    return {
    };
  },
    components:{
        MapView,
        // OLMap
    }
}

</script>
<style>
#app .mapBox{
  height:85%;
  background: red;
  position: absolute;
  z-index: 1002;
  top:11%;
}
#app .leftBox{
  left:0;
}
#app .rightBox{
  right:0;
}
</style>