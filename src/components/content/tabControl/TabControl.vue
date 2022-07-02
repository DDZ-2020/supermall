<template>
    <div class="tab-control">
        <ul>
            <li v-for="(item, index) in titles" @click="itemClick(index)" :class="{ active: index === currentIndex }">
                <span>{{ item }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TabControl',
    props: {
        titles: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    data() {
        return {
            currentIndex: 0,
        }
    },

    methods: {
        itemClick(index) {
            this.currentIndex = index;
            this.$emit('tabClick', index);
        }
    }
}
</script>


<style scoped>
.tab-control {
    position: sticky;
    top: 44px;
    z-index: 9;
    background-color: #fff;
}

.tab-control ul {
    display: flex;
    text-align: center;
    height: 40px;
    line-height: 40px;
}

.tab-control ul li {
    flex: 1;
}

.tab-control ul li span {
    padding: 0 10px 5px;
}

.active span {
    border-bottom: 3px solid var(--color-high-text);
    color: var(--color-high-text);
}
</style>