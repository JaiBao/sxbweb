<template>
  <q-page>
    <section class="aboutSection1">
      <div class="section1Container">
        <img src="/aboutUs/BG.png" alt="banner" class="gt-sm" />
        <img src="/aboutUs/BGApp.png" alt="banner" class="lt-md" />
      </div>
    </section>
    <section class="aboutSection2">
      <div class="section2Container">
        <img src="/aboutUs/imsxb.png" alt="imsxb" class="gt-sm" />
        <img src="/aboutUs/imsxbApp.png" alt="imsxb" class="lt-md" />
        <p class="title2">
          <span class="title">以愛為出發點</span>
          愛家人、愛朋友、愛自己
          <br />
          給自己也給所愛的人最好、最安心的產品
        </p>
        <p class="content">
          少小白追求簡單的製程，給您不簡單的高品質，選用天然無添加的製作理念，
          <br />
          呈現高於業界的頂級豆奶與系列產品。
          <br />
          <span class="content2">純淨0添加</span>
          ，
          <span class="content2">使用天然食材</span>
          ，
          <span class="content2">拒絕人工香料和防腐劑</span>
          ，給您每一口都是安心與健康的承諾。
        </p>
      </div>
      <img src="/aboutUs/pic.png" alt="img" />
    </section>

    <section class="aboutSection3">
      <div class="section3Container">
        <h6 class="title">香濃魔法 喚醒活力的每一天</h6>
        <p class="title2">每天都期待著起床喝一杯的少小白頂級豆奶，補滿一整天活力。</p>
        <img src="/aboutUs/text.png" alt="text" class="textImg" />
      </div>
      <div class="section3Container2">
        <h6 class="title">
          純粹
          <span>X</span>
          天然
          <span>少小白的初衷</span>
        </h6>
        <p class="content">
          強調食品安全,透過中央廚房的統一化專業管理製程，確保產品的衛生和品質。少小白相信
          <br />
          全程新鮮配送能讓消費者享受最新鮮的美食,同時也關注環境保護,
          <br />
          支持在地製造,減少碳足跡,為地球的未來盡一份心力。
        </p>
      </div>
    </section>

    <section class="aboutSection4">
      <div class="section4Container">
        <h5>品牌DNA</h5>
        <div class="section4Cards">
          <q-card v-for="(section4Card, index) in section4Cards" :key="index" class="section4Card gt-sm">
            <img :src="section4Card.image" />
            <!-- <p class="title">{{ section4Card.title }}</p> -->
            <p class="content">{{ section4Card.content }}</p>
          </q-card>
        </div>
        <div class="section4Cards">
          <q-card v-for="(section4Card, index) in section4Cards2" :key="index" class="section4Card lt-md">
            <img :src="section4Card.image" />
            <!-- <p class="title">{{ section4Card.title }}</p> -->
            <p class="content">{{ section4Card.content }}</p>
          </q-card>
        </div>
      </div>
    </section>

    <section class="aboutSection5">
      <div class="section5Container">
        <h6>少小白的承諾</h6>
        <p>
          100%純天然無添加任何人工成分,
          <br />
          讓你可以放心享用每一口。 嚴選非基改優質大豆,堅守食品安全和健康的承諾。
        </p>
        <br />
        <br />
        <p>
          中央廚房專業製程把關,確保衛生安全,營養風味盡在;
          <br />
          新鮮配送直達你手中,美味最佳新鮮狀態,滋味無虞。
        </p>
        <p>
          <span class="focus">支持在地製造</span>
          ,
          <span class="focus">減少碳足跡</span>
          ,用實際行動關注環境永續。
        </p>
        <br />
        <br />
        <p>少小白用心將安全、健康、環保注入每一滴豆奶的核心價值,成就值得你我信賴的優質品牌,用愛呵護好這片土地。</p>
      </div>
    </section>

    <section class="aboutSection6">
      <div class="section6Container">
        <div class="texts">
          <p class="title">專業團隊食安把關</p>
          <p class="content">中央廚房統一化的專業管理製程，從採購選食材 、生產到物流配送 ，把關食品安全衛生 。</p>
        </div>
        <div class="imgs">
          <div class="top">
            <img src="/aboutUs/pic1.png" alt="img1" class="gt-sm" />
            <img src="/aboutUs/pic1App.png" alt="img1" class="lt-md" />
          </div>
          <div class="bottom">
            <img src="/aboutUs/pic2.png" alt="img1" />
            <img src="/aboutUs/pic3.png" alt="img1" />
          </div>
        </div>
      </div>
    </section>

    <section class="aboutSection7">
      <img src="/aboutUs/pic4.png" alt="pic" class="gt-sm" />
      <img src="/aboutUs/pic4App.png" alt="pic" class="lt-md" />
    </section>
  </q-page>
</template>

<script setup>
useHead({
  title: '少小白 – 用愛感受自然，品味美好與純淨',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content:
        '少小白堅持無添加，在您了解少小白的品牌理念，您會發現少小白就是這麼簡單、自然。以純正非基改黃豆製作出豆渣新纖餅與純淨頂級豆奶，讓您和家人享受純天然的美好生活。 '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '少小白 – 用愛感受自然，品味美好與純淨'
    },
    {
      property: 'og:description',
      content:
        '少小白堅持無添加，在您了解少小白的品牌理念，您會發現少小白就是這麼簡單、自然。以純正非基改黃豆製作出豆渣新纖餅與純淨頂級豆奶，讓您和家人享受純天然的美好生活。 '
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
const section4Cards = ref([
  {
    image: '/aboutUs/icon1.png',
    title: '綠色健康',
    content: '注重健康與環保，使用天然、有機的原料製作豆奶和調味豆奶。'
  },
  {
    image: '/aboutUs/icon2.png',
    title: '創新多樣',
    content: '透過不斷創新，推出多種口味和類型的豆奶、調味豆奶，以及利用豆渣製成的烘焙商品，如餅乾和麵包。'
  },
  {
    image: '/aboutUs/icon3.png',
    title: '社區參與',
    content: '與當地農民合作，支持社區發展，並推動社會責任計畫。'
  },
  {
    image: '/aboutUs/icon4.png',
    title: '適合族群',
    content: '注重健康生活的消費者，關心環境問題，偏好使用天然、有機和可持續產品，尤其是年輕專業人士和健康意識強的家庭。'
  }
])
const section4Cards2 = ref([
  {
    image: '/aboutUs/iconapp1.png',
    title: '綠色健康',
    content: '注重健康與環保，使用天然、有機的原料製作豆奶和調味豆奶。'
  },
  {
    image: '/aboutUs/iconapp2.png',
    title: '創新多樣',
    content: '透過不斷創新，推出多種口味和類型的豆奶、調味豆奶，以及利用豆渣製成的烘焙商品，如餅乾和麵包。'
  },
  {
    image: '/aboutUs/iconapp3.png',
    title: '社區參與',
    content: '與當地農民合作，支持社區發展，並推動社會責任計畫。'
  },
  {
    image: '/aboutUs/iconapp4.png',
    title: '適合族群',
    content: '注重健康生活的消費者，關心環境問題，偏好使用天然、有機和可持續產品，尤其是年輕專業人士和健康意識強的家庭。'
  }
])
</script>

<style lang="scss" scoped>
@import '/assets/aboutUs.scss';
</style>
