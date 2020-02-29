<template>
<!-- 待修改 -->
    <div class="letterList">
      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>

      <div
        class="imgContainer"
        @mouseenter.capture="showMessage"
        @mouseleave.capture="hiddenMessage"
      >
        <img src="../../assets/testImage/016101.jpg" />
        <div class="imgMessage">
          <span>侨批名称1</span>
          <span>1955年</span>
          <span>积分：1</span>
          <span>难度系数：易</span>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Edit',
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
      console.log(
        "EVENT:",
        event.target.options[event.target.options.selectedIndex].value
      );
      if (
        event.target.options[event.target.options.selectedIndex].value ===
        "待抄录"
      )
        this.isNotCompleted = true;
    },
    translate(event) {
      if (this.isNotCompleted) {
        this.writeImg = event.target.src;
        this.isCover = true;
      }
    }
  }
}
</script>

<style  scoped>
.letterList {
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
}
.letterList .imgContainer {
  width: calc(100% / 2 - 80px);
  height: calc(50px + 20vw);
  border: 1px solid black;
  box-sizing: border-box;
  position: relative;
  display: inline-block;
  margin:0;
}
.imgContainer img {
    widows: 100%;
    height: 100%;
}
@media screen and (max-width: 1030px) {
  .letterList {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .letterList .imgContainer {
    width: calc(100% / 2);
  }
  .imgMessage {
    position: absolute;
    top: 60%;
    left: 0;
    width: 100%;
    height: 40%;
    background: #bcb397;
    color: white;
    display: none;
    font-size:20px;
  }
}
@media screen and (max-width: 780px) {
    .letterList {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
  }
  .letterList .imgContainer {
    width: calc(100%);
  }
  .imgMessage {
    position: absolute;
    top: 60%;
    left: 0;
    width: 100%;
    height: 40%;
    background: #bcb397;
    color: white;
    display: none;
    font-size:20px;
  }
}

.imgContainer img {
  width: 100%;
  height: 100%;
}
.imgMessage {
  position: absolute;
  top: 65%;
  left: 0;
  width: 100%;
  height: 35%;
  background: #bcb397;
  color: white;
  display: none;
}
.imgMessage span {
  width: 100%;
  height: 22%;
  font-size: 1vw;
  display: block;
  margin: 0 0.2vw;
  text-align: center;
}
</style>