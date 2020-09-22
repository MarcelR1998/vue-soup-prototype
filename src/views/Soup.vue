<template>
  <div class="soup">
    <div class="widthContainer">
      <h1>This is the unique page for {{name}}</h1>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: this.$route.params.name,
    };
  },
};
</script>