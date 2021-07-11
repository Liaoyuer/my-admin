<template>
    <div>
        我是孙孙组件：{{message}},{{childmessage}}
    </div>
</template>
<script>
export default {
    inject: ["message","childmessage","$page"],
    data() {
        return{

        }
    },
    created(){
        console.log('$page',this.$page);
    }
}
</script>