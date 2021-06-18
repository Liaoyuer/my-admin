<template>
  <div class="layout">
    <p>这个是标题</p>
    <vuedraggable class="wrapper" v-model="list">
      <transition-group>
        <div v-for="item in list" :key="item" class="item">
          <p>{{ item }}</p>
        </div>
      </transition-group>
    </vuedraggable>
    <div class="img">
      <img class="img" :src="pageData" alt="" />
    </div>
  </div>
</template>

<script>
import vuedraggable from "vuedraggable";
import html2Canvas from "html2canvas";
export default {
  name: "HelloWorld",
  components: { vuedraggable },
  props: {},
  data() {
    return {
      list: [1, 2, 34, 4, 54, 5],
      pageData: "",
    };
  },
  mounted() {
    this.getphoto();
  },
  updated() {
    console.log(this.list);
  },
  methods: {
    getphoto() {
      let item = document.querySelector(".layout");
      html2Canvas(item, {
        allowTaint: true,
      }).then((canvas) => {
        this.pageData = canvas.toDataURL("image/jpeg", 1.0);
      });
    },
  },
};
</script>
<style lang="less" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}
.item {
  width: 300px;
  height: 50px;
  background-color: #42b983;
  color: #ffffff;
  margin: 10px 0;
}
img {
  width: 200px;
  height: 200px;
  box-sizing: border-box;
  padding: 10px;
  background: #fff;
  overflow: hidden;
  background: rgba(0, 0, 0, .1);
  .img {
    border: 1px solid #ddd;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    padding: 5px;
  }
}
</style>