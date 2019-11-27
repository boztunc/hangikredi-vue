<template>
  <div id="detail_page">
    <Header :title="movie.title" />
    <div class="detail">
      <div class="detail__block">
        <div class="detail__info_container">
          <ul>
            <li>
              Vizyon Yılı:
              <label>{{movie.year}}</label>
            </li>
            <li>
              Film Süresi:
              <label>{{movie.duration}}</label>
            </li>
            <li>
              Dil:
              <label>{{movie.lang}}</label>
            </li>
            <li>
              Aktörler:
              <label>{{movie.actors}}</label>
            </li>
            <li>
              IMDB Puanı:
              <label>{{movie.rate}}</label>
            </li>
          </ul>
          <img :src="movie.poster" />
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
import axios from "axios";
const $ = require("jquery");

export default {
  name: "detail_page",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      movie: []
    };
  },
  created() {
    axios
      .get(
        "http://www.omdbapi.com/?i=" +
          this.$route.params.movieID +
          "&apikey=e94599f2"
      )
      .then(data => {
        var durationInfo = data.data.Runtime.split(" ")[1];
        durationInfo === "min" ? (durationInfo = " Dakika") : durationInfo;
        this.movie = {
          title: data.data.Title,
          year: data.data.Year,
          lang: data.data.Language,
          poster: data.data.Poster,
          rate: data.data.imdbRating,
          duration: data.data.Runtime.split(" ")[0] + durationInfo,
          actors: data.data.Actors
        };
      });
  },
  mounted() {
    if (window.innerWidth <= 776) {
      $(".detail__info_container img").insertBefore(
        $(".detail__info_container ul")
      );
    }
  }
};
</script>