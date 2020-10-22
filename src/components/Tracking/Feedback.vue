<template>
  <div>
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
</template>

<script>
export default {
  data() {
    return {
      stars: 0,
    };
  },
  methods: {
    setStar(item) {
      this.stars = item;
    },
  },
};
</script>

<style scoped>
h3 {
  text-align: center;
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