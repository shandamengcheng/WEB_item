<template>
  <div class="tabbar">
    <img src="../assets/image/menu.png" class="menuImg" />
    <menuli v-if="displayMenu===true"></menuli>
  </div>
</template>

<script>
import Menuli from "./menu";
export default {
  name: "Tabbar",
  data() {
    return {
      displayMenu: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollToTop);
    window.addEventListener("click", this.clickPage);
  },
  components: {
    Menuli
  },
  methods: {
    scrollToTop() {
      this.displayMenu = false;
    },
    clickPage(event) {
      console.log(event.target);
      console.log(event.target.classList);
      if(event.target.classList.contains("menuImg"))
      this.displayMenu = !this.displayMenu
      else
      this.displayMenu = false;
      console.log(this.displayMenu)
    }
  }
};
</script>

<style scoped>
.tabbar {
  width: 100%;
  height: 4vw;
  background: black;
}
.tabbar img:first-child {
  width: 3%;
  height: 100%;
  position: relative;
  top: 0;
  left: 0.6vw;
  z-index: 2;
}
</style>