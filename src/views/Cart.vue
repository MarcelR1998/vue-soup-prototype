<template>
  <div class="cart">
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
      <div id="giftSwitcher" @click="toggleGift">
        <div :class="{ giftSwticherSelected: gift }">
          <span>For yourself</span>
        </div>
        <div :class="{ giftSwticherSelected: !gift }">
          <span>Gift</span>
        </div>
      </div>
      <h3>Enter your details</h3>
      <div id="detailInputs">
        <div class="inputDiv">
          <label for="phone">Phone number</label>
          <input type="tel" name="phone" />
        </div>
        <div class="inputDiv">
          <label for="firstName">First name</label>
          <input type="text" name="firstName" />
        </div>
        <div class="inputDiv">
          <label for="lastName">Last name</label>
          <input type="text" name="lasttName" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CartListItem from "../components/Cart/CartListItem";

export default {
  name: "Cart",
  components: { CartListItem },
  data() {
    return {
      gift: false,
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  methods: {
    toggleGift() {
      this.gift = !this.gift;
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 8px;
}
ul {
  list-style: none;
  padding-inline-start: 0;
}
#giftSwitcher {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  cursor: pointer;
  color: white;
  background-color: #dadada;
  height: 32px;
  border-radius: 4px;
}
#giftSwitcher div {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
}
.giftSwticherSelected {
  background-color: #20d994;
}
#detailInputs {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.inputDiv {
  width: 50%;
}
</style>
