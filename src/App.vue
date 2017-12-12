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

  </div>
</template>

<script>
export default {
  name: 'app',
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
