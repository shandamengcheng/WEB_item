<template>
  <div class="selfinfor">
    <div class="uls">
      <ul class="selfinfor-list">
        <li>用户名:</li>
        <li>账号:</li>
        <li>个人简介:</li>
        <li>积分:</li>
        <li>邮箱:</li>
      </ul>
      <ul class="selfinfor-list">
        <li>汕大百事通</li>
        <li>210293213</li>
        <li>汕大的优秀首家发布埃及宋代阿斯哦覅</li>
        <li>66666</li>
        <li>17zhz@stu.edu.cn</li>
      </ul>
    </div>

    <input type="button" value="修改密码" class="editBtn" />
  </div>
</template>

<script>
export default {
  name: "Selfinfor"
};
</script>

<style scoped>
.selfinfor {
  color: #bcb397;
  background: white;
}
.uls {
  display: flex;
  justify-content: center;
}
.selfinfor-list {
  padding: 0;
  list-style-type: none;
  width: 40%;
  height: 50vh;
}
.selfinfor-list:first-child {
  width: 30%;
}
.selfinfor-list li {
  height: 10vh;
}
.editBtn {
  width: 40%;
  height: 5vh;
  font-size: 1.2vw;
  margin: auto;
  display: block;
  color: black;
  background: #bcb397;
  outline: none;
}
</style>