<template>
  <div class="viewer">
    <vc-viewer>
      <vc-layer-imagery></vc-layer-imagery>
    </vc-viewer>
  </div>
</template>

<script>
    export default {
        name: "Cesium"
    }
</script>

<style scoped>
  .viewer {
    width: 100%;
    height: 400px;
  }
</style>
