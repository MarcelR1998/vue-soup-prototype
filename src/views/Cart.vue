<template>
  <div class="cart">
    <div class="widthContainer">
      <ul>
        <li v-for="soup in cart" :key="soup.name">
          <CartListItem
            :id="soup.id"
            :name="soup.name"
            :price="soup.price"
            :amount="soup.amount"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CartListItem from "../components/Cart/CartListItem";

export default {
  name: "Cart",
  components: { CartListItem },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {},
};
</script>

<style scoped>
ul {
  list-style: none;
  padding-inline-start: 0;
}
</style>
