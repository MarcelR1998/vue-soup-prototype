<template>
  <div class="cartListItem">
    <span>{{ name }}</span>
    <span>{{ price }} SEK</span>
    <div>
      <button @click="removeOne">-</button>
      <span>{{ amount }}</span>
      <button @click="addOne">+</button>
      <button @click="deleteSoup" id="deleteSoup">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "cartListItem",
  props: ["id", "name", "price", "amount"],
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
</style>