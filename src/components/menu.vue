<template>
  <div class="menuBar">
    <ul class="menu">
      <li>
        <img src="../assets/image/search.png" />
        <span>搜索</span>
      </li>
      <li>
        <router-link to="/homepage">
          <img src="../assets/image/first.png" />
          <span>首页</span>
        </router-link>
      </li>
      <li>
        <router-link to="/system">
          <img src="../assets/image/system.png" />
          <span>众包系统</span>
        </router-link>
      </li>
      <li>
        <router-link to="/aboutus">
          <img src="../assets/image/us.png" />
          <span>关于我们</span>
        </router-link>
      </li>
      <li>
        <router-link to="/selfpage">
          <img src="../assets/image/self.png" />
          <span>个人中心</span>
        </router-link>
      </li>
      <li>
        <router-link to="/login">
          <img src="../assets/image/login.png" />
          <span>登录</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menuli",
  data() {
    return {};
  }
};
</script>

<style scoped>
.menuBar {
  /* list-style: none;
  padding: 0;
  background: #585656;
  height: 24vw;
  width: 18vw; */
  position: absolute;
  top: 4vw;
  left: 0;
  z-index: 100;
}
.menu {
  list-style: none;
  padding: 0;
  background: #585656;
  height: 24vw;
  width: 18vw;
  margin-top: 0;
  margin-bottom: 0;
}
.menu li {
  box-sizing: border-box;
  width: 100%;
  height: 4vw;
  font-size: 1vw;
  border-bottom: 1px solid white;
  display: flex;
  color: white;
}
.menu li:hover,
.menu li:active {
  opacity: 0.6;
}
.menu li a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
}
.menu li img {
  height: 50%;
  flex: 1;
  margin: auto;
}
.menu li span {
  flex: 4;
  margin: auto;
  padding-left: 1vw;
}
</style>