<template>
  <div class="soupList">
    <div class="widthContainer">
      <h2>Popular</h2>

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

export default {
  name: "SoupList",
  components: { SoupCard },
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
</style>