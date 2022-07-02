<template>
    <div class="recommend">
        <div class="item" v-for="item in recommends">
            <a :href="item.link">
                <img :src="item.image" alt="">
                <div>{{item.title}}</div>
            </a>
        </div>
    </div>
</template>

<script>
    export default{
        name:'HomeRecommendView',
        props:{
            recommends:{
                type:Array,
                default(){
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    a{
        text-decoration: none;
        color: black;
    }
    .recommend{
        display: flex;
        width: 100%;
        font-size: 12px;
        padding:10px 0 20px;
        border-bottom: 8px solid #eee;
    }

    .item img{
        width: 68px;
        height: 68px;
        margin-bottom:10px;
    }

    .item{
        flex: 1;
        text-align: center;
    }
</style>