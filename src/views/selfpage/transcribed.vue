<template>
  <!-- 待抄录 -->
  <div class="letterList">
    <div class="imgContainer" @mouseenter.capture="showMessage" @mouseleave.capture="hiddenMessage">
      <img src="../../assets/testImage/016101.jpg" @click="translate" />
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
      @dbclick="translate"
    >
      <img src="../../assets/testImage/016101.jpg"  @click="translate" />
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
      @dbclick="translate"
    >
      <img src="../../assets/testImage/016101.jpg"  @click="translate"/>
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
      @dbclick="translate"
    >
      <img src="../../assets/testImage/016101.jpg"  @click="translate"/>
      <div class="imgMessage">
        <span>侨批名称1</span>
        <span>1955年</span>
        <span>积分：1</span>
        <span>难度系数：易</span>
      </div>
    </div>
    <div class="imgContainer" @mouseenter.capture="showMessage" @mouseleave.capture="hiddenMessage">
      <img src="../../assets/testImage/016003.jpg"  @click="translate"/>
      <div class="imgMessage">
        <span>侨批名称1</span>
        <span>1955年</span>
        <span>积分：1</span>
        <span>难度系数：易</span>
      </div>
    </div>
    <div class="imgContainer" @mouseenter.capture="showMessage" @mouseleave.capture="hiddenMessage">
      <img src="../../assets/testImage/016005.jpg"  @click="translate"/>
      <div class="imgMessage">
        <span>侨批名称1</span>
        <span>1955年</span>
        <span>积分：1</span>
        <span>难度系数：易</span>
      </div>
    </div>
    <div class="imgContainer" @mouseenter.capture="showMessage" @mouseleave.capture="hiddenMessage">
      <img src="../../assets/testImage/016007.jpg"  @click="translate"/>
      <div class="imgMessage">
        <span>侨批名称1</span>
        <span>1955年</span>
        <span>积分：1</span>
        <span>难度系数：易</span>
      </div>
    </div>
    <div class="imgContainer" @mouseenter.capture="showMessage" @mouseleave.capture="hiddenMessage">
      <img src="../../assets/testImage/016019.jpg"  @click="translate"/>
      <div class="imgMessage">
        <span>侨批名称1</span>
        <span>1955年</span>
        <span>积分：1</span>
        <span>难度系数：易</span>
      </div>
    </div>

    <div class="cover" v-if="write===true" @click="changeCheck">
      <div class="imgShow">
        <h2>{{letterName}}</h2>
        <div class="detail">
          <!-- <div class="imgInfor">
            <p>年份：{{year}}</p>
            <p>发出地址：吉隆坡</p>
            <p>收件地址：汕头</p>
            <p>{{difficulty}}</p>
            <p>{{integral}}</p>
          </div>-->
          <div class="img">
            <img v-bind:src="displaySrc" />
          </div>
          <div class="writeArea">
            <editor></editor>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import editor from "../selfpage/textarea";
export default {
  name: "Transcribed",
  components: {
    editor
  },
  data() {
    return {
      displaySrc: "",
      write: false,
      letterName: "",
      year: "",
      integral: "",
      difficulty: ""
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
    translate(event) {
      let childP = event.path[1].children[1].children;
      this.letterName = childP[0].innerHTML;
      this.year = childP[1].innerHTML;
      this.integral = childP[2].innerHTML;
      this.difficulty = childP[3].innerHTML;
      this.displaySrc = event.target.src;
      this.write = true;
      document.body.style.overflow = "none";
    },
    changeCheck(event) {
      if (event.path[0].classList.contains("cover")) this.write = false;
    }
  }
};
</script>

<style scoped>
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
  margin: 0;
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
    font-size: 20px;
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
    font-size: 20px;
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

.cover {
  width: 100%;
  position: fixed;
  /* position: absolute; */
  top: 0;
  left: 0;
  bottom: 0;
  background: white;
  opacity: 0.9;
  z-index: 30;
}
.imgShow {
  width: 90%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 5%;
  background: black;
  z-index: 40;
  border-radius: 10px;
}
@media screen and (max-width: 1000px) {
  .imgShow {
    width: 100%;
    height: 80%;
    position: absolute;
    top: 10%;
    bottom: 10%;
    left: 0;
    background: black;
    z-index: 40;
    border-radius: 10px;
  }
  .img {
    width: 30%;
    height: 60%;
  }
  .writeArea {
    width: 70%;
    height: 80%;
  }
}

.imgShow h2 {
  color: white;
  font-size: 2vw;
  text-align: center;
  letter-spacing: 0.5vw;
  margin:0;
}
.detail {
  width: 100%;
  height: 93%;
  margin-top: 1%;
  display: flex;
  justify-content: space-evenly;
}
.imgInfor {
  width: 30%;
  height: 90%;
  color: white;
  font-size: 1.5vw;
}
.img {
  width: 45%;
  height: 99%;
}
.img img {
  width: 100%;
  height: 100%;
}
.writeArea {
  width: 50%;
  /* width: 100%; */
  height: 80%;
}
.writeArea * {
  width: 100%;
  height: 100%;
  font-size: 1.5vw;
  outline: none;
  color: white;
}
</style>