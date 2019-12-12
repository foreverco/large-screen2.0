<template>
  <div style="height: 100%" id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='less'>
@import './common/fonts/font.css';
#app {
  font-family: Helvetica, sans-serif;
  text-align: center;
}
</style>
