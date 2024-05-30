<template>
  <div>
    <div class="blob"></div>
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none">
      <defs>
        <filter id="goo">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
          <feBlend in2="goo" in="SourceGraphic" />
        </filter>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'GooeyEffect'
}
</script>

<style scoped>
.blob {
  margin-top: 20%;
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  animation: move 6s infinite;
  filter: url('#goo');
}

@keyframes move {
  0%,
  100% {
    top: 20px;
    left: 20px;
  }
  50% {
    top: 150px;
    left: 150px;
  }
}
</style>
