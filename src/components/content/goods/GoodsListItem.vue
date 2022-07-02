<template>
    <div class="goods-item">
        <img :src="goodsItem.show.img" alt="">
        <div class="info">
            <p>{{ goodsItem.title }}</p>
            <span class="price">{{ goodsItem.price }}</span>
            <span class="collect">{{ goodsItem.cfav }}</span>
        </div>

    </div>
</template>

<script>
export default {
    name: 'GoodsListItem',
    props: {
        goodsItem: {
            type: Object,
            default() {
                return {};
            }
        }
    }
}
</script>

<style scoped>
.goods-item {
    width: 48%;

    padding-bottom: 40px;
    position: relative;
    font-size: 12px;
}

.goods-item img {
    border-radius: 5px;
    width: 100%;
}

.info {
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    text-align: center;
}

.info p {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    margin-bottom: 3px;
}

.price {
    margin-right: 20px;
    color: var(--color-high-text);
}

.collect {
    position: relative;
}

.collect::before {
    content: '';
    position: absolute;
    left: -16px;
    top: 0px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>