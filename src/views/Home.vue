<template>
    <div>
        Home
        <img :src="`${publicPath}mark.ico`" alt="">
        <ueditor/>
    </div>
</template>
<script>
export default {
    data(){
        return{
            publicPath: process.env.BASE_URL
        }
    },
    methods: {
        aaa(e){
            console.log("eee",e)
        }
    },
}
</script>