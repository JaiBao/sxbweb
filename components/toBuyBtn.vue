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
  width: 50%;
  padding: 22px 36px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 160%; /* 27.2px */
  box-shadow: none;
  border: 2px solid #f7a62c;
  flex-shrink: 0;
  color: #f7a62c;
  border-radius: 9999px;
  background: transparent;
  &::before {
    box-shadow: none;
  }
  &:hover {
    background: #f7b52c;
    color: #fff;
  }
}
</style>
