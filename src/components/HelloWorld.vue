<template>
  <div class="hello">

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }, mounted(){
    var self = this;
    console.log(this.$http)
    this.$http.getRequest(this,"/data",'',function(res){
      console.log(res.data.str)
      self.msg = res.data.str;
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
