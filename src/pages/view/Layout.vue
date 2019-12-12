<template>
  <div class='layoutView'>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "layout"
};
</script>

<style>
.layoutView {
  height: 100%;
}
.layoutView div {
  height: 100%;
}
</style>
