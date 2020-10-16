<template>
  <div class="popularSoupCard">
    <router-link :to="'/soup/' + id">
      <div class="imageContainer">
        <img :src="imageUrl" alt />
      </div>
      <h4>{{ name }}</h4>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "PopularSoupCard",
  props: ["name", "price", "imageUrl", "id"],
};
</script>

<style scoped>
.popularSoupCard {
  margin-right: 12px;
  border-radius: 12px;
  transition: 0.5s;
  width: 128px;
}
.popularSoupCard:hover img {
  transform: scale(1.1);
}
.imageContainer {
  overflow: hidden;
  border-radius: 12px 12px;
}
img {
  width: 128px;
  border-radius: 12px 12px;
  object-fit: cover;
  height: 128px;
  transition: 0.5s;
  display: block;
}
.cardInfo {
  display: flex;
  justify-content: space-between;
}
a {
  color: black;
  text-decoration: none;
}
h4 {
  margin: 8px 0 0;
}
</style>