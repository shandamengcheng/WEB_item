<template>
  <div id="app">
    <tabbar ></tabbar>
    <!-- <homepage></homepage> -->
    <router-view></router-view>
    <!-- <editor></editor> -->
  </div>
</template>

<script>
import Tabbar from './components/Tabbar'
// import  editor from './views/selfpage/textarea'
export default {
  name: "App",
  components:{
    Tabbar,
    // editor
  },
  menthods:{
  }
}
</script>

<style>
body {
  margin:0;
  padding:0;
  background:#f8f8f8;
}
</style>
