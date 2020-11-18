<template>
  <div class="wrapper_order">
    <h1>Page orders all</h1>
    <Search />
    <Orderscomponent />
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import Orderscomponent from "../components/Orderscomponent.vue";

export default {
  name: "Orders",
  components: {
    Search,
    Orderscomponent,
  },
};
</script>
