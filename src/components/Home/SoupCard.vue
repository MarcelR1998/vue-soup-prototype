<template>
  <div class="soupCard">
    <router-link :to="'/soup/' + id">
      <!--  <a :href="'http://localhost:8080/soup/'+name"> -->
      <div class="imageContainer">
        <img :src="imageUrl" alt />
      </div>
      <div class="cardInfo">
        <h3>{{ name }}</h3>
        <h3>{{ price }} SEK</h3>
      </div>
      <!--      </a> -->
    </router-link>
  </div>
</template>

<script>
export default {
  name: "SoupCard",
  props: ["name", "price", "imageUrl", "id"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.soupCard {
  background-color: white;
  margin-bottom: 12px;
  border-radius: 12px;
  transition: 0.5s;
  /* box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); */
}
.soupCard:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}
.soupCard:hover img {
  transform: scale(1.1);
}
.imageContainer {
  overflow: hidden;
  border-radius: 12px 12px 0 0;
}
img {
  width: 100%;
  border-radius: 12px 12px 0 0;
  object-fit: cover;
  height: 224px;
  transition: 0.5s;
  display: block;
}
.cardInfo {
  display: flex;
  justify-content: space-between;
  padding: 0 12px;
}
a {
  color: black;
  text-decoration: none;
}
</style>