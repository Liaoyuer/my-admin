<template>
    <div>
        <div class="flex">
            <el-input class="phone-input" v-model="phone" placeholder="请输入手机号码"></el-input>
            <el-button type="primary">主要按钮</el-button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
       return{
           phone: ""
       } 
    },
}
</script>
<style scoped>
.phone-input{
    width: 200px;
    margin-right: 10px;
}
</style>