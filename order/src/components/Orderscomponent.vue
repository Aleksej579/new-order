<template>
  <div id="wrapper-orders">
    <span v-for="item in orders" :key="item" class="item-order">
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
      <i
        v-bind:class="[seen ? 'bx bxs-chevron-left' : 'bx bxs-chevron-right']"
        style="color: #8bc34a"
        @click="shw"
      ></i>
      <div v-if="seen">
        <span v-for="prod in item.getProducts" :key="prod" class="item-order">
          {{ prod.title }}
          <!-- <span class="wrapper-price">
            <span> {{ prod.price[0].value }} $ </span>
            <span> {{ prod.price[1].value }} UAH </span>
          </span> -->
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
      seen: false,
    };
  },
  methods: {
    shw() {
      this.seen = !this.seen;
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

