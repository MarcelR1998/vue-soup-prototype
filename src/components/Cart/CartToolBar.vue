<template>
  <div class="cartToolBar">
    <!--     <div id="amountControl"></div> -->
    <router-link to="/payment">
      <button id="addToCartButton">CONTINUE</button>
    </router-link>
    <!-- <span id="priceDisplay">{{ cartPrice["total"] }} SEK</span> -->
  </div>
</template>

<script>
export default {
  computed: {
    cartPrice() {
      return this.$store.state.cartPrice;
    },
  },
};
</script>

<style scoped>
.cartToolBar {
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  justify-content: center;
  background-color: #20d994;
  height: 48px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
}
#amountControl {
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
  background-color: rgb(0 160 5 / 0.1);
  border: none;
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
a {
  height: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
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