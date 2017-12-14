<template>
  <div id="app">
    <mt-header title="首页">
      <div slot="left">
        <!--<mt-button v-link="'/'" icon="back">返回</mt-button>-->
        <!--<mt-button @click="handleClose">关闭</mt-button>-->
      </div>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <router-view/>
    <mt-tabbar v-model="selected">
      <mt-tab-item id="btn1">
        <img slot="icon" src="http://placehold.it/100x100">
        btn1
      </mt-tab-item>
      <mt-tab-item id="btn2">
        <img slot="icon" src="http://placehold.it/100x100">
        btn2
      </mt-tab-item>
      <mt-tab-item id="btn3">
        <img slot="icon" src="http://placehold.it/100x100">
        btn3
      </mt-tab-item>
      <mt-tab-item id="mine">
        <img slot="icon" src="http://placehold.it/100x100">
        mine
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
      selected:'mine',
    }
  }
}
</script>

<style>
html{
  margin:0;
  padding:0;
}
  body{
    margin: 0;
    padding:0;
  }
</style>
