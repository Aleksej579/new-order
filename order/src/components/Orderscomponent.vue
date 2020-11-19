<template>
  <div id="wrapper-orders">
    <el-card
      class="el-card-order"
      shadow="hover"
      v-for="item in orders"
      :key="item"
    >
      <p>
        {{ item.id }}
      </p>
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
        @click="targetCard"
      ></i>
      <!-- <el-button type="success" @click="targetCard">Success</el-button> -->
      <el-dialog v-model="seen">
        <span v-for="prod in item.getProducts" :key="prod">
          {{ prod.title }}
          <span class="wrapper-price">
            <span> {{ prod.price[0].value }} $ </span>
            <span> {{ prod.price[1].value }} UAH </span>
          </span>
        </span>
      </el-dialog>
    </el-card>
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
    targetCard() {
      let rez;
      let btn_;
      document.body.onclick = function (event) {
        const t = event.target || event.srcElement;
        rez =
          t.parentNode.firstChild.nextElementSibling.childNodes[0].nodeValue;
        btn_ =
          t.nextElementSibling.parentNode.firstChild.nextElementSibling
            .childNodes[0].nodeValue;
      };
      if (rez == btn_) {
        this.seen = !this.seen;
      } else {
        console.log(false);
      }
    },
  },
};
</script>

<style lang="sass">
#wrapper-orders
  margin-left: 250px
  padding-left: 20px
  .el-card-order
    width: max-content
    margin-bottom: 10px
    .el-card__body
      display: flex
      flex-direction: row
      align-items: center
      i
        margin-left: 50px
        .wrapper-time_date
          margin-left: 50px
</style>


