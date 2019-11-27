<template>
  <div id="home">
    <Header />
    <Movie />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Movie from "./components/movie.vue";
import Footer from "./components/footer.vue";


export default {
  name: "home",
  components: {
    Header,
    Movie,
    Footer
  }
};
</script>