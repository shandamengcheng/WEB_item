<template>
  <div class="aboutUs">
    <h1>ABOUT US</h1>
    <div class="usInfor">
      <verticaltitle>
        <h1 slot="title">我们的理念</h1>
        <span
          slot="content"
        >利用网络公众的力量，对接汕头大学潮汕特藏馆-侨批数据库，双向招募用户，将高质量的识别信息用于侨批研究。将广大侨批爱好者以及研究人员汇聚在一起，通过大众的力量促进侨批内容识别进程，进而促进有关侨批、潮汕文化的研究。</span>
      </verticaltitle>
      <verticaltitle>
        <h1 slot="title">侨批数据库</h1>
        <span
          slot="content"
        >汕头大学图书馆是潮汕地区唯一一所综合性高校图书馆，做好地方文献收集、整理与开发是我们义不容辞的责任和义务。从2009年起，汕头大学图书馆开始收集侨批，并在大学数字图书馆国际合作计划（CADAL）的资助下开始侨批的数据库建设工作。目前，该侨批数据库已拥有五万余封侨批，并通过网络无偿向广大读者开放使用。</span>
      </verticaltitle>
    </div>

    <h1 class="secondTitle">CONTACT US</h1>
    <div class="contactPart">
      <ul class="contact-item first-ul">
        <li>Contact Info</li>
        <li>
          邮箱:
          <a href="mailto:17mczhu@stu.edu.cn">17mczhu@stu.edu.cn</a>
        </li>
        <li>
          电话:
          <a href="tel:13502941174">13502941174</a>
        </li>
        <li>地址: 广东省汕头市大学路243路</li>
      </ul>
      <ul class="contact-item contactMessage">
        <li>
          <input type="text" placeholder="Your Name" />
        </li>
        <li>
          <input type="text" placeholder="Your Email" />
        </li>
        <li>
          <input type="text" placeholder="Subject" />
        </li>
        <li>
          <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message"></textarea>
        </li>
        <li>
          <input type="button" value="Send Message" class="sendMes"/>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Verticaltitle from "../../components/verticalTitle";
export default {
  name: "Aboutus",
  components: {
    Verticaltitle
  }
};
</script>

<style scoped>
.usInfor {
  display: flex;
}
.usInfor .vertCom {
  height: 15vw;
  /* height:auto; */
  min-height: 20vh;
  max-height: 50vh;
  width: 50%;
  margin: auto;
  margin-left: 2vw;
}
.usInfor .vertCom .vertical {
  border: 1px solid red;
}
.aboutUs > h1 {
  color: #bcb397;
  font-size: 3vw;
  letter-spacing: 0.3vw;
  width: 40%;
  margin: 5vw auto 5vw;
  text-align: center;
  padding-bottom: 0.5vw;
  border-bottom: 1px solid #bcb397;
}
.aboutUs .secondTitle {
  margin-top:10vh;
}
.contactPart {
  height: 30vw;
  display: flex;
  justify-content: space-evenly;
}
.contact-item {
  width: 48%;
  list-style: none;
  padding: 0;
}
.first-ul {
  width:46%;
}
.first-ul li:first-child {
  font-size:2vw;
}
.first-ul li {
  font-size: 1.3vw;
  height: 2vw;
  line-height: 2vw;
  margin-top: 1vw;
  color:#bcb397;
}
/* .first-ul li  */
.contact-item li {
  height: 20%;
}
.contactMessage li {
  height:15%;
  width: 100%;
  margin-top: 1vw;
}
.contactMessage li:first-child {
  margin-top:0;
}
.contactMessage li:nth-last-child(2) {
  height: 30%;
  margin-top:2vw;
}
.contactMessage li:last-child {
  width: 52%;
  margin: auto;
  height: 5vw;
}
li input {
  width: 90%;
  height: 80%;
  border: 1px solid #585656;
  font-size: 1.3vw;
  margin-top:0;
}
.contactMessage li > * {
  width: 90%;
  height: 80%;
  border: 1px solid #585656;
  font-size: 1.3vw;
}
.sendMes {
  outline:none;
  border:0;
}
.sendMes:active {
  box-shadow: .5vw .5vw 1vw #585656;
}
textarea {
  cursor: pointer;
}
</style>