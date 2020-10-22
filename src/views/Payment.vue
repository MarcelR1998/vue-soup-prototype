<template>
  <div class="payment">
    <BackButton route="/cart" />
    <div class="widthContainer">
      <h2>Payment</h2>
      <h3>Credit card</h3>
      <MastercardCreditCard />
      <VisaCreditCart />
      <div class="inputDiv">
        <label for="cardNumber">Card number</label>
        <input type="number" name="cardNumber" />
      </div>
      <div class="inputDiv">
        <label for="cardHolderName">Card holder name</label>
        <input type="text" name="cardHolderName" />
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
};
</script>

<style scoped>
.payment {
  padding: 8px;
}
h2 {
  text-align: center;
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
</style>
