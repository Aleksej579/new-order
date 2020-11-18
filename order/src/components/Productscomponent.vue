<template>
  <div id="wrapper-products">
    <span v-for="item in products" :key="item" class="item-order">
      <img alt="product" :src="item.photo" />
      <div class="wrapper-spec_sn">
        <span class="spec">
          {{ item.specification }}
        </span>
        <span class="sn">
          {{ item.serialNumber }}
        </span>
      </div>
      <span class="wrapper-price">
        <span> {{ item.price[0].value }} $ </span>
        <span> {{ item.price[1].value }} UAH </span>
      </span>
      <div class="wrapper-btn">
        <i class="bx bxs-trash-alt" style="color: #8bc34a"></i>
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

<style lang="sass">
#wrapper-products
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
        img
            height: 100px
            width: 100px
        .wrapper-price
            margin-left: 50px
            display: flex
            flex-direction: column
            text-align: left
            justify-content: flex-start
</style>


