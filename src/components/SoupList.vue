<template>
  <div class="SoupList">
    <div class="widthContainer">
      <h2>Popular</h2>

      <h2>All our soups</h2>
      <!-- Renders a list of all soups -->
      <div v-for="soup in mockSoupData" :key="soup.name">
        <SoupCard :name="soup.name" :price="soup.price" :imageUrl="soup.imageUrl" />
      </div>
    </div>
  </div>
</template>

<script>
import SoupCard from "./SoupCard";

export default {
  name: "SoupList",
  components: { SoupCard },
  data() {
    return {
      mockSoupData: [
        {
          name: "Gazpacho",
          price: 80,
          imageUrl:
            "https://imgs.aftonbladet-cdn.se/v2/images/7c85984e-68e3-4524-bec4-d39d0455b7c9?fit=crop&h=593&q=50&w=790&s=79e617553724b5953263a1221decb23db34d0a45",
        },
        {
          name: "Mushroom soup",
          price: 82,
          imageUrl:
            "https://www.budgetbytes.com/wp-content/uploads/2017/09/Creamy-Garlic-Mushroom-Soup-spoon.jpg",
        },
        {
          name: "Lentil soup",
          price: 70,
          imageUrl:
            "https://i2.wp.com/lifemadesimplebakes.com/wp-content/uploads/2019/02/Lentil-Vegetable-Soup.jpg",
        },
        {
          name: "Beef stew",
          price: 95,
          imageUrl:
            "https://chowhound1.cbsistatic.com/assets/2014/09/30301_easy_beef_stew_3000x2000.jpg",
        },
      ],
    };
  },
};
</script>

<style scoped>
.SoupList {
  padding: 8px;
  background-color: rgb(250, 250, 250);
}
</style>