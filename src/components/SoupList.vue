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
      soupData: [],
    };
  },
  methods: {
    sortSoupsById() {
      /*  After a soup is added, it is pushed to the bottom of the list rather than 
      being orderded how the firestore collection is ordered. This sorts that. */
      this.soupData.sort(function (a, b) {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      });
    },
  },
  created() {
    db.collection("soups").onSnapshot((res) => {
      const changes = res.docChanges();
      changes.forEach((change) => {
        if (change.type === "added") {
          this.soupData.push({
            ...change.doc.data(),
            id: change.doc.id,
          });
          this.sortSoupsById();
        } else if (change.type === "removed") {
          this.soupData.forEach((soup, index) => {
            if (soup.id == change.doc.id) {
              this.soupData.splice(index, 1);
            }
          });
        }
      });
    });
  },
};
</script>

<style scoped>
.soupList {
  padding: 8px;
  background-color: rgb(250, 250, 250);
}
</style>