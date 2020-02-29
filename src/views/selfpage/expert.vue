<template>
  <div class="expert">
    <div class='notExpert'>
      <span>您还不是专家哦，点击进行<a href="#">专家验证</a></span>
    </div>
    <div class="confromExpert">

    </div>
  </div>
</template>

<script>
export default {
  name: "Expert"
};
</script>

<style scoped>
.expert {
    width:100%;
    height:100%;
    position: relative;
}
.notExpert {
  position:absolute;
  top:30%;
  left:10%;
  right:10%;
    width:80%;
    height:20%;
    font-size: 3vw;
    /* margin:auto; */
}
.notExpert span {
  display:flex;
  flex-flow: row wrap;
  width:100%;
  height: 100%;
  margin:auto;
  justify-content: center;
  /* align-self: center; */
  align-items: center;
}
.notExpert a {
    text-decoration: none;
}
</style>