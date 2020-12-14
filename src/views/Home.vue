<template>
    <div>
        Home
        <button @click="con">打印</button>
        <ueditor v-model="aaa"/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            aaa: ""
        }
    },
    methods: {
        con(){
            console.log("123",this.aaa)
        }
    },
}
</script>