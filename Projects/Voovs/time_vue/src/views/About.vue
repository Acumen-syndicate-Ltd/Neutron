<template>
  <div class="about">
    <h1>This is a {{ word }} page</h1>
    <input v-model="word"  placeholder="page type">
    <input v-model="word"  placeholder="page type">

  </div>
</template>

<script>
  export default{
    name: 'about',
    data: function(){
      return{
        word: undefined
      }
    },
  }
</script>

<style scope>
  body{
    margin:0;
  }
</style>
