<template>
    <div id="home">
        <nav-bar class="nav-home">
            <h2 slot="center">购物街</h2>
        </nav-bar>

        <home-swiper class="home-swiper" :banners="banners"></home-swiper>
        <recommend-view :recommends="recommends"></recommend-view>

        <tab-control :titles="titles" @tabClick="tabClick"></tab-control>

        <goods-list :goods="showGoods"></goods-list>
    </div>
</template>

<script>
import NavBar from 'components/common/navbar/NavBar';
import GoodsList from 'components/content/goods/GoodsList'
import TabControl from 'components/content/tabControl/TabControl'

import HomeSwiper from './childComps/HomeSwiper';
import RecommendView from './childComps/HomeRecommendView';

// 面向home.js编程
import { getHomeMultidata } from 'network/home';
import { getHomeGoods } from 'network/home'

export default {
    name: 'Home',
    components: {
        NavBar,
        GoodsList,
        TabControl,

        HomeSwiper,
        RecommendView,

    },
    data() {
        return {
            banners: [],
            recommends: [],

            titles: ['流行', '新款', '精选'],

            currentType: 'pop',

            // 商品数据结构
            goods: {
                'pop': {
                    page: 0,
                    list: []
                },
                'new': {
                    page: 0,
                    list: []
                },
                'sell': {
                    page: 0,
                    list: []
                }
            }
        }
    },
    // 生命周期函数:当组件创建完成后就调用
    created() {
        // 请求多个数据
        this.getHomeMultidata();

        // 请求商品数据
        this.getHomeGoods('pop');
        this.getHomeGoods('new');
        this.getHomeGoods('sell');

    },
    methods: {
        /**
         * 事件监听相关的方法
         */
        tabClick(index) {
            console.log(this.currentType);
            switch (index) {
                case 0: this.currentType = 'pop'; break;
                case 1: this.currentType = 'new'; break;
                case 2: this.currentType = 'sell'; break;
            }
        },

        /**
         * 网络请求相关的方法
         */
        getHomeMultidata() {
            getHomeMultidata().then(res => {
                console.log(res);
                // this为当前组件对象
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            })
        },

        getHomeGoods(type) {
            const page = this.goods[type].page + 1;
            getHomeGoods(type, page).then(
                res => {
                    console.log(res);
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;
                }
            )
        },


    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    }
}
</script>


<style scoped>
.nav-home {
    background-color: pink;
    color: #fff;
    font-size: 14px;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
}

.nav-home h2 {
    font-weight: 400;
}

.home-swiper {
    padding-top: 44px;
}
</style>