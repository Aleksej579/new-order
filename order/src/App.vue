<template>
  <Header />
  <Navbar />
  <!-- <div id="nav">
    <router-link to="/">Page1</router-link> |
    <router-link to="/about">Page2</router-link>
  </div> -->
  <router-view />
</template>

<script>
import Header from "./components/Header.vue";
import Navbar from "./components/NavBar.vue";

export default {
  // name: "Home",
  components: {
    Header,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
