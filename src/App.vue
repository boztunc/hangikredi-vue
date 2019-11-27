<template>
  <div id="app">
    <router-view></router-view>
    
  </div>
</template>

<script>
import Home from "./Home.vue";
import Detail from "./Detail.vue";
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/detail/:movieID",
    component: Detail
  }
];

const router = new VueRouter({ routes });

export default {
  router,

};
</script>
