<template>
  <div id="addSoupForm">
    <!-- soup name -->
    <label for="name">Soup name</label>
    <input type="text" id="name" v-model="name" autocomplete="off" />
    <!-- description -->
    <label for="name">description</label>
    <input
      type="text"
      id="description"
      v-model="description"
      autocomplete="off"
    />
    <!-- ingredients -->
    <label for="name">ingredients</label>
    <input
      type="text"
      id="ingredients"
      v-model="ingredients"
      autocomplete="off"
    />
    <!-- price -->
    <label for="price">Soup price (SEK)</label>
    <input type="number" id="price" v-model="price" />
    <!-- url to image -->
    <label for="imageUrl">Url to hosted image</label>
    <input type="text" id="imageUrl" v-model="imageUrl" autocomplete="off" />
    <button @click="addSoup"><i class="fas fa-plus"></i> Add soup</button>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  name: "AddSoupForm",
  data() {
    return {
      name: "",
      description: "",
      ingredients: "",
      price: null,
      imageUrl: "",
    };
  },
  methods: {
    addSoup() {
      if (
        this.name != "" &&
        this.description != "" &&
        this.ingredients != "" &&
        this.price != null &&
        this.imageUrl != ""
      ) {
        const newSoup = {
          name: this.name,
          description: this.description,
          ingredients: this.ingredients,
          price: this.price,
          imageUrl: this.imageUrl,
        };
        db.collection("soups").add(newSoup);
        //Reset form fields
        this.name = "";
        this.description = "";
        this.ingredients = "";
        this.price = null;
        this.imageUrl = "";
      }
    },
  },
};
</script>

<style scoped>
#addSoupForm {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  width: 256px;
  background-color: black;
  color: white;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
#addSoupForm input {
  border: none;
  padding: 4px;
  border-radius: 4px;
}
#addSoupForm button {
  width: fit-content;
  margin: 16px auto 0;
  color: white;
  background-color: #20d994;
  border: 1px solid #20d994;
  padding: 8px;
  border-radius: 4px;
  transition: 0.3s;
}
#addSoupForm button:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>