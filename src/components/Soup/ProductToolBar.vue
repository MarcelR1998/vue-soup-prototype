<template>
  <div class="productToolBar">
    <div id="amountControl">
      <button @click="decreaseAmount" id="decreaseAmountButton">-</button>
      <span>{{ amount }}</span>
      <button @click="increaseAmount" id="increaseAmountButton">+</button>
    </div>
    <button @click="addToCart" id="addToCartButton">ADD TO CART</button>
    <span id="priceDisplay">{{ amount * price }} SEK</span>
  </div>
</template>

<script>
export default {
  props: ["price", "id", "name"],
  data() {
    return {
      amount: 1,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    decreaseAmount() {
      if (this.amount > 1) {
        this.amount--;
      }
    },
    increaseAmount() {
      if (this.amount < 99) {
        this.amount++;
      }
    },
    addToCart() {
      let id = this.id;
      let name = this.name;
      let price = this.price;
      let amount = this.amount;
      this.$store.commit("addToCart", { id, name, price, amount });
    },
  },
};
</script>

<style scoped>
.productToolBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #20d994;
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
#amountControl {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: white;
  height: 100%;
  width: 96px;
}
#decreaseAmountButton {
  color: #979797;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
}
#increaseAmountButton {
  color: #20d994;
  background-color: #00a0050a;
  border: none;
  cursor: pointer;
}
#addToCartButton {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
}
#priceDisplay {
  width: 96px;
  text-align: center;
  color: white;
}
</style>