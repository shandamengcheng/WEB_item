<template>
  <div class="selfPage">
    <aside class="selfNav">
      <img src="../../assets/testImage/016065-1.jpg" class="titleImg" />
      <label>用户名</label>
      <div class="changeTitle">
        <input type="file" class="uploadHead" />
        <input type="button" value="更换头像" class="uploadBtn" />
      </div>
      <ul class="inforList">
        <li class="list-item">
          <router-link to="/selfpage/selfinfor">
            <span>个人资料</span>
          </router-link>
        </li>
        <li class="list-item">
          <router-link to="/selfpage/myTask">
            <span>我的任务</span>
          </router-link>
        </li>
        <li class="list-item">
          <router-link to="/selfpage/myNews">
            <span>我的消息</span>
          </router-link>
        </li>
        <li class="list-item">
          <router-link to="/selfpage/expert">
            <span>专家界面</span>
          </router-link>
        </li>
        <li class="list-item">
          <router-link to="/selfpage/rank">
            <span>积分排名</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <main class="display">
        <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: "Selfpage"
};
</script>

<style scoped>
.selfPage {
  width: 100%;
  height: 110vh;
  position: relative;
  z-index: 0;
  background: #f8f8f8;
  /* overflow: hidden; */
}
.selfPage::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: transparent url("../../assets/testImage/016094-1.jpg") no-repeat;
  background-position: center;
  background-size: 100% 100%;
  z-index: -1;
  opacity: 0.5;
}
.selfNav {
  border-radius: 1vw;
  width: 28vw;
  margin-left: 3vh;
  margin-right: 3vh;
  margin-top: 5vh;
  height: 98vh;
  background: #bcb397;
  position: absolute;
  top: 0;
  left: 0;
  font-size: 1.2vw;
}
.display {
  border-radius: 1vw;
  
  width:calc(65vw - 4vh);
  margin-left: 1vh;
  margin-right: 4vh;
  margin-top: 5vh;
  height: 100vh;
  color: #bcb397;
  background:white;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 1.2vw;
  overflow-y:auto;
}
.titleImg {
  display:block;
  width: 16vw;
  height: 16vw;
 margin:auto;
  margin-top: 2vh;
  border-radius: 50%;
}
.selfNav label {
  display: block;
  width: 90%;
  height: 4vh;
  text-align: center;
  margin: auto;
  line-height: 4vh;
  margin-top: 0.2vw;
  font-size: 1.3vw;
  letter-spacing: 0.1vw;
}
.changeTitle {
  width: 100%;
  height: 5vh;
  margin-top: 2vh;
  position: relative;
}
.uploadHead {
  width: 50%;
  height: 5vh;
  display: inline-block;
  position: absolute;
  left:25%;
  opacity: 0;
}
.uploadBtn {
  width: 50%;
  height: 5vh;
  margin:auto;
  display:block;
  background:#ada372;
  outline:none;
  font-size: 1.2vw;
  border:none;
}
.inforList {
  padding: 0;
  list-style: none;
  height: 40vh;
}
.list-item {
  width: 100%;
  height: 8vh;
  box-sizing: border-box;
  border-top: 1px solid #585656;
  border-bottom: 1px solid #585656;
}
.list-item * {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 8vh;
  text-align: center;
  text-decoration: none;
  color: black;
  font-size: 1.3vw;
}
</style>