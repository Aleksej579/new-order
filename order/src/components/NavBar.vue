<template>
  <div id="navbar">
    <p>Navbar component</p>
    <div id="nav">
      <router-link to="/">Page1</router-link> |
      <router-link to="/about">Page2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  props: {},
  data() {
    return {};
  },
};
</script>

