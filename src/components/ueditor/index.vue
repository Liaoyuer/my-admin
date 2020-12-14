<template>
  <vue-ueditor-wrap
    class="ueditor"
    ref="ueditor"
    v-model="currentValue"
    :config="config"
    :destroy="true"
    :init="init"
    @before-init="addCustomButtom"
  />
</template>

<script>
// 参考 https://github.com/HaoChuan9421/vue-ueditor-wrap
import Vue from "vue";
import VueUeditorWrap from "vue-ueditor-wrap";
import config from "./ueditor.config";
Vue.component("VueUeditorWrap", VueUeditorWrap);
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  data () {
    return {
      config,
      currentValue: ""
    };
  },
  watch: {
    // 对外提供 v-model
    value: {
      handler (val) {
        if (this.currentValue !== val && val) {
          this.currentValue = val;
        }
      },
      immediate: true
    },
    // 对外提供 v-model
    currentValue (val) {
      this.$emit("input", val);
    }
  },
  methods: {
    init () {
      // 注册一个测试按钮
    },
    addCustomButtom (editorId) {
      const that  = this
      window.UE.registerUI(
        "upload-button",
        function (editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function () {
              editor.execCommand(
                "inserthtml",
                "<span>这是一段由自定义按钮添加的文字</span>"
              );
            }
          });

          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: "上传图片",
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules:
              "background-image: url('/images/icon/icon-upload.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: () => {
              // 这里可以不用执行命令，做你自己的操作也可
              // editor.execCommand(uiName);
              that.uploadImg()
            }
          });
          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        56 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );
    },
    uploadImg () {
      const editor = this.$refs.ueditor.editor
      editor.execCommand(
        "inserthtml",
        "<img src='https://www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png'/>"
      );
    }
  }
};
</script>
