<template>
  <q-page>
    <section class="indexSection1">
      <bannerCarousel class="gt-sm" />
      <bannerAppCarousel class="lt-md" />
    </section>

    <section class="indexSection2">
      <div class="section2Container">
        <h5>熱門商品</h5>
        <q-tabs v-model="tab" class="black" active-color="yellow-7">
          <q-tab :ripple="false" name="soy" label="頂級豆奶" />
          <q-tab :ripple="false" name="cookie" label="新纖餅" />
        </q-tabs>

        <q-tab-panels v-model="tab" animated class="section2TabPanels">
          <q-tab-panel class="tabPanel" name="soy">
            <div class="topImg">
              <img src="/index/productSoy.png" alt="soy1" class="gt-sm" />
              <img src="/index/productSoyApp.png" alt="soy3" class="lt-md" />
              <img src="/index/productSoy2.png" alt="soy2" class="gt-sm" />
            </div>
            <div class="bottomImg">
              <img src="/index/productSoy3.png" alt="soy3" />

              <img src="/index/productSoy4.png" alt="soy4" />
              <img src="/index/productSoy5.png" alt="soy5" />
              <img src="/index/productSoy6.png" alt="soy6" />
            </div>
          </q-tab-panel>

          <q-tab-panel name="cookie" class="tabPanel">
            <div class="topImg">
              <img src="/index/productCookieApp.png" alt="cookie1" class="lt-md" />
              <img src="/index/productCookie.png" alt="cookie1" class="gt-sm" />
              <img src="/index/productCookie2.png" alt="cookie2" class="gt-sm" />
            </div>
            <div class="bottomImg">
              <img src="/index/productCookie3.png" alt="cookie3" />
              <img src="/index/productCookie4.png" alt="cookie4" />
              <img src="/index/productCookie5.png" alt="cookie5" />
              <img src="/index/productCookie6.png" alt="cookie6" />
            </div>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </section>

    <section class="indexSection3">
      <div class="section3Container">
        <h5>超值優惠</h5>
        <div class="section3Cards">
          <q-card class="section3Card" v-for="card in section3Cards" :key="card.id">
            <img :src="card.img" alt="優惠" />
            <q-card-section class="section3CardTxt">
              <p>{{ card.description }}</p>
            </q-card-section>
          </q-card>
        </div>
      </div>
    </section>

    <section class="indexSection4">
      <div class="section4Container">
        <h5>探索更多</h5>
        <cardCarousel />
      </div>
    </section>
    <section class="indexSection5">
      <div class="section5Container">
        <h5>少小白特色</h5>
        <div class="section5Cards">
          <card v-for="(section5Card, index) in section5Cards" :key="index" class="section5Card">
            <img :src="section5Card.image" />
            <p class="title">{{ section5Card.title }}</p>
            <p class="content">{{ section5Card.content }}</p>
          </card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup>
useHead({
  title: '少小白-天然無添加頂級豆奶X豆渣新纖餅',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '簡單原味沒有過多的包裝，這是少小白給您的最好品質。每天都想品嚐清新美味的豆渣手工新纖餅；每日都期待著喝上一杯純淨無添加的頂級豆奶，用香濃魔法喚醒一整天的活力！ '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '少小白-天然無添加頂級豆奶X豆渣新纖餅'
    },
    {
      property: 'og:description',
      content:
        '簡單原味沒有過多的包裝，這是少小白給您的最好品質。每天都想品嚐清新美味的豆渣手工新纖餅；每日都期待著喝上一杯純淨無添加的頂級豆奶，用香濃魔法喚醒一整天的活力！ '
    },
    {
      property: 'og:image',
      content: 'https://www.imsxb.com.tw/index/ogImg.png'
    },
    {
      property: 'og:image:alt',
      content: '少小白'
    },
    {
      property: 'og:url',
      content: 'https://www.imsxb.com.tw/'
    },
    {
      property: 'og:type',
      content: 'website'
    },
    {
      name: 'author',
      content: 'bao'
    }
  ]
})

const tab = ref('soy')
const bannerSlide = ref(2)
const bannerAutoplay = ref(5000)
const section3Cards = [
  { id: 1, img: '/index/shopDiscount.png', description: '商城優惠' },
  { id: 2, img: '/index/groupDiscount.png', description: '團購優惠' },
  { id: 3, img: '/index/monthFeature.png', description: '本月精選' }
]
const section5Cards = ref([
  {
    image: '/index/icon4.png',
    title: '純淨O添加',
    content: '100%純天然 無人工添加'
  },
  {
    image: '/index/icon3.png',
    title: '友善環境',
    content: '在地製造 減少碳足跡'
  },
  {
    image: '/index/icon2.png',
    title: '中央廚房',
    content: '統一化專業管理製程 食安把關'
  },
  {
    image: '/index/icon.png',
    title: '新鮮配送',
    content: '從生產到物流配送 新鮮送達'
  }
])
</script>

<style lang="scss" scoped>
@import '/assets/index.scss';
</style>
