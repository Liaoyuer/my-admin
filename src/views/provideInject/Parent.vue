<template>
    <div>
        我是父组件=={{msg}}
        <child></child>
        <el-button @click="changeParent">改变父组件数据</el-button>
    </div>
</template>
<script>
import Child from "./Child.vue";
export default {
    components:{
        Child
    },
    data() {
        return{
            msg: "我是父级的信息",
            aa: "aa",
            bb: "bb"
        }
    },
    provide(){
        return {
            message: this.msg,
            $page: this
        }
    },
    methods:{
        changeParent(){
            this.$nextTick(()=>{
                this.msg = "改变来自父组件的消息，嘿嘿"
                this.bb = "bbb"
            })
      },
    }
}
</script>