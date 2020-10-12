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
      <button id="giftSwitcher" @click="toggleGift">
        <div :class="{ giftSwticherSelected: !gift }">
          <span>For yourself</span>
        </div>
        <div :class="{ giftSwticherSelected: gift }">
          <span>Gift</span>
        </div>
      </button>
      <h3>
        Enter
        <span v-if="!gift">your</span>
        <span v-else>recipient</span>
        details
      </h3>
      <div id="detailInputs">
        <div class="inputDiv">
          <label for="phone">Phone number</label>
          <input type="tel" name="phone" />
        </div>
        <div class="flexSpaceBetween">
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
      <div class="flexSpaceBetween">
        <span>Address</span>
        <button @click="toggleEdit('address')" class="editButton">EDIT</button>
      </div>
      <p class="smallGreyText" v-if="!editing['address']">{{ address }}</p>
      <input v-if="editing['address']" type="text" v-model="address" />
      <div class="flexSpaceBetween">
        <span>Delivery</span>
        <button @click="toggleEdit('delivery')" class="editButton">EDIT</button>
      </div>
      <p class="smallGreyText" v-if="!editing['delivery']">{{ delivery }}</p>
      <input v-if="editing['delivery']" type="date" v-model="delivery" />
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
      editing: {
        address: false,
        delivery: false,
      },
      address: "",
      delivery: new Date().toJSON().slice(0, 10),
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
    toggleEdit(state) {
      this.editing[state] = !this.editing[state];
    },
  },
};
</script>

<style scoped>
.cart {
  padding: 8px;
}
h2 {
  text-align: center;
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
  width: 100%;
  border-radius: 4px;
  border: 0;
  padding: 0;
}
#giftSwitcher div {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  height: 100%;
}
.giftSwticherSelected {
  background-color: #20d994;
}
input {
  border: none;
  border-bottom: 1px solid black;
  margin: 8px 0;
  padding: 4px;
}
.flexSpaceBetween {
  display: flex;
  justify-content: space-between;
}
.inputDiv {
  width: 45%;
  display: flex;
  flex-direction: column;
}
.smallGreyText {
  color: #9d9d9d;
  margin: 8px 0;
}
.editButton {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
</style>
