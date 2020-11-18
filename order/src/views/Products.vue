<template>
  <div class="wrapper_products">
    <h1>Page products all</h1>
    <Productscomponent />
  </div>
</template>

<script>
import Productscomponent from "../components/Productscomponent.vue";

export default {
  name: "Products",
  components: {
    Productscomponent,
  },
};
</script>