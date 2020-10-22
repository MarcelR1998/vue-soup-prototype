<template>
  <div class="payment">
    <BackButton route="/cart" />
    <div class="widthContainer">
      <h2>Payment</h2>
      <h3>Credit card</h3>
      <MastercardCreditCard />
      <VisaCreditCart />
      <!-- Card number -->
      <div class="inputDiv">
        <label for="cardNumber">Card number</label>
        <input type="number" name="cardNumber" />
      </div>
      <div class="flexSpaceBetween">
        <!-- Expiry date -->
        <div class="inputDiv">
          <label for="expiryDate">Expiry date</label>
          <div class="flexSpaceBetween">
            <input class="short" type="text" name="expiryDate" />
            /
            <input class="short" type="text" name="expiryDate2" />
          </div>
        </div>
        <!-- CCV -->
        <div class="inputDiv">
          <label for="CCV">CCV</label>
          <input class="short" type="text" name="CCV" />
        </div>
      </div>
      <!-- Card holder name -->
      <div class="inputDiv">
        <label for="cardHolderName">Card holder name</label>
        <input type="text" name="cardHolderName" />
      </div>
      <button id="payButton" @click="toggleShowSuccess">PAY</button>
      <div v-if="showSuccess" id="paymentSuccess">
        <h2>Payment successful <i class="fas fa-check"></i></h2>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton";
import VisaCreditCart from "../components/Payment/VisaCreditCart";
import MastercardCreditCard from "../components/Payment/MastercardCreditCard";

export default {
  name: "Payment",
  components: { BackButton, VisaCreditCart, MastercardCreditCard },
  data() {
    return {
      showSuccess: false,
    };
  },
  methods: {
    toggleShowSuccess() {
      this.showSuccess = true;
      let self = this;
      setTimeout(function () {
        self.$router.replace("/tracking").catch(() => {});
      }, 3000);
    },
  },
};
</script>

<style scoped>
.payment {
  padding: 8px;
}
h2 {
  text-align: center;
}
label {
  margin-top: 8px;
}
.inputDiv {
  width: 45%;
  display: flex;
  flex-direction: column;
}
input {
  border: none;
  border-bottom: 1px solid black;
  margin: 8px 0;
  padding: 4px;
}
.flexSpaceBetween {
  display: flex;
  align-items: center;
}
.short {
  width: 10%;
}
#payButton {
  color: white;
  background-color: #20d994;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 48px;
  transition: 0.3s;
  border-radius: 8px;
  margin-top: 32px;
}
#payButton:hover {
  filter: brightness(0.9);
}
#paymentSuccess {
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
  left: 0;
  background-color: white;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.fa-check {
  color: #20d994;
  background-color: rgb(229 245 230);
  padding: 8px;
  border-radius: 100%;
}
</style>
