<template>
  <div v-pre class="my_root_element">


  <page-heading id="page-heading">
  <page-title>Time visual</page-title>
  <sub-page-title>The dynamic wallpaper app</sub-page-title>
  </page-heading>


    <div id="card_layout">

      <a href="/Projects/Voovs/Time-visual/app.html?low" id="lower">
        <p>Low resolution</p>
        <img src="../assets/Ex1080.png">
        <sub-title>1080x1920 @ 2MP</sub-title>
        <ul class="card-list">
          <li>Quick load times</li>
          <li>Full HD resolution</li>
          <li>Recommended for most displays</li>
          <li>Data equivelent of a hamster</li>
        </ul>
      </a>

      <a href="/Projects/Voovs/Time-visual/app.html?high" id="higher">
        <p>High resolution</p>
        <img src="../assets/Ex4k.png">
        <sub-title>2160x3840 @ 8MP</sub-title>
        <ul class="card-list">
          <li>Slightly slower load times</li>
          <li>4K resolution</li>
          <li>Recommended for 4k TVs</li>
          <li>Data equivelent of a cow</li>
        </ul>
      </a>

      <a href="/Projects/Voovs/Time-visual/app.html?raw" id="raw">
        <p>Original resolution</p>
        <img src="../assets/Ex24.png">
        <sub-title>4000x6000 @ 24MP</sub-title>
        <ul class="card-list">
          <li>Very slow load times</li>
          <li>Unaltered DSLR picture</li>
          <li>Not recommended</li>
          <li>Data equivelent of the Earth</li>
        </ul>
      </a>

     </div>
   </div>
</template>

<script>
export default {
  name: 'TimeVis_cards',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style src="../assets/time_visual.css" scoped>

</style>
