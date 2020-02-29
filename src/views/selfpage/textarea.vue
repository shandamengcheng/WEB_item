<template>
  <div class="edit">
    <div id="editorElem" style="text-align:left"></div>
    <button v-on:click="getContent" class="checkBtn">提交</button>
    <!-- <button @click="submitContent" class="submitBtn">提交</button> -->
  </div>
</template>


<script>
import E from "wangeditor";
export default {
  name: "editor",
  data() {
    return {
      editorContent: ""
    };
  },
  methods: {
    getContent: function() {
      alert(typeof this.editorContent);
    }
  },
  mounted() {
    var editor = new E("#editorElem");
    editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
    editor.customConfig.menus = [
      "head", // 标题
      "bold", // 粗体
      "fontSize", // 字号
      "fontName", // 字体
      "italic", // 斜体
      // "underline", // 下划线
      "strikeThrough", // 删除线
      "foreColor", // 文字颜色
      "backColor", // 背景颜色
      // "link", // 插入链接
      // "list", // 列表
      "justify", // 对齐方式
      // "quote", // 引用
      // "emoticon", // 表情
      // "image", // 插入图片
      // "table", // 表格
      // "video", // 插入视频
      // "code", // 插入代码
      "undo", // 撤销
      "redo" // 重复
    ];
    editor.create();
  }
};
</script>

<style scoped>
.edit {
  width: 100%;
  height: 100%;
}
#editorElem {
  cursor: text;
  width: 100%;
  height: 95%;
  display: flex;
  flex-flow: column nowrap;
}
.checkBtn {
  width: 100px;
  height: 30px;
  margin: auto;
  margin-top: 5px;
  border-radius: 3px;
  display: block;
  background: white;
  color: black;
  outline: none;
}
/* .submitBtn {
  width: 100px;
  height: 30px;
  margin-left: calc((100% - 200) / 4);
  margin-left: 50px;
  margin-top: 5px;
  border-radius: 3px;
  display: inline-block;
  background: white;
  color: black;
  outline: none;
} */
</style>