<template>
  <div class='area'>
      <MapView></MapView>
  </div>
</template>

<script>
import MapView from '../../../components/view/mapview/MapView'
export default {
  data () {
    return {
    };
  },
  components:{
      MapView
  }
}

</script>
<style scoped>
    .area{
        min-height: calc(100vh - 50px);
        /* height:500px; */
    }
    .mapBox {
  height: 85%;
  background: red;
  position: absolute;
  z-index: 1002;
  top: 11%;
}

</style>