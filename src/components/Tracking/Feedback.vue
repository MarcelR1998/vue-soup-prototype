<template>
  <div v-bind:class="{ fadeIn: fadeIn }" class="feedBack">
    <h3>How was your experience?</h3>
    <div id="starBar">
      <i
        v-bind:class="{ starred: stars > 0, hoverStarred: hoverStars > 0 }"
        @click="setStar(1)"
        @mouseenter="hoverEnterStar(1)"
        @mouseleave="hoverLeaveStar"
        class="fas fa-star"
      ></i>
      <i
        v-bind:class="{ starred: stars > 1, hoverStarred: hoverStars > 1 }"
        @click="setStar(2)"
        @mouseenter="hoverEnterStar(2)"
        @mouseleave="hoverLeaveStar"
        class="fas fa-star"
      ></i>
      <i
        v-bind:class="{ starred: stars > 2, hoverStarred: hoverStars > 2 }"
        @click="setStar(3)"
        @mouseenter="hoverEnterStar(3)"
        @mouseleave="hoverLeaveStar"
        class="fas fa-star"
      ></i>
      <i
        v-bind:class="{ starred: stars > 3, hoverStarred: hoverStars > 3 }"
        @click="setStar(4)"
        @mouseenter="hoverEnterStar(4)"
        @mouseleave="hoverLeaveStar"
        class="fas fa-star"
      ></i>
      <i
        v-bind:class="{ starred: stars > 4, hoverStarred: hoverStars > 4 }"
        @click="setStar(5)"
        @mouseenter="hoverEnterStar(5)"
        @mouseleave="hoverLeaveStar"
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
      hoverStars: 0,
      fadeIn: false,
    };
  },
  methods: {
    setStar(item) {
      this.stars = item;
    },
    hoverEnterStar(item) {
      this.hoverStars = item;
    },
    hoverLeaveStar() {
      this.hoverStars = 0;
    },
  },
  created() {
    setTimeout(() => {
      this.fadeIn = true;
    }, 250);
  },
};
</script>

<style scoped>
.feedBack {
  opacity: 0;
  transform: translateY(32px);
  transition: 1s;
}
.fadeIn {
  opacity: 1;
  transform: translateY(0);
}
h3 {
  text-align: center;
}
#starBar {
  width: fit-content;
  margin: auto;
}
.fa-star {
  color: #c4c4c4;
  cursor: pointer;
  font-size: 24px;
}
.starred {
  color: #f3db00;
}
.hoverStarred {
  color: #f3db0080;
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