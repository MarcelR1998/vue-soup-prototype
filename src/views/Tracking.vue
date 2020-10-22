<template>
  <div class="tracking">
    <BackButton route="/" />
    <div class="widthContainer">
      <img src="../assets/map.png" alt="" />
      <div class="contentPaddingContainer">
        <h3>
          <i v-if="!steps.delivered" class="fas fa-circle-notch fa-spin"></i>
          {{ message }}
        </h3>
        <div id="stepsBar">
          <div
            class="stepsBarStep"
            v-bind:class="{ completed: steps.preparing }"
          ></div>
          <i class="fas fa-store"></i>
          <div
            class="stepsBarStep"
            v-bind:class="{ completed: steps.dispatched }"
          ></div>
          <i class="fas fa-truck"></i>
          <div
            class="stepsBarStep"
            v-bind:class="{ completed: steps.delivered }"
          ></div>
          <i class="fas fa-home"></i>
        </div>
        <Feedback v-if="steps.delivered" />
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton";
import Feedback from "../components/Tracking/Feedback";

export default {
  name: "Tracking",
  components: { BackButton, Feedback },
  data() {
    return {
      steps: {
        preparing: true,
        dispatched: false,
        delivered: false,
      },
      message: "Your order is being prepared.",
    };
  },
  created() {
    setTimeout(() => {
      this.steps.dispatched = true;
      this.message = "Your order is on its way.";
    }, 3000);
    setTimeout(() => {
      this.steps.delivered = true;
      this.message = "Your order has been delivered.";
    }, 6000);
  },
};
</script>

<style scoped>
.contentPaddingContainer {
  padding: 8px;
  padding-bottom: 64px;
}
img {
  width: 100%;
  max-height: 384px;
  object-fit: cover;
  display: block;
}
h3 {
  text-align: center;
}
#stepsBar {
  display: flex;
  align-items: center;
  margin: auto;
  width: 90%;
}
.stepsBarStep {
  width: 100%;
  height: 6px;
  border-radius: 4px;
  background-color: #c4c4c4;
  margin: 0 4px;
}
.completed {
  background-color: #20d994;
}
</style>
