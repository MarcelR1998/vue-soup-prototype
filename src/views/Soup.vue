<template>
  <div class="soup">
    <div class="widthContainer">
      <img :src="soup.imageUrl" :alt="soup.name" />
      <h2>{{ soup.name }}</h2>
      <p>{{ soup.description }}</p>
      <p>{{ soup.ingredients }}</p>
      <p>{{ soup.price }} SEK</p>
    </div>
  </div>
</template>

<script>
import db from "@/fb";

export default {
  data() {
    return {
      id: this.$route.params.id,
      soup: {},
    };
  },
  created() {
    let self = this;

    db.collection("soups")
      .doc(this.id)
      .get()
      .then(function (doc) {
        if (doc.exists) {
          /* console.log(doc.data()); */
          self.soup = doc.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch(function (error) {
        console.log("Error getting document:", error);
      });
  },
};
</script>

<style scoped>
img {
  width: 100%;
  max-height: 256px;
  object-fit: cover;
}
</style>