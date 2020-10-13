<template>
  <div class="cart">
    <BackButton />
    <div class="widthContainer">
      <h2>Your order</h2>
      <ul>
        <li v-for="soup in cart" :key="soup.name">
          <CartListItem
            :id="soup.id"
            :name="soup.name"
            :price="soup.price"
            :amount="soup.amount"
            :imageUrl="soup.imageUrl"
          />
        </li>
      </ul>
      <CustomerDetails />
      <CartToolBar />
    </div>
  </div>
</template>

<script>
import CartListItem from "../components/Cart/CartListItem";
import CustomerDetails from "../components/Cart/CustomerDetails";
import CartToolBar from "../components/Cart/CartToolBar";
import BackButton from "../components/BackButton";

export default {
  name: "Cart",
  components: { CartListItem, CustomerDetails, CartToolBar, BackButton },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 8px;
  padding-bottom: 64px;
}
h2 {
  text-align: center;
}
ul {
  list-style: none;
  padding-inline-start: 0;
}
</style>
