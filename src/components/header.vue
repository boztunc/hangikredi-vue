<template>
  <div class="header">
    <div class="header__container">
      <div class="header__left_block" v-if="!title">
        <h1>
          Lorem Ipsum
          <br />Dolor sit amet consectetur..
        </h1>

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor</p>
        <button type="button">CTA BUTTON</button>
      </div>
      <div class="header__detail_title" v-else>
        <span>{{title}}</span>
      </div>
      <div class="header__right_block" v-if="!title">
        <img src="../assets/images/header_img.png" alt="hangikredi araba" />
      </div>
    </div>
    <div class="header__opacity"></div>
  </div>
</template>

<script>

export default {
  props: {
    title: { type: String }
  }
};
</script>

