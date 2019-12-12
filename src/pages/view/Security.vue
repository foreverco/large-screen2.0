<template>
  <div class='trafic'>
       <Header :isShow='isShow' style='height:11%'></Header>
  </div>
</template>

<script>
import Header from '../../components/view/Header'
export default {
  data () {
    return {
      isShow:true,
    };
  },
  components:{
      Header
  }
}

</script>
<style scoped>
.trafic {
  background: url("../../assets/view/img/userhomeBg.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>