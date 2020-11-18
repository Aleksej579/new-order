<template>
  <div>
    <span v-for="item in orders" :key="item" class="list-item">
      {{ item.description }}
      <i class="bx bx-menu"></i>
      <div>
        <span> 23 </span>
        <span> products </span>
      </div>
      <div>
        <div>
          {{ item.time }}
        </div>
        <div>
          {{ item.date }}
        </div>
      </div>
      <i class="bx bxs-trash-alt" style="color: #8bc34a"></i>
      <i
        v-bind:class="[show ? 'bx bxs-chevron-left' : 'bx bxs-chevron-right']"
        style="color: #8bc34a"
        @click="show = !show"
      ></i>
      <div v-show="show">
        {{ item.description }}
      </div>
    </span>
  </div>
</template>

<script>
import { orders, products } from "../assets/data_.js";
export default {
  data() {
    return {
      orders: orders,
      products: products,
      show: false,
    };
  },
  methods: {},
};
</script>

