<template>
  <div class="wrapper_order">
    <h1>Page orders all</h1>
    <Search />
  </div>
</template>

<script>
import Search from "../components/Search.vue";

export default {
  name: "Orders",
  components: {
    Search,
  },
};
</script>
