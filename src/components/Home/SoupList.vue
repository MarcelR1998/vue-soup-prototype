<template>
  <div class="soupList">
    <div class="widthContainer">
      <h2>Popular</h2>
      <div class="popularSoups">
        <div v-for="soup in soupData" :key="'popular' + soup.id">
          <PopularSoupCard
            :name="soup.name"
            :price="soup.price"
            :imageUrl="soup.imageUrl"
            :id="soup.id"
          />
        </div>
      </div>

      <h2>All our soups</h2>
      <!-- Renders a list of all soups -->
      <div v-for="soup in soupData" :key="soup.id">
        <SoupCard
          :name="soup.name"
          :price="soup.price"
          :imageUrl="soup.imageUrl"
          :id="soup.id"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SoupCard from "./SoupCard";
import PopularSoupCard from "./popularSoupCard";

export default {
  name: "SoupList",
  components: { SoupCard, PopularSoupCard },
  computed: {
    soupData() {
      return this.$store.state.soupData;
    },
  },
};
</script>

<style scoped>
.soupList {
  padding: 8px;
  background-color: rgb(250, 250, 250);
}
.popularSoups {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
}
</style>