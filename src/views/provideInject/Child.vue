<template>
    <div>
        我是子组件：{{msg}}
        <grand-child></grand-child>
    </div>
</template>
<script>
import GrandChild from "./GrandChild.vue";
export default {
    components:{
        GrandChild
    },
    provide:{
        childmessage: "我是子级的信息"
    },
    data() {
        return{
            msg: "我是子级的信息"
        }
    },
}
</script>