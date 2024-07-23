<template>
  <q-page>
    <section class="recommendSection1">
      <h5 class="section1Title">口碑推薦</h5>
      <div class="recommendContainer">
        <q-card v-for="card in cards" :key="card.id" class="recommendCard">
          <div class="cardTitle">
            <img :src="card.avator" :alt="card.id" class="avator" />
            <div class="titles">
              <p class="title">{{ card.title }}</p>

              <p class="identity">{{ card.identity }}</p>
              <q-btn :ripple="false" class="toBuy lt-md" @click="toBuy">{{ card.toBuy }}</q-btn>
            </div>
          </div>
          <div class="cardContent">
            <p class="content">{{ card.content }}</p>
            <!-- <p class="note lt-md">{{ card.note }}</p> -->
            <!-- <q-btn :ripple="false" class="toBuy gt-sm" :to="card.href">{{ card.toBuy }}</q-btn> -->
            <bubbleBtn @click="toBuy" />
          </div>
        </q-card>
      </div>
    </section>
  </q-page>
</template>
<script setup>
import { useUniversal } from '~/stores/universal'
const { toBuy } = useUniversal()

useHead({
  title: '超高人氣少小白，知名網紅、部落客熱力推薦',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '少小白新纖餅和頂級豆奶，高品質當然擁有好口碑，產品一上市便深受眾多網紅強力推薦。無論是喝起來更加安心的好評或是讓人驚艷的口味都是品嚐過後少小白的真實體驗和評價！ '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '超高人氣少小白，知名網紅、部落客熱力推薦'
    },
    {
      property: 'og:description',
      content:
        '少小白新纖餅和頂級豆奶，高品質當然擁有好口碑，產品一上市便深受眾多網紅強力推薦。無論是喝起來更加安心的好評或是讓人驚艷的口味都是品嚐過後少小白的真實體驗和評價！ '
    },
    {
      property: 'og:image',
      content: 'https://www.imsxb.com.tw/index/ogImage.png'
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
const cards = ref([
  {
    id: 1,
    avator: '/recommend/avator.png',
    title: "elaine's 貪吃鬼",
    identity: '美食部落客',
    toBuy: '前往商品頁面購買 〉',
    href: '/cookie',
    content: '少小白頂級豆奶採用契作非基改黃豆，高規格的中央廚房和統一化的專業製程,成份只有水與黃豆，沒有人工香料、防腐劑、消泡劑，就像在家裡煮的豆漿，令人安心。',
    note: 'ＸＸＸＸＸ。'
  },
  {
    id: 2,
    avator: '/recommend/avator2.png',
    title: '派熊愛吃派',
    identity: '營養師',
    toBuy: '前往商品頁面購買 〉',
    href: '/',
    content: '豆漿相當純，比一般市面上販售的豆漿相對濃郁許多，可以看到有許多堅果粒並且不添加防腐劑，喝起來更加安心。',
    note: 'ＸＸＸＸＸ。'
  },
  {
    id: 3,
    avator: '/recommend/avator3.png',
    title: 'YEH世界',
    identity: '生活部落客',
    toBuy: '前往商品頁面購買 〉',
    href: '/',
    content: '最讓人驚豔之處是有著滑順的口感，入口的感受讓人覺得就是很有質感的豆奶。這是我從來沒喝過的豆奶，難怪敢號稱是台灣頂級豆奶。',
    note: 'ＸＸＸＸＸ。'
  },
  {
    id: 4,
    avator: '/recommend/avator4.png',
    title: '團媽花',
    identity: '團購主',
    toBuy: '前往商品頁面購買 〉',
    href: '/',
    content: '我開豆奶的團都會推薦女孩們用香蕉來搭配豆漿，可以打成果汁當早餐喝。因為香蕉的纖維質可以幫助腸胃蠕動，同時還可增添香甜的口味，而且飽足感很夠喔！',
    note: 'ＸＸＸＸＸ。'
  },
  {
    id: 5,
    avator: '/recommend/avator5.png',
    title: '小資伶',
    identity: '網紅',
    toBuy: '前往商品頁面購買 〉',
    href: '/',
    content: '少小白好喝的無糖豆奶，品質不錯。豆奶富含豐富的蛋白質，更有鈣、鐵等礦物質，在餐前喝可以補足人體所需營養，能夠增加飽足感，好處多多。',
    note: 'ＸＸＸＸＸ。'
  },
  {
    id: 6,
    avator: '/recommend/avator6.png',
    title: '大衛王',
    identity: '網紅',
    toBuy: '前往商品頁面購買 〉',
    href: '/',
    content: '我常常運動前後都會來上一杯無糖豆奶來補充蛋白質，個人喜歡沒有豆腥味的少小白頂級豆奶，豆奶質地好之外，更有香濃滑順的好口感。',
    note: 'ＸＸＸＸＸ。'
  }
])
</script>
<style lang="scss" scoped>
@import '/assets/recommend.scss';
</style>
