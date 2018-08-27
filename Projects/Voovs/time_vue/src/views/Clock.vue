<template>
  <div id="my_root_element">
    <div>
    <TimeVisCards/>
    </div>
  </div>
</template>

<script>
export default {
  name: "Clock",
  components: {
    TimeVisCards: require("../components/TimeVis_cards.vue").default,
  }
}
</script>

<style scope>
  body{
    margin: 0;
  }
</style>
