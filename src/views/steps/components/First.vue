<template>
  <div class="first-step">
    <el-button type="success" plain @click="infoVisit = true"
      >打开弹窗</el-button
    >
    <info-pop :visible.sync="infoVisit" />
    <child v-model="message" @fromChild="fromChild" />
    <table width="100%" border="1">
      <col align="left" v-for="(i, index) in 11" :key="index" />
      <!-- <col align="left" />
      <col align="right" /> -->
      <tr>
        <th v-for="(i, index) in 11" :key="index">i</th>
        <!-- <th>Title</th>
        <th>Price</th> -->
      </tr>
      <tr>
        <td v-for="(i, index) in 11" :key="index">3476896</td>
        <!-- <td>My first HTML</td>
        <td>$53</td> -->
      </tr>
    </table>
    {{formData.name}}={{this.$store.state.name}}
    <fixed-popup :visible="dialogVisible" title="你好"></fixed-popup>
  </div>
</template>
<script>
import infoPop from "../didLog/InfoPop";
import Child from "../didLog/Child";
import FixedPopup from "../../components/fixedPopup/FixedPopup";
import { mapState } from "vuex";
export default {
  components: {
    infoPop,
    Child,
    FixedPopup,
  },
  data() {
    return {
      infoVisit: false,
      dialogVisible: false,
      message: "parents",
      firstForm: {
        name: "first",
        mes: "这是第一步的数据消息",
      }
    };
  },
  watch: {
    message(n, o) {
      console.log("n,o", n, o);
    },
  },
   computed: {
    ...mapState({
      formData: state => state.formData
    })
  },
  methods: {
    receive() {
      return new Promise((resolve) => {
        this.$emit("updateForm", this.firstForm);
        resolve();
      });
    },
    fromChild(e) {
      this.message = e;
      console.log("e :>> ", e);
    }
  },
};
</script>
<style scoped lang="less">
.first-step {
  .input-form {
  }
}
</style>