<template>
  <div class="vertCom">
    <div class="vertical">
      <slot name="title"></slot>
    </div>
    <div class="text">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Verticaltitle"
};
</script>

<style scoped>
.vertCom {
  width: 50%;
  margin: auto;
  /* margin-top: 15vh; */
  margin-top:10vw;
  display: flex;
  flex-direction: row;
  font-family: STKaiti;
  margin-bottom:5vw;
  font-size: 1vw;
}
.vertical {
  writing-mode: vertical-rl;
  border-right: 1px solid #585656;
  flex: 1;
  max-width:10%;
  /* height:100%; */
  text-align: center;
}
.vertical * {
    width:100%;
    /* height: 100%; */
}
.text {
  flex: 4;
  margin: auto;
  text-indent: 4ch;
  margin-left:3vw;
  font-size: 1.5vw;
}
</style>