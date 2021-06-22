<template>
  <div>
    <el-input placeholder="请输入内容" v-model="input" clearable> </el-input>
    <h1>{{ message }}</h1><el-button type="primary" plain @click="emitChild">children-btn</el-button
    >
  </div>
</template>
<script>
export default {
  model: {
    prop: "message", // 这个字段，是指父组件设置 v-model 时，将变量值传给子组件的 msg
    event: "fromChild", // 这个字段，是指父组件监听 parent-event 事件
  },
  props: {
    //此处必须定义和model的prop相同的props，因为v-model会传值给子组件
    message: String,
  },
  data() {
    return {
      input: "",
    };
  },
  methods:{
      emitChild(){
          this.$emit("fromChild", "children");
      }
  }
};
</script>
