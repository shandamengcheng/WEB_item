<template>
  <div class="homepage">
    <div class="titlePart">
      <img src="../../assets/image/display.png" />
      <h1 class="title">大众侨批</h1>
      <h2 class="secondTitle">你我笔下的故事</h2>
    </div>

    <div class="img">
      <div class="shadowDiv">
        <!-- <p>一封封侨批</p>
        <p>不仅仅是一封封家书</p>
        <p>更是一部历史!</p> -->
      </div>
      <div class="img-line">
        <img src="../../assets/testImage/016003.jpg" />
        <img src="../../assets/testImage/016005.jpg" />
        <img src="../../assets/testImage/016007.jpg" />
        <img src="../../assets/testImage/016019.jpg" />
      </div>
      <div class="img-line">
        <img src="../../assets/testImage/016003.jpg" />
        <img src="../../assets/testImage/016005.jpg" />
        <img src="../../assets/testImage/016007.jpg" />
        <img src="../../assets/testImage/016019.jpg" />
      </div>
      <div class="img-line">
        <img src="../../assets/testImage/016003.jpg" />
        <img src="../../assets/testImage/016005.jpg" />
        <img src="../../assets/testImage/016007.jpg" />
        <img src="../../assets/testImage/016019.jpg" />
      </div>
    </div>
    <verticaltitle>
      <h1 slot="title">侨批</h1>
      <span
        slot="content"
      >闽南话把书信叫“批”。侨批，俗称“番批”、“银信”，以“银信合一”为基本特征，是指海外侨胞通过民间渠道以及后来的金融、邮政机构寄回国内的连带家书或简单附言的汇款凭证，华侨移民史、创业史及广大侨胞对侨居国和中国经济社会发展所做的贡献的历史真实见证，有着深刻文化内涵和重要的文献价值。</span>
    </verticaltitle>
  </div>
</template>

<script>
import Verticaltitle from "../../components/verticalTitle";
import verticalTitleVue from "../../components/verticalTitle.vue";
export default {
  name: "Homepage",
  components: {
    Verticaltitle
  }
};
</script>

<style scoped>
.titlePart {
  width: 30%;
  margin: auto;
  margin-top: 5vw;
  /* margin-top: 8vh; */
}
.titlePart img {
  display: flex;
  width: 30%;
  height: 30%;
  margin: auto;
}
.title,
.secondTitle {
  color: #bcb397;
  letter-spacing: 0.8vw;
  /* 华文行楷 */
  font-family: STXingkai, Arial, Helvetica, sans-serif;
  text-align: center;
  margin-top: 0.6vw;
  font-size: 1.5vw;
}
.title {
  border-bottom: 1px solid #bcb397;
  margin-top: 1.5vw;
  font-size: 3vw;
  padding-bottom: 0.6vw;
  margin-bottom: 0;
}
.img {
  width: 90%;
  height: 51vw;
  /* height:20vh; */
  margin: auto;
  margin-top: 8vw;
  /* margin-top:10vh; */
  position: relative;
}
.shadowDiv {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: #585656;
  opacity: 0.6;
  z-index: 2;
}
.shadowDiv:hover {
  opacity: 0.7;
}
.img-line {
  width: 100%;
  height: 17vw;
}
.img-line img {
  width: 25%;
  height: 100%;
}
</style>