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
  props: ["price", "id", "name", "imageUrl"],
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
      let imageUrl = this.imageUrl;
      this.$store.commit("addToCart", { id, name, price, amount, imageUrl });
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
  border-radius: 4px;
  cursor: pointer;
}
#increaseAmountButton {
  color: #20d994;
  background-color: rgb(0 160 5 / 0.1);
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
#addToCartButton {
  color: white;
  background-color: #20d994;
  border: none;
  cursor: pointer;
  height: 70%;
  transition: 0.3s;
  border-radius: 8px;
}
#addToCartButton:hover {
  filter: brightness(0.9);
}
#priceDisplay {
  width: 96px;
  text-align: center;
  color: white;
}
</style>