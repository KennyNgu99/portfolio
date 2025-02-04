<template>
  <!-- top bar -->
  <Portfolio3Header :class="['header', { sticky: isSticky }]" @navigate="scrollToSection" />

  <!-- FIRST SECTION -->
  <!-- Home section -->
  <div ref="home">
    <Portfolio3Section1 />
  </div>

  <!-- SECTION 2 -->
  <!-- Work Experience Section -->
  <div ref="section2Ref">
    <Portfolio3Section2 :isVisible="isSection2Visible" />
  </div>

  <!-- SECTION 3 -->
  <!-- Projects Section -->
  <div ref="projects">
    <Portfolio3Section3New />
  </div>

  <!-- SECTION 4 -->
  <!-- Fun Fact Section -->
  <div ref="funFact">
    <Portfolio3Section4 />
  </div>

  <!-- SECTION 5 -->
  <!-- Contact Section -->
  <div ref="contact">
    <Portfolio3Section5 />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, type Ref } from 'vue'

definePageMeta({
  layout: false,
})

// Reactive variables for header behavior
const isSticky = ref<boolean>(false)
const isSection2Visible = ref<boolean>(false)

// Function to handle scroll
const checkScroll = () => {
  const offset = window.scrollY
  isSticky.value = offset > 100
}

// Intersection Observer for Section 2
const section2Ref = ref<HTMLElement | null>(null)
const handleIntersection = (entries: IntersectionObserverEntry[]) => {
  const entry = entries[0]
  isSection2Visible.value = entry.isIntersecting
}

// Refs for sections
const home = ref<HTMLElement | null>(null)
// const workExperience = ref<HTMLElement | null>(null)
const projects = ref<HTMLElement | null>(null)
const funFact = ref<HTMLElement | null>(null)
const contact = ref<HTMLElement | null>(null)

// Function to handle scrolling to section (redirection)
const scrollToSection = (section: string) => {
  const sectionMap: Record<string, Ref<HTMLElement | null>> = {
    home,
    section2Ref,
    projects,
    funFact,
    contact,
  }

  const targetSection = sectionMap[section]?.value
  if (targetSection) {
    // targetSection.scrollIntoView({ behavior: 'smooth' })
    const offsetDeviation = ref<number>(0)
    switch (section) {
      case 'section2Ref':
        offsetDeviation.value = 30
        break
      case 'funFact':
        offsetDeviation.value = 30
        break
      default:
        offsetDeviation.value = 100
    }
    const topPosition = targetSection.offsetTop - offsetDeviation.value
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    })
  }
}

// Attach event listener on mount
onMounted(() => {
  window.addEventListener('scroll', checkScroll)
  // Initialize Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    // Trigger when 20% of section is visible
    threshold: 0.2,
  })

  if (section2Ref.value) {
    observer.observe(section2Ref.value)
  }
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
