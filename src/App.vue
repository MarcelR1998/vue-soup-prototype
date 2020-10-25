<template>
  <!-- https://github.com/filoxo/vue-visible-focus -->
  <!-- Vue visible focus, prevents focus on click but retains tab focusing -->
  <focus-visible elem="main">
    <div id="app">
      <router-view />
    </div>
  </focus-visible>
</template>

<script>
/* https://github.com/filoxo/vue-visible-focus */
//Vue visible focus, prevents focus on click but retains tab focusing
import FocusVisible from "vue-visible-focus";
import "vue-visible-focus/dist/vue-visible-focus.css"; // or include `[data-focus-visible="false"] * { outline: none; }` in your own styles

export default {
  components: {
    "focus-visible": FocusVisible,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap");
body {
  margin: 0;
}
* {
  font-family: "Quicksand", sans-serif;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: auto;
}
.widthContainer {
  max-width: 512px;
  margin: auto;
}
</style>
