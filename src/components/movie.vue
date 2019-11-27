
<template>
  <div class="main">
    <div v-for="(movie,index) in movies" v-bind:key="index" class="main__product_container">
      <div class="main__card_panel main__card_panel--gray main__card_panel--gray_mobile" v-if="movies[index].bgColor">
        <div class="main__product">
          <h3>{{movies[index].title}}</h3>
          <img :src="movies[index].poster" />
        </div>
        <div class="main__product_info">
          <span>{{movies[index].desc}}</span>
        </div>
        <div class="main__product_price">
          <span>Puan: {{movies[index].rate}}</span>
          <router-link :to="{ path: '/detail/'+movies[index].imdbID}" tag="button">DETAY</router-link>
        </div>
      </div>
      <div class="main__card_panel" v-else>
        <div class="main__product">
          <h3>{{movies[index].title}}</h3>
          <img :src="movies[index].poster" />
        </div>
        <div class="main__product_info">
          <span>{{movies[index].desc}}</span>
        </div>
        <div class="main__product_price">
          <span>Puan: {{movies[index].rate}}</span>
          <router-link :to="{ path: '/detail/'+movies[index].imdbID}" tag="button">DETAY</router-link>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";
var movieList = ["tt1375666", "tt0096895", "tt0078346","tt0816692"];

export default {
  data() {
    return {
      movies: []
    };
  },
  created() {
    
    var count = 0;
    movieList.map(id => {
      axios
        .get("http://www.omdbapi.com/?i=" + id + "&apikey=e94599f2")
        .then(data => {
          count++;
          var bgGray = false;
          if (count % 2 === 0) bgGray = true;

          this.movies.push({
            title: data.data.Title,
            desc: data.data.Plot,
            poster: data.data.Poster,
            rate: data.data.imdbRating,
            imdbID: data.data.imdbID,
            bgColor: bgGray
          });
        });
    });
  }
};
</script>


