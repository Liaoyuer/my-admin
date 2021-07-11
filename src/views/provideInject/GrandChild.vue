<template>
    <div>
        我是孙组件：{{message}},{{childmessage}}
        <grand-grand-child></grand-grand-child>
    </div>
</template>
<script>import GrandGrandChild from "./GrandGrandChild.vue";
export default {
    components:{
        GrandGrandChild
    },
    inject: ["message","childmessage"],
    data() {
        return{

        }
    },
}
</script>