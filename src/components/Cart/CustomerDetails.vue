<template>
  <div class="customerDetails">
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
        <input type="tel" name="phone" v-model="customerForm['phone']" />
      </div>
      <div class="flexSpaceBetween">
        <div class="inputDiv">
          <label for="firstName">First name</label>
          <input
            type="text"
            name="firstName"
            v-model="customerForm['firstName']"
          />
        </div>
        <div class="inputDiv">
          <label for="lastName">Last name</label>
          <input
            type="text"
            name="lasttName"
            v-model="customerForm['lastName']"
          />
        </div>
      </div>
    </div>
    <div class="flexSpaceBetween">
      <span>Address</span>
      <button @click="toggleEdit('address')" class="editButton">EDIT</button>
    </div>
    <p class="smallGreyText" v-if="!editing['address']">
      {{ customerForm["address"] }}
    </p>
    <input
      v-if="editing['address']"
      type="text"
      v-model="customerForm['address']"
    />
    <div class="flexSpaceBetween">
      <span>Delivery</span>
      <button @click="toggleEdit('delivery')" class="editButton">EDIT</button>
    </div>
    <p class="smallGreyText" v-if="!editing['delivery']">
      {{ customerForm["delivery"] }}
    </p>
    <input
      v-if="editing['delivery']"
      type="date"
      v-model="customerForm['delivery']"
    />
    <div class="flexSpaceBetween smallGreyText">
      <p><i class="far fa-clock"></i> Estimated Time of Arrival</p>
      <p>15-20min</p>
    </div>
    <hr />
    <div class="flexSpaceBetween smallGreyText">
      <span>Estimated Subtotal</span>
      <span
        >{{
          Object.keys(cart)
            .map((key) => {
              return cart[key].price * cart[key].amount;
            })
            .reduce((a, b) => a + b) -
          Math.round(
            Object.keys(cart)
              .map((key) => {
                return cart[key].price * cart[key].amount;
              })
              .reduce((a, b) => a + b) * 0.12
          )
        }}
        SEK</span
      >
    </div>
    <div class="flexSpaceBetween smallGreyText">
      <span>Delivery</span>
      <span>0 SEK</span>
    </div>
    <div class="flexSpaceBetween smallGreyText">
      <span>VAT(12%)</span>
      <span
        >{{
          Math.round(
            Object.keys(cart)
              .map((key) => {
                return cart[key].price * cart[key].amount;
              })
              .reduce((a, b) => a + b) * 0.12
          )
        }}
        SEK</span
      >
    </div>
    <div class="flexSpaceBetween">
      <h3 class="priceRemoveBottomMargin">Total</h3>
      <h3 class="priceRemoveBottomMargin">
        {{
          Math.round(
            Object.keys(cart)
              .map((key) => {
                return cart[key].price * cart[key].amount;
              })
              .reduce((a, b) => a + b)
          )
        }}
        SEK
      </h3>
    </div>
    <span class="smallGreyText">(incl. VAT)</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      gift: false,
      editing: {
        address: false,
        delivery: false,
      },
    };
  },
  computed: {
    customerForm: {
      get() {
        return this.$store.state.customerForm;
      },
      set(value) {
        this.$store.commit("updateForm", value);
      },
    },
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
.priceRemoveBottomMargin {
  margin-bottom: 0;
}
</style>