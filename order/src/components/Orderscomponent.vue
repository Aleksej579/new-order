<template>
  <div id="wrapper-orders">
    <span
      v-for="item in orders"
      :key="item"
      class="item-order"
      v-bind="this.currentdata"
    >
      {{ item.description }}
      <i class="bx bx-menu"></i>
      <div class="wrapper-time_date">
        <div class="time">
          {{ item.time }}
        </div>
        <div class="date">
          {{ item.date }}
        </div>
      </div>
      <i class="bx bxs-trash-alt" style="color: #8bc34a"></i>
      <!-- <i
        v-bind:class="[show ? 'bx bxs-chevron-left' : 'bx bxs-chevron-right']"
        style="color: #8bc34a"
        @click="show = !show"
      ></i> -->
      <button @click="shw">BTN</button>
      <div v-show="this.currentdata">
        <span v-for="item_ in item.products" :key="item_" class="item-order">
          {{ item.products[0].id }}
          {{ this.currentdata }}
        </span>
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
      currentdata: (this.currentdata = false),
    };
  },
  methods: {
    shw() {
      //   this.show = !this.show;
      this.currentdata = !this.currentdata;
    },
  },
};
</script>

<style lang="sass">
#wrapper-orders
    width: 100%
    margin-left: 250px
    padding-left: 20px
    .item-order
        display: flex
        flex-direction: row
        align-items: center
        margin-bottom: 5px
        width: max-content
        box-shadow: 0 0 3px rgba(0, 0, 0, 0.5)
        height: 100px

        i
            margin-left: 50px
        .wrapper-time_date
            margin-left: 50px
</style>

