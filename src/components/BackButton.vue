<template>
  <router-link class="backButton" :to="route">
    <i class="fas fa-arrow-left"></i>
  </router-link>
</template>

<script>
export default {
  name: "BackButton",
  props: ["route"],
};
</script>

<style scoped>
.backButton {
  position: fixed;
  color: black;
  background-color: white;
  text-decoration: none;
  border-radius: 32px;
  padding: 12px;
  border: none;
  top: 8px;
  left: 8px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  transition: 0.3s;
}
.backButton:hover {
  filter: brightness(0.9);
  cursor: pointer;
}
</style>