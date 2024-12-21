<template>
  <!-- top bar -->
  <Portfolio3Header :class="['header', { sticky: isSticky }]" />

  <!-- FIRST SECTION -->
  <!-- Home section -->
  <Portfolio3Section1 />

  <!-- SECTION 2 -->
  <!-- Experience Section -->
  <Portfolio3Section2 />
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

definePageMeta({
  layout: false,
})

// Reactive variables for header behavior
const isSticky = ref<boolean>(false)

// Function to handle scroll
const checkScroll = () => {
  const offset = window.scrollY
  isSticky.value = offset > 100
}

// Attach event listener on mount
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
})

// Cleanup on unmount
onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})
</script>

<style lang="scss" scoped>
/* Base Header Style */
.header {
  background-color: transparent;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

/* Sticky State */
.sticky {
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  animation: slideDown 0.3s ease-out;
}

@keyframes slideDown {
  0% {
    transform: translateY(-50px);
    opacity: 0.4;
  }
  25% {
    transform: translateY(-30px);
    opacity: 0.6;
  }
  50% {
    transform: translateY(-15px);
    opacity: 0.8;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
