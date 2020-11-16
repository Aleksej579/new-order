<template>
  <div id="header">
    <!-- <p>Header component</p> -->
    <Datetime />
  </div>
</template>

<script>
import Datetime from "../components/DateTime.vue";
export default {
  name: "Header",
  components: {
    Datetime,
  },
  props: {},
  data() {
    return {};
  },
};
</script>

<style lang="sass">
#header
  height: 80px
  box-shadow: 0 0 10px rgba(0,0,0,0.5)
</style>
