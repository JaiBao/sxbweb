<template>
  <q-page>
    <section class="cookieSection1">
      <img src="/cookie/web/p1.png" alt="cookie1" class="gt-sm" />
      <img src="/cookie/iphone/p1.png" alt="cookie1" class="lt-md" />
    </section>
    <section class="cookieSection2">
      <img src="/cookie/web/p2.png" alt="cookie2" class="gt-sm" />
      <img src="/cookie/iphone/p2.png" alt="cookie2" class="lt-md" />
    </section>
    <section class="cookieSection3">
      <img src="/cookie/web/p3.png" alt="cookie3" class="gt-sm" />
      <img src="/cookie/iphone/p3.png" alt="cookie3" class="lt-md" />
    </section>
    <section class="cookieSection4">
      <img src="/cookie/web/p4.png" alt="cookie4" class="gt-sm" />
      <img src="/cookie/iphone/p4.png" alt="cookie" class="lt-md" />
    </section>
    <section class="cookieSection5">
      <img src="/cookie/web/p5.png" alt="cookie5" class="gt-sm" />
      <img src="/cookie/iphone/p5.png" alt="cookie5" class="lt-md" />
    </section>
    <section class="cookieSection6">
      <img src="/cookie/web/p6.png" alt="cookie6" class="gt-sm" />
      <img src="/cookie/iphone/p6.png" alt="cookie6" class="lt-md" />
      <img src="/cookie/iphone/p7.png" alt="cookie6" class="lt-md" />
    </section>
    <section class="cookieSection7">
      <img src="/cookie/web/p7.png" alt="cookie7" class="gt-sm" />
      <img src="/cookie/iphone/p8.png" alt="cookie7" class="lt-md" />
    </section>
    <section class="cookieSection8">
      <img src="/cookie/web/p8.png" alt="cookie8" class="gt-sm" />
      <img src="/cookie/iphone/p9.png" alt="cookie8" class="lt-md" />
    </section>
    <!-- <section class="cookieSection9">
      <img src="/cookie/web/p9.png" alt="cookie9" class="gt-sm" />
      <img src="/cookie/iphone/p9.png" alt="cookie9" class="lt-md" />
    </section> -->
    <!-- <section class="cookieSection10">
      <img src="/cookie/web/p10.png" alt="cookie10" class="gt-sm" />
      <img src="/cookie/iphone/p10.png" alt="cookie10" class="lt-md" />
    </section> -->
    <section class="cookieSection11">
      <bubbleBtn2 />
    </section>
  </q-page>
</template>
<script setup>
useHead({
  title: '少小白新纖餅-純手作豆渣餅乾，含有膳食纖維的美味良食',
  meta: [
    // Description Meta Tag
    {
      name: 'description',
      content: '豆渣富含膳食纖維，被日本人視為健康食品。少小白新纖餅，採用天然黃豆渣手工製作，口感香酥鮮脆的新纖餅，無任何人工添加物，讓您享受健康與美味的雙重滿足。 '
    },
    // Open Graph
    {
      property: 'og:title',
      content: '少小白新纖餅-純手作豆渣餅乾，含有膳食纖維的美味良食'
    },
    {
      property: 'og:description',
      content: '豆渣富含膳食纖維，被日本人視為健康食品。少小白新纖餅，採用天然黃豆渣手工製作，口感香酥鮮脆的新纖餅，無任何人工添加物，讓您享受健康與美味的雙重滿足。 '
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
</script>
<style lang="scss" scoped>
@import '/assets/cookie.scss';
</style>
