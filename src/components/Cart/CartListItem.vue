<template>
  <div class="cartListItem">
    <div id="soupInfo">
      <img :src="imageUrl" alt="" />
      <div id="titleAndPrice">
        <span>{{ name }}</span>
        <span id="price">{{ price }} SEK</span>
      </div>
    </div>
    <div id="buttons">
      <div id="amountControl">
        <button @click="removeOne" id="decreaseAmountButton">-</button>
        <span>{{ amount }}</span>
        <button @click="addOne" id="increaseAmountButton">+</button>
      </div>
      <button @click="deleteSoup" id="deleteSoup">X</button>
    </div>
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
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 16px;
}
img {
  width: 64px;
  height: 64px;
  object-fit: cover;
  border-radius: 8px;
}
#soupInfo {
  display: flex;
}
#titleAndPrice {
  margin-left: 4px;
  display: flex;
  flex-direction: column;
}
#price {
  color: #9d9d9d;
  font-size: 14px;
  margin-top: 4px;
}
#buttons {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}
#amountControl {
  width: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#decreaseAmountButton {
  color: #979797;
  background-color: #e5e5e5;
  border: none;
  cursor: pointer;
}
#increaseAmountButton {
  color: #20d994;
  background-color: rgb(0 160 5 / 0.1);
  border: none;
  cursor: pointer;
}
#deleteSoup {
  float: right;
  color: #ce0000;
  background-color: rgb(206 0 0 / 0.1);
  border: none;
  cursor: pointer;
}
</style>