<template>
  <div class="cartListItem">
    <div id="soupInfo">
      <img :src="imageUrl" alt="" />
      <div id="titleAndPrice">
        <span>{{ name }}</span>
        <span>{{ price }} SEK</span>
      </div>
    </div>
    <div>
      <button @click="removeOne">-</button>
      <span>{{ amount }}</span>
      <button @click="addOne">+</button>
    </div>
    <button @click="deleteSoup" id="deleteSoup">X</button>
  </div>
</template>

<script>
export default {
  name: "cartListItem",
  props: ["id", "name", "price", "amount", "imageUrl"],
  methods: {
    addOne() {
      let id = this.id;
      this.$store.commit("addOne", id);
    },
    removeOne() {
      let id = this.id;
      this.$store.commit("removeOne", id);
    },
    deleteSoup() {
      let id = this.id;
      this.$store.commit("deleteSoup", id);
    },
  },
};
</script>

<style scoped>
.cartListItem {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
}
#deleteSoup {
  float: right;
}
img {
  width: 64px;
  height: 64px;
  object-fit: cover;
}
#soupInfo {
  display: flex;
}
#titleAndPrice {
  display: flex;
  flex-direction: column;
}
</style>