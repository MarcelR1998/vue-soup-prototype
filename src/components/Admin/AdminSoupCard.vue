<template>
  <div class="adminSoupCard">
    <img :src="displayImageUrl" :alt="name" />
    <!-- Name -->
    <div class="alignItmesCenter">
      <span v-if="!editing['name']">{{ displayName["name"] }}</span>
      <input v-if="editing['name']" type="text" v-model="inputs['name']" />
      <button v-if="!editing['name']" @click="toggleEdit('name')" class="edit">
        <i class="fas fa-pen"></i>
      </button>
      <button
        v-if="editing['name']"
        @click="
          updateSoup('name');
          toggleEdit('name');
        "
        class="confirmChanges"
      >
        <i class="fas fa-check"></i>
      </button>
    </div>
    <!-- Description -->
    <div class="alignItmesCenter">
      <span v-if="!editing['description']">{{
        displayName["description"]
      }}</span>
      <textarea v-if="editing['description']" v-model="inputs['description']" />
      <button
        v-if="!editing['description']"
        @click="toggleEdit('description')"
        class="edit"
      >
        <i class="fas fa-pen"></i>
      </button>
      <button
        v-if="editing['description']"
        @click="
          updateSoup('description');
          toggleEdit('description');
        "
        class="confirmChanges"
      >
        <i class="fas fa-check"></i>
      </button>
    </div>
    <!-- Ingredients -->
    <div class="alignItmesCenter">
      <span v-if="!editing['ingredients']">{{
        displayName["ingredients"]
      }}</span>
      <textarea v-if="editing['ingredients']" v-model="inputs['ingredients']" />
      <button
        v-if="!editing['ingredients']"
        @click="toggleEdit('ingredients')"
        class="edit"
      >
        <i class="fas fa-pen"></i>
      </button>
      <button
        v-if="editing['ingredients']"
        @click="
          updateSoup('ingredients');
          toggleEdit('ingredients');
        "
        class="confirmChanges"
      >
        <i class="fas fa-check"></i>
      </button>
    </div>
    <!-- Price -->
    <div class="alignItmesCenter">
      <span v-if="!editing['price']">{{ displayName["price"] }} SEK</span>
      <input v-if="editing['price']" type="number" v-model="inputs['price']" />
      <button
        v-if="!editing['price']"
        @click="toggleEdit('price')"
        class="edit"
      >
        <i class="fas fa-pen"></i>
      </button>
      <button
        v-if="editing['price']"
        @click="
          updateSoup('price');
          toggleEdit('price');
        "
        class="confirmChanges"
      >
        <i class="fas fa-check"></i>
      </button>
    </div>
    <!-- Delete button -->
    <div>
      <button @click="updateSoupImage" class="updateImage">
        <i class="fas fa-camera"></i> Update image
      </button>
      <button :id="id" @click="deleteSoup" class="delete">
        <i class="fas fa-times"></i> Delete
      </button>
    </div>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  name: "AdminSoupCard",
  props: ["name", "description", "ingredients", "price", "imageUrl", "id"],
  data() {
    return {
      //toggles editing of soup name/price
      editing: {
        name: false,
        description: false,
        ingredients: false,
        price: false,
      },
      inputs: {
        name: this.name,
        description: this.description,
        ingredients: this.ingredients,
        price: this.price,
      },
      displayName: {
        name: this.name,
        description: this.description,
        ingredients: this.ingredients,
        price: this.price,
      },
      displayImageUrl: this.imageUrl,
    };
  },
  methods: {
    toggleEdit(state) {
      this.editing[state] = !this.editing[state];
    },
    updateSoup(value) {
      //I don't know why this is requirered, but without it, this.displayName and this.editing states become undefined in scope.
      var self = this;
      //^
      if (this.displayName[value] !== this.inputs[value]) {
        db.collection("soups")
          .doc(this.id)
          .update({
            [value]: self.inputs[value],
          })
          .then(function () {
            console.log("Document successfully updated!");
            self.displayName[value] = self.inputs[value];
            self.editing[value] = false;
          })
          .catch(function (error) {
            console.error("Error updating document: ", error);
          });
      }
    },
    updateSoupImage() {
      var self = this;
      var imageUrl = prompt("Enter url to hosted image:");
      if (imageUrl !== null && imageUrl !== "") {
        db.collection("soups")
          .doc(this.id)
          .update({
            imageUrl,
          })
          .then(function () {
            console.log("Document successfully updated!");
            self.displayImageUrl = imageUrl;
          })
          .catch(function (error) {
            console.error("Error updating document: ", error);
          });
      }
    },
    deleteSoup(e) {
      if (confirm(`Are you sure you want to delete ${this.name}?`)) {
        db.collection("soups")
          .doc(e.target.id)
          .delete()
          .then(function () {
            console.log("Document successfully deleted!");
          })
          .catch(function (error) {
            console.error("Error removing document: ", error);
          });
      }
    },
  },
};
</script>

<style scoped>
.adminSoupCard {
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: space-between; */
  background-color: white;
  margin-bottom: 12px;
  border-radius: 12px;
}
img {
  width: 100%;
  max-height: 256px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}
input {
  width: 100%;
}
textarea {
  width: 100%;
  resize: vertical;
}
.alignItmesCenter {
  display: flex;
  /*   align-items: center; */
  justify-content: space-between;
  padding: 8px 12px 0 12px;
}
.edit {
  color: black;
  background-color: transparent;
  border: none;
  padding: 8px;
  height: fit-content;
  border-radius: 4px;
}
.confirmChanges {
  color: white;
  background-color: #20d994;
  border: none;
  padding: 8px;
  height: fit-content;
  border-radius: 0 4px 4px 0;
}
.updateImage {
  border: none;
  border: 1px solid #d8d8d8;
  background-color: white;
  padding: 8px;
  margin: 8px;
  width: fit-content;
  border-radius: 4px;
  transition: 0.3s;
}
.delete {
  color: white;
  background-color: #ef233c;
  border: 1px solid #ef233c;
  padding: 8px;
  margin: 8px;
  width: fit-content;
  float: right;
  border-radius: 4px;
  transition: 0.3s;
}
/* .updateImage:focus,
.delete:focus {
  outline: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
} */
.edit:hover,
.confirmChanges:hover,
.updateImage:hover,
.delete:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>