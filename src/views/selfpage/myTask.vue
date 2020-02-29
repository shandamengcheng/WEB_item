<template>
  <div class="taskList">
    <select name="sort" id="tasksort" @change="changeData">
      <option value="全部任务" disabled selected>全部任务</option>
      <option value="待抄录">
    待抄录
        </option>
      <option value="待审核">
       待审核
        </option>
      <option value="待修改">
        待修改
        </option>
      <option value="已完成">
        已完成
        </option>
    </select>
    <div class="letterList">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// import Textareapart from './textarea'
export default {
  name: "MyTask",
  components: {
    // Textareapart
  },
  data() {
    return {
      isNotCompleted: false,
      writeImg: "",
      isCover: false
    };
  },
  methods: {
    showMessage(event) {
      if (event.target.parentNode.children[1].classList.contains("imgMessage"))
        event.target.parentNode.children[1].style.display = "block";
    },
    hiddenMessage(event) {
      if (event.target.parentNode.children[1].classList.contains("imgMessage"))
        event.target.parentNode.children[1].style.display = "none";
    },
    changeData(event) {
      
      let str = event.target.options[event.target.options.selectedIndex].value
      if (
        event.target.options[event.target.options.selectedIndex].value ===
        "待抄录")
         this.$router.push({ path: 'transcribed' });
         else 
         if (
        event.target.options[event.target.options.selectedIndex].value ===
        "待审核")
         this.$router.push({ path: 'audit' });
         else if (
        event.target.options[event.target.options.selectedIndex].value ===
        "待修改")
         this.$router.push({ path: 'edit' });
         else if (
        event.target.options[event.target.options.selectedIndex].value ===
        "已完成heng")
         this.$router.push({ path: 'completed' });
    },
    translate(event) {
      if (this.isNotCompleted) {
        this.writeImg = event.target.src;
        this.isCover = true;
      }
    }
  }
};
</script>

<style scoped>
#tasksort {
  margin-top: 1vw;
  display: block;
  width: 12vh;
  height: 5vh;
  border-radius: 0.5vw;
  margin-left: 2%;
  font-size: 0.9vw;
  background-color: #bcb397;
  outline: none;
}

option {
  font-size: 0.6vw;
  width: 5vh;
}
.letterList {
  width: 95%;
  margin-left: calc(5% / 2);
  margin-top: 1vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}

.cover {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  background: white;
  opacity: 0.8;
  z-index: 3;
}
.writeLetter {
  width: 100%;
  height: 50%;
  margin-top: 50%;
  position: absolute;
  top: -25%;
  left: 0;
  background: black;
  opacity: 0.5;
}
.writeImage {
  width: 40%;
}
</style>