<template>
  <div>
    <router-link class="cartButton" to="/cart">
      <i class="fas fa-shopping-cart"></i>
      <span>
        {{ cartAmount }}
      </span>
    </router-link>
  </div>
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
  padding: 8px;
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
</style>