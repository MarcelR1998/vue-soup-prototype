<template>
  <div class="admin">
    <div class="widthContainer">
      <h2>All our soups</h2>
      <!-- Renders a list of all soups -->
      <div v-for="soup in soupData" :key="soup.id">
        <AdminSoupCard
          :name="soup.name"
          :description="soup.description"
          :ingredients="soup.ingredients"
          :price="soup.price"
          :imageUrl="soup.imageUrl"
          :id="soup.id"
        />
      </div>
      <h2>Add soup</h2>
      <div id="newSoupForm">
        <label for="name">Soup name</label>
        <input type="text" id="name" v-model="name" />

        <label for="price">Soup price (SEK)</label>
        <input type="number" id="price" v-model="price" />

        <label for="imageUrl">Url to hosted image</label>
        <input type="text" id="imageUrl" v-model="imageUrl" />
        <button @click="addSoup">Add soup</button>
      </div>
    </div>
  </div>
</template>

<script>
import AdminSoupCard from "./../components/AdminSoupCard";
import db from "@/fb";

export default {
  name: "Admin",
  components: { AdminSoupCard },
  data() {
    return {
      soupData: [],
      name: "",
      price: null,
      imageUrl: "",
    };
  },
  methods: {
    addSoup() {
      if (this.name != "" && this.price != null && this.imageUrl != "") {
        const newSoup = {
          name: this.name,
          price: this.price,
          imageUrl: this.imageUrl,
        };
        db.collection("soups").add(newSoup);
        this.name = "";
        this.price = null;
        this.imageUrl = "";
      }
    },
    sortSoupsById() {
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
.admin {
  padding: 8px;
  background-color: rgb(250, 250, 250);
}
#newSoupForm {
  display: flex;
  flex-direction: column;
  width: 256px;
  /*   margin: 8px; */
}
#newSoupForm input {
  border: none;
  padding: 4px;
}
#newSoupForm button {
  width: fit-content;
  padding: 4px;
  margin: 8px auto 0;
}
</style>