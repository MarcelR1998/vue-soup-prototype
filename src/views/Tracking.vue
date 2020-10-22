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
        <div v-if="steps.delivered">
          <h3>How was your experience?</h3>
          <div id="starBar">
            <i
              v-bind:class="{ starred: stars > 0 }"
              @click="setStar(1)"
              class="fas fa-star"
            ></i>
            <i
              v-bind:class="{ starred: stars > 1 }"
              @click="setStar(2)"
              class="fas fa-star"
            ></i>
            <i
              v-bind:class="{ starred: stars > 2 }"
              @click="setStar(3)"
              class="fas fa-star"
            ></i>
            <i
              v-bind:class="{ starred: stars > 3 }"
              @click="setStar(4)"
              class="fas fa-star"
            ></i>
            <i
              v-bind:class="{ starred: stars > 4 }"
              @click="setStar(5)"
              class="fas fa-star"
            ></i>
          </div>
          <h3>What could we improve?</h3>
          <div id="improvementButtons">
            <button class="improvementButton">Delivery</button>
            <button class="improvementButton">Clarity</button>
            <button class="improvementButton">Price</button>
            <button class="improvementButton">Speed</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BackButton from "../components/BackButton";

export default {
  name: "Tracking",
  components: { BackButton },
  data() {
    return {
      steps: {
        preparing: true,
        dispatched: false,
        delivered: false,
      },
      message: "Your order is being prepared.",
      stars: 0,
    };
  },
  methods: {
    setStar(item) {
      this.stars = item;
    },
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
#starBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 160px;
}
.fa-star {
  color: #c4c4c4;
  cursor: pointer;
  font-size: 24px;
}
.starred {
  color: #f3db00;
}
#improvementButtons {
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  width: 90%;
}
.improvementButton {
  background-color: #f6f6f6;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  padding: 8px;
}
.improvementButton:hover {
  filter: brightness(0.9);
}
</style>
