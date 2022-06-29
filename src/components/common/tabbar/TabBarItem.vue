<template>
    <div class="tabbar-item" @click="itemClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>       
        
        <div :style="activeStyle">
            <slot name="item-text"></slot>
        </div>
        
    </div>
</template>

<script>
    export default{
        name:'TabBarItem',
        props:{
            // 从父组件传递过来的
            path:String,
            activeColor:{
                type: String,
                default: 'red'
            }
        },
        methods:{
            itemClick(){
                // console.log(this.path);
                // this.$router.replace(this.path);
                this.$router.push(this.path);
            }
        },

        computed:{
            isActive(){
                // console.log(this.$route.path);
                // isActive根据当前活跃的路由与点击的路由是否相同来决定
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle(){
                // 根据是否活跃设定字体颜色
                // console.log(this.isActive ? {color:this.activeColor} : {});
                // console.log('---------------------');
                return this.isActive ? {color: this.activeColor} : {};
            }
        }

    }
</script>

<style>
    .tabbar-item{
      flex: 1;
      font-size: 14px;
    }

    .tabbar-item img{
        height: 24px;
        width: 24px;
        vertical-align:middle;
        margin-bottom: 3px;
        margin-top:3px;
    }

</style>