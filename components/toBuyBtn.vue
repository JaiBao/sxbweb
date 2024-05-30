<template>
  <q-btn class="toBuyBtn" @click="toBuy">立即購買</q-btn>
</template>
<script setup>
import { useUniversal } from '~/stores/universal'
const { toBuy } = useUniversal()
</script>

<style lang="scss" scoped>
.toBuyBtn {
  display: flex;
  width: 325px;
  height: 110px;
  padding: 32px 106px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 27.2px */
  box-shadow: none;
  flex-shrink: 0;
  color: #3e3a39;
  border-radius: 9999px;
  background: #acacac;
  &:hover {
    background: #f7b52c;
    color: #fff;
  }
  @media (min-width: 768px) {
    font-size: 28px;
  }
}
</style>
