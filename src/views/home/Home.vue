<template>
    <div id="home">
        <nav-bar class="nav-home">
            <h2 slot="center">购物街</h2>
        </nav-bar>  
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default{
        name:'Home',
        components:{
            NavBar
        }
    }
</script>


<style scoped>
    .nav-home{
        background-color: pink;
        color: #fff;
        font-size: 14px;
    }

    .nav-home h2{
        font-weight: 400;
    }
</style>