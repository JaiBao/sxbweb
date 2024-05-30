<template>
  <div class="banner">
    <q-carousel
      v-model="bannerSlide"
      swipeable
      navigation
      infinite
      padding
      animated
      control-color="pink-8"
      class="rounded-borders"
      prev-icon="arrow_back_ios"
      next-icon="arrow_forward_ios"
      transition-prev="slide-right"
      transition-next="slide-right"
      arrows
      :autoplay="bannerAutoplay">
      <!-- 第一張輪播圖片 -->
      <q-carousel-slide :name="1">
        <!-- <nuxt-link> -->
        <img src="/index/bg.jpg" alt="Banner" />
        <!-- </nuxt-link> -->
      </q-carousel-slide>

      <!-- 第二張輪播圖片 -->
      <q-carousel-slide :name="2">
        <!-- <nuxt-link> -->
        <img src="/index/bg.jpg" alt="Banner4" />
        <!-- </nuxt-link> -->
      </q-carousel-slide>
      <!-- 第三張輪播圖片 -->
      <q-carousel-slide :name="3">
        <!-- <nuxt-link to="/group"> -->
        <img src="/index/bg.jpg" alt="Banner5" />
        <!-- </nuxt-link> -->
      </q-carousel-slide>

      <template v-slot:navigation-icon="{ active, onClick }">
        <q-btn class="carouselBtn2" v-if="active" size="sm" color="yellow-7" flat dense @click="onClick" />
        <q-btn class="carouselBtn" v-else size="sm" color="brown-7" flat dense @click="onClick" />
      </template>
    </q-carousel>
  </div>
</template>
<script setup></script>
