<template>
  <div class="home">
    <Hero />
    <SoupList />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
/* import HelloWorld from '@/components/HelloWorld.vue' */
import Hero from "./../components/Home/Hero";
import SoupList from "./../components/Home/SoupList";
import Footer from "./../components/Home/Footer";

export default {
  name: "Home",
  components: { Hero, SoupList, Footer },
};
</script>
