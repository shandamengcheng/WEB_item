<template>
  <div class="system">
    <div class="sysTitle">
      <div class="titleText">
        <img src="../../assets/image/title.png" />
        <h1>众包系统</h1>
      </div>
    </div>
    <div class="cover" v-if="checkImg===true" @click.stop="changeCheck">
      <div class="imgShow">
        <h1>{{letterName}}</h1>
        <div class="detail">
          <div class="imgInfor">
            <p>年份：{{year}}</p>
            <p>发出地址：吉隆坡</p>
            <p>收件地址：汕头</p>
            <p>{{difficulty}}</p>
            <p>{{integral}}</p>
          </div>
          <div class="img">
            <img v-bind:src="displaySrc" />
          </div>
        </div>
      </div>
    </div>

    <div class="sysDisplay">
      <select name="sort" id="sort">
        <option value="难度等级排序" disabled selected>难度等级排序</option>
        <option value="从高到低">从高到低</option>
        <option value="从低到高">从低到高</option>
      </select>
      <div class="letterDis">
        <div class="letter-item">
          <img src="../../assets/testImage/016129.jpg" @click="displayImg" />
          <div class="letterDetail">
            <p>侨批名称1</p>
            <p>1955年</p>
            <p>积分：3</p>
            <p>难度系数：易</p>
            <input type="button" value="领取" class="getBtn" />
          </div>
        </div>
        <div class="letter-item">
          <img src="../../assets/testImage/016003.jpg" @click="displayImg" />
          <div class="letterDetail">
            <p>侨批名称2</p>
            <p>1956年</p>
            <p>积分：5</p>
            <p>难度系数：易</p>
            <input type="button" value="领取" class="getBtn" />
          </div>
        </div>
        <div class="letter-item">
          <img src="../../assets/testImage/016007.jpg" @click="displayImg" />
          <div class="letterDetail">
            <p>侨批名称3</p>
            <p>1957年</p>
            <p>积分：4</p>
            <p>难度系数：易</p>
            <input type="button" value="领 取" class="getBtn" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "System",
  data() {
    return {
      displaySrc: "",
      checkImg: false,
      letterName:'',
      year:'',
      integral:'',
      difficulty:''
    }
  },
  methods: {
    displayImg(event) {
    let childP = event.path[1].children[1].children;
      this.letterName = childP[0].innerHTML;
      this.year = childP[1].innerHTML;
      this.integral = childP[2].innerHTML;
      this.difficulty = childP[3].innerHTML;
      this.displaySrc = event.target.src;
      this.checkImg = true;
    },
    changeCheck() {
      this.checkImg = false;
    }
  }
};
</script>

<style scoped>
.system {
  overflow-y: hidden;
  position: relative;
}
.sysTitle {
  width: 100%;
  height: 40vw;
  background: url("../../assets/testImage/016129.jpg") no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  border: 1px solid #585656;
  /* opacity: 0.9; */
}
.titleText {
  width: 50%;
  height: 60%;
  display: flex;
  margin: auto;
  margin-top: 8vw;
  flex-direction: column;
}
.titleText img {
  width: 20%;
  height: 40%;
  display: flex;
  margin: auto;
  margin-bottom: 0;
}
.titleText h1 {
  font-size: 5vw;
  text-align: center;
  letter-spacing: 1vw;
  font-family: STXingkai;
}
.cover {
  width: 100%;
  /* height: 100%; */
  position:fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background: white;
  opacity: 0.8;
  z-index: 30;
}
.imgShow {
  width: 90%;
  height: 80%;
  /* position: absolute; */
  /* position:relative; */
  position:fixed;
  /* margin-top:-25%; */
  top:10%;
  bottom:10%;
  left: 5%;
  background: black;
  z-index: 40;
  border-radius: 10px;
}
.imgShow h1 {
  color:white;
  font-size: 2vw;
  text-align: center;
  letter-spacing: .5vw;
}
.detail {
  width:100%;
  height:80%;
  margin-top:5%;
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
  width: 40%;
  height: 90%;
}
.img img {
  width: 100%;
  height: 90%;
}
.sysDisplay {
  margin-top: 3vw;
}
#sort {
  display: block;
  width: 18vh;
  height: 5vh;
  margin-left: 6%;
  font-size: 1vw;
  background-color: #bcb397;
}
.letterDis {
  overflow-y: hidden;
}
.letter-item {
  width: 80%;
  margin: auto;
  /* height: 25vw; */
  height: 40vh;
  margin-top: 3vw;
  display: flex;
  overflow-y: hidden;
  /* border:1px solid red; */
}
.letter-item img {
  width: 20%;
  /* height: 19vw;
  margin-top:3vw; */
  height: 26vh;
  margin-top: 7vh;
}
.letterDetail {
  width: 40%;
  margin-left: 10%;
  height: 100%;
  letter-spacing: 0.3vw;
}
.letterDetail p:first-child {
  margin-top: 7vh;
}
.letterDetail p {
  font-size: 1.3vw;
  margin-top: 2vh;
  margin-bottom:2vh;
}
.letterDetail input {
  width: 10vh;
  height: 4vh;
  border: none;
  background-color: #bcb397;
  border-radius: 5px;
  outline: none;
  letter-spacing: 0.1vw;
  margin-left: 0.3vw;
  margin-top: 1vw;
  font-size: 0.8vw;
}
.letterDetail input:hover {
  opacity: 0.8;
}
.letterDetail input:active {
  border: 1px solid black;
  box-shadow: 1vh 1vh 2vh #585656;
}
</style>