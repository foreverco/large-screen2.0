<template>
  <div class='layoutView'>
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
  name: "layout",
  mounted() {
    this.getTq()
  },
  methods: {
    ...mapActions(['getTq'])
  },
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
