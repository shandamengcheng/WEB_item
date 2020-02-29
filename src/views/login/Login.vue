<template>
  <div class="loginPart">
    <h1>大众侨批</h1>
    <div class="userInfor">
      <label for="username">账号</label>
      <input type="text" id="username" />
      <label class="passLabel">密码</label>
      <input type="password" id="userpassword" />
      <a href="#" class="forgetPass">忘记密码</a>
      <a href="#" class="register">注册</a>
      <input type="button" value="登录" class="loginBtn" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style scoped>
.loginPart {
  width: 90%;
  height: 30vw;
  /* border: 1px solid red; */
  margin: auto;
}
h1 {
  width: 40%;
  height: 3vw;
  font-size: 4vw;
  margin: auto;
  margin-top: 5vw;
  color: #bcb397;
  border-bottom: 2px solid #bcb397;
  padding-bottom: 1vw;
  text-align: center;
  letter-spacing: 1vw;
  font-family: STXingkai;
}
.userInfor {
  width: 100%;
  height: 21vw;
  margin: auto;
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-template-columns: repeat(5, 1fr);
  margin-top: 5vw;
  font-size: 1.6vw;
}
.userInfor > label:first-child {
  grid-area: 1 / 1 / 2 / 2;
  width: 90%;
  height: 5vw;
  display: inline-block;
  margin: 1vw auto;
  color: #bcb397;
  text-align: right;
  line-height: 5vw;
  letter-spacing: 0.5vw;
  outline-style: none;
}
.passLabel {
  grid-area: 2 / 1 / 3 / 2;
  width: 90%;
  height: 5vw;
  display: inline-block;
  margin: 1vw auto;
  color: #bcb397;
  text-align: right;
  line-height: 5vw;
  letter-spacing: 0.5vw;
}
#username {
  grid-area: 1 / 2 / 2 / 6;
  height: 4vw;
  width: 70%;
 outline:none;
 font-size: 1.6vw;
  margin-top: 1.5vw;
  margin-left: 10%;
  border-radius: 1vw;
}
#userpassword {
  grid-area: 2 / 2 / 3 / 6;
  height: 4vw;
  width: 70%;
  outline:none;
 font-size: 1.6vw;
  /* margin: auto; */
  margin-top: 1.5vw;
  margin-left: 10%;
  border-radius: 1vw;
}
.forgetPass {
  grid-area: 3 / 3 / 4 / 4;
  display: inline-block;
  width:80%;
 height: 5vw;
  display: inline-block;
  margin: 1vw auto;
  color: black;
  text-decoration: none;
  text-align: center;
  line-height: 5vw;
  font-size: 1.6vw;
  /* letter-spacing: 0.5vw; */
}
.register {
  grid-area: 3 / 4 / 4 / 5;
   width:80%;
 height: 5vw;
  display: inline-block;
  margin: 1vw auto;
  color: black;
  text-decoration: none;
  text-align: center;
  line-height: 5vw;
  font-size: 1.6vw;
}
.loginBtn {
  grid-area: 3 / 5 / 4 / 6;
  width: 52%;
  /* font-size: 1vw; */
  font-size: 1em;
  height:5vw;
  margin-top:1vw;
  background: #bcb397;
  color:white;
  outline-style: none;
  border-radius: 1vw;
}
</style>