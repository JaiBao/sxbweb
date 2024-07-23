<template>
  <Carousel v-bind="settings" :breakpoints="breakpoints" :wrap-around="true" :transition="500" :autoplay="4000">
    <Slide v-for="(slide, index) in slides" :key="index">
      <div class="carousel__item">
        <q-card class="readCard">
          <img :src="slide.image" alt="" />
          <q-card-section>
            <p class="rankCarouselTitle">{{ slide.title }}</p>
            <p class="rankCarouselContent gt-sm">{{ slide.content }}</p>
          </q-card-section>
        </q-card>
      </div>
    </Slide>
    <template #addons>
      <Pagination />
    </template>
    <!-- <template #addons>
      <navigation>
        <template #next>
          <img src="/index/iconRight.jpg" alt="next" />
        </template>
        <template #prev>
          <img src="/index/iconLeft.jpg" alt="prev" />
        </template>
      </navigation>
    </template> -->
  </Carousel>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

const slides = ref([
  {
    image: '/index/toMore.png',
    title: '營養滿分 助力孩童健康成長',
    content: '豆奶富含優質植物蛋白、鈣質、維生素D等重要營養素，對骨骼發育、免疫系統強化和整體健康至關重要。'
  },
  {
    image: '/index/toMore2.png',
    title: '乳糖不耐症患者 健康選擇首選',
    content: '豆奶不含乳糖，是乳糖不耐症患者的理想替代品。有效補充因無法飲用牛奶而缺失的營養，促進健康和營養平衡。'
  },
  {
    image: '/index/toMore3.png',
    title: '水果融合在豆奶的雙重美味',
    content: '新鮮水果富含維生素、抗氧化劑和膳食纖維，與豆奶搭配不僅增強了口感，還提升了整體營養價值。'
  },
  {
    image: '/index/toMore4.png',
    title: '輕盈美味 助力體重管理',
    content: '豆奶熱量較低，且富含優質植物蛋白和膳食纖維，有助於增強飽腹感，減少不必要的飲食攝取。'
  }
])
const settings = ref({
  itemsToShow: 2,
  snapAlign: 'center'
})

const breakpoints = ref({
  300: {
    itemsToShow: 2,
    snapAlign: 'center'
  },
  576: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  992: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  1200: {
    itemsToShow: 3.3,
    snapAlign: 'center'
  },
  1920: {
    itemsToShow: 3.3,
    snapAlign: 'center'
  }
})
</script>

<style lang="scss" scoped>
@import 'assets/components/cardCarousel';
</style>
