<template>
  <router-link class="cartButton" to="/cart">
    <i class="fas fa-shopping-cart"></i>
    <transition name="slide-fade" mode="out-in">
      <div id="amountDiv" :key="cartAmount">
        {{ cartAmount }}
      </div>
    </transition>
  </router-link>
</template>

<script>
export default {
  name: "CartButton",
  computed: {
    cartAmount() {
      return this.$store.state.cartAmount;
    },
  },
};
</script>

<style scoped>
.cartButton {
  position: fixed;
  color: black;
  background-color: white;
  text-decoration: none;
  border-radius: 32px;
  padding: 12px;
  border: none;
  top: 8px;
  right: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.cartButton:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
#amountDiv {
  display: inline-block;
}
.fa-shopping-cart {
  margin-right: 4px;
}
.slide-fade-enter-active {
  transition: all 0.1s ease;
}
.slide-fade-leave-active {
  transition: all 0.1s ease;
}
.slide-fade-enter {
  transform: translateY(5px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-5px);
  opacity: 0;
}
</style>