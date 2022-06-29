<template>
    <div id="tab-bar">
        <slot></slot>
    </div>
</template>

<script>
    export default{
        name:'TabBar',
    }
</script>

<style scoped>
#tab-bar{
  display: flex;
  /* justify-content: space-between;
  text-align: center; */
  text-align: center; 
  background-color: #f2f2f2;
  box-shadow:0px -1px 1px rgba(0,0,0,.1);

  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;

  height: 49px;
  /* line-height: 49px; */
 }

 
</style>