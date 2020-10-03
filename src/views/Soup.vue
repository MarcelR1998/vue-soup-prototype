<template>
  <div class="soup">
    <div class="widthContainer">
      <img :src="soup.imageUrl" :alt="soup.name" />
      <div id="headingFlexContainer">
        <h2>{{ soup.name }}</h2>
        <VeganBadge />
      </div>
      <p>{{ soup.description }}</p>
      <div id="ingredients">
        <h4>Ingredients:</h4>
        <span>{{ soup.ingredients }}</span>
      </div>
      <p>{{ soup.price }} SEK</p>
    </div>
  </div>
</template>

<script>
import db from "@/fb";
import VeganBadge from "./../components/Soup/VeganBadge";

export default {
  components: { VeganBadge },
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
#headingFlexContainer {
  display: flex;
  justify-content: space-between;
}
img {
  width: 100%;
  max-height: 256px;
  object-fit: cover;
}
#ingredients h4 {
  margin-bottom: 0;
}
#ingredients span {
  color: #9d9d9d;
}
</style>