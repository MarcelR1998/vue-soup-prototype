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
      <button id="toggleShowFormButton" @click="toggleShowForm">
        <i class="fas fa-plus"></i>
      </button>
      <AddSoupForm v-if="showForm" />
    </div>
  </div>
</template>

<script>
import AdminSoupCard from "./../components/Admin/AdminSoupCard";
import AddSoupForm from "./../components/Admin/AddSoupForm";
import db from "@/fb";

export default {
  name: "Admin",
  components: { AdminSoupCard, AddSoupForm },
  data() {
    return {
      soupData: [],
      showForm: false,
    };
  },
  methods: {
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
    toggleShowForm() {
      this.showForm = !this.showForm;
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
#toggleShowFormButton {
  position: fixed;
  color: white;
  background-color: #20d994;
  border-radius: 100%;
  width: 64px;
  height: 64px;
  border: none;
  bottom: 8px;
  right: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
#toggleShowFormButton:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>