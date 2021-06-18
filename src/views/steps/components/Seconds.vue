<template>
    <div>
        第二步
    </div>
</template>
<script>
export default {
    data() {
    return {
        firstForm:{
            name: "second",
            mes: "这是第二步的数据消息",
        }
    };
  },
  methods:{
      receive(){
          return new Promise((resolve)=>{
              this.$emit("updateForm", this.firstForm)
              resolve()
          })
      }
  }
}
</script>