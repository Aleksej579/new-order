<template>
  <div class="home">
    <HelloWorld />
    <Search />
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld.vue";
import Search from "../components/Search.vue";

export default {
  name: "Orders",
  components: {
    HelloWorld,
    Search,
  },
};
</script>
