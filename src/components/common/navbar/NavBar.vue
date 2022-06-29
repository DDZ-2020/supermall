<template>
    <div class="nav-bar">
        <div class="left"><slot name="left"></slot></div>
        <div class="center"><slot name="center"></slot></div>
        <div class="right"><slot name="right"></slot></div>   
    </div>
</template>

<script>
    export default{
        name:'NavBar',
        // props:{
        //     color:{
        //         type:String,
        //         default: 'pink'
        //     }
        // },

        // computed:{
        //     bgcColor(){
        //         return {backgroundColor:this.color};
        //     }
        // }
    }
</script>

<style scoped>
    .nav-bar{
        /* 导航栏的高度一般为44px */
        height: 44px;
        line-height: 44px;
        display: flex;
        text-align: center;
    }
    .left, .right{
        width: 60px;
    }

    .center{
        flex:1;
    }
</style>