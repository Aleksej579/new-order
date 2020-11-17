<template>
  <div id="header">
    <Logo />
    <Datetime />
  </div>
</template>

<script>
import Logo from "../components/Logo.vue";
import Datetime from "../components/DateTime.vue";
export default {
  name: "Header",
  components: {
    Logo,
    Datetime,
  },
};
</script>

<style lang="sass">
#header
  height: 80px
  box-shadow: 0 0 10px rgba(0,0,0,0.5)
  display: flex
  justify-content: space-between
</style>

