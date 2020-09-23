<template>
  <div class="SoupList">
    <div class="widthContainer">
      <h2>Popular</h2>

      <h2>All our soups</h2>
      <!-- Renders a list of all soups -->
      <div v-for="soup in mockSoupData" :key="soup.name">
        <SoupCard
          :name="soup.name"
          :price="soup.price"
          :imageUrl="soup.imageUrl"
        />
      </div>
    </div>
  </div>
</template>

<script>
import SoupCard from "./SoupCard";
import db from "@/fb";

export default {
  name: "SoupList",
  components: { SoupCard },
  /*   computed: {
    mockSoupData() {
      return this.$store.state.mockSoupData;
    },
  }, */
  data() {
    return {
      mockSoupData: [],
    };
  },
  created() {
    db.collection("soups").onSnapshot((res) => {
      const changes = res.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          this.mockSoupData.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
        }
      });
    });
  },
};
</script>

<style scoped>
.SoupList {
  padding: 8px;
  background-color: rgb(250, 250, 250);
}
</style>