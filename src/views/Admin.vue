<template>
  <div class="admin">
    <div class="widthContainer">
      <div class="flexSpaceBetween">
        <h2><i class="fas fa-user-shield"></i> Admin</h2>
        <button id="signOut" @click="signOut">
          <i class="fas fa-door-open"></i> Sign out
        </button>
      </div>
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
import * as firebase from "firebase/app";
import "firebase/auth";

import AdminSoupCard from "./../components/Admin/AdminSoupCard";
import AddSoupForm from "./../components/Admin/AddSoupForm";

export default {
  name: "Admin",
  components: { AdminSoupCard, AddSoupForm },
  data() {
    return {
      showForm: false,
      loggedIn: false,
    };
  },
  computed: {
    soupData() {
      return this.$store.state.soupData;
    },
  },
  methods: {
    toggleShowForm() {
      this.showForm = !this.showForm;
    },
    setupFirebase() {
      firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          this.loggedIn = true;
        } else {
          // No user is signed in.
          this.loggedIn = false;
          this.$router.replace("login").catch(() => {});
        }
      });
    },
    signOut() {
      firebase.auth().signOut();
      /*         .then(() => {
          this.$router.replace({ name: "Login" });
        }); */
    },
  },
  mounted() {
    this.setupFirebase();
  },
};
</script>

<style scoped>
.admin {
  padding: 8px;
  background-color: rgb(250, 250, 250);
}
.flexSpaceBetween {
  display: flex;
  justify-content: space-between;
  align-items: center;
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
#signOut {
  border: 1px solid #d8d8d8;
  background-color: white;
  padding: 8px;
  border-radius: 4px;
  transition: 0.3s;
}
#toggleShowFormButton:hover,
#signOut:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>