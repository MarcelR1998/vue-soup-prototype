<template>
  <div class="adminSoupCard">
    <img :src="imageUrl" :alt="name" />
    <div class="alignItmesCenter">
      <span v-if="!editingName">{{ displayName }}</span>
      <textarea
        v-if="editingName"
        v-model="changeNameInput"
        @change="updateSoupName"
      />
      <i @click="toggleEditName" class="fas fa-edit"></i>
    </div>
    <div class="alignItmesCenter">
      <span v-if="!editingPrice">{{ displayPrice }} SEK</span>
      <input
        v-if="editingPrice"
        type="number"
        v-model="changePriceInput"
        @change="updateSoupPrice"
      />
      <i @click="toggleEditPrice" class="fas fa-edit"></i>
    </div>
    <button :id="id" @click="deleteSoup">Delete</button>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  name: "AdminSoupCard",
  props: ["name", "price", "imageUrl", "id"],
  data() {
    return {
      //toggles editing of soup name/price
      editingName: false,
      editingPrice: false,

      changeNameInput: this.name,
      changePriceInput: this.price,

      displayName: this.name,
      displayPrice: this.price,
    };
  },
  methods: {
    toggleEditName() {
      if (this.editingPrice && !this.editingName) {
        this.editingPrice = false;
      }
      this.editingName = !this.editingName;
    },
    toggleEditPrice() {
      if (this.editingName && !this.editingPrice) {
        this.editingName = false;
      }
      this.editingPrice = !this.editingPrice;
    },
    updateSoupName(e) {
      //I don't know why this is requirered, but without it, this.displayName and this.editingName become undefined in scope.
      var self = this;
      //^
      db.collection("soups")
        .doc(this.id)
        .update({
          name: e.target.value,
        })
        .then(function () {
          console.log("Document successfully updated!");
          self.displayName = e.target.value;
          self.editingName = false;
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    },
    updateSoupPrice(e) {
      var self = this;
      db.collection("soups")
        .doc(this.id)
        .update({
          price: e.target.value,
        })
        .then(function () {
          console.log("Document successfully updated!");
          self.displayPrice = e.target.value;
          self.editingPrice = false;
        })
        .catch(function (error) {
          console.error("Error updating document: ", error);
        });
    },
    deleteSoup(e) {
      db.collection("soups")
        .doc(e.target.id)
        .delete()
        .then(function () {
          console.log("Document successfully deleted!");
        })
        .catch(function (error) {
          console.error("Error removing document: ", error);
        });
    },
  },
};
</script>

<style scoped>
.adminSoupCard {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
img {
  width: 96px;
  height: 64px;
  object-fit: cover;
}
input {
  width: 48px;
}
.alignItmesCenter {
  display: flex;
  align-items: center;
}
</style>