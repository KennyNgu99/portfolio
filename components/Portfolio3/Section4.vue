<template>
  <div class="social-media-section">
    <span class="social-title">Fun Fact!</span>
    <span class="social-subtitle">Experiences</span>
    <div class="scroll-wrapper" ref="scrollWrapper">
      <div class="scroll-container">
        <div class="project-card">Project 1</div>
        <div class="project-card">Project 2</div>
        <div class="project-card">Project 3</div>
        <div class="project-card">Project 4</div>
        <div class="project-card">Project 5</div>

        <!-- Duplicate Cards for Seamless Loop -->
        <div class="project-card">Project 1</div>
        <div class="project-card">Project 2</div>
        <div class="project-card">Project 3</div>
        <div class="project-card">Project 4</div>
        <div class="project-card">Project 5</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const scrollWrapper = ref<HTMLElement | null>(null)

onMounted(() => {
  let isDown = false
  let startX: number
  let scrollLeft: number
  let lastMouseX: number
  let velocity = 0
  let inertiaAnimationFrame: number | null = null

  const wrapper = scrollWrapper.value
  if (!wrapper) return

  // Start Drag
  wrapper.addEventListener('mousedown', (e) => {
    isDown = true
    wrapper.classList.add('active')
    startX = e.pageX - wrapper.offsetLeft
    scrollLeft = wrapper.scrollLeft
    lastMouseX = e.pageX
    velocity = 0
    if (inertiaAnimationFrame) {
      cancelAnimationFrame(inertiaAnimationFrame)
      inertiaAnimationFrame = null
    }
  })

  // Stop Drag
  wrapper.addEventListener('mouseup', () => {
    isDown = false
    wrapper.classList.remove('active')
    applyInertia()
  })

  wrapper.addEventListener('mouseleave', () => {
    isDown = false
    wrapper.classList.remove('active')
    applyInertia()
  })

  // Drag Movement
  wrapper.addEventListener('mousemove', (e) => {
    if (!isDown) return
    e.preventDefault()

    const x = e.pageX - wrapper.offsetLeft
    const walk = (x - startX) * 1.5 // Adjust drag sensitivity
    wrapper.scrollLeft = scrollLeft - walk

    // Calculate velocity (difference between current and last mouse position)
    velocity = e.pageX - lastMouseX
    lastMouseX = e.pageX
  })

  // Apply Inertia After Drag Ends
  function applyInertia() {
    if (Math.abs(velocity) > 0.5) {
      if (wrapper) {
        wrapper.scrollLeft -= velocity * 2 // Adjust momentum multiplier
        velocity *= 0.95 // Damping factor (reduce velocity over time)
        inertiaAnimationFrame = requestAnimationFrame(applyInertia)
      }
    } else {
      velocity = 0
      if (inertiaAnimationFrame) {
        cancelAnimationFrame(inertiaAnimationFrame)
        inertiaAnimationFrame = null
      }
    }
  }
})
</script>

<style lang="scss" scoped>
.social-media-section {
  margin: 50px 15px 50px 15px;
  background-color: var(--contrast-color);
  border-radius: 10px;
  height: 87vh;
  display: flex;
  flex-direction: column;
}

.social-title {
  margin: 3rem 0 0 5rem;
  font-weight: 700;
  font-size: 2rem;
  color: var(--background-orange-color);
}

.social-subtitle {
  margin-left: 5rem;
  font-size: 4rem;
  color: var(--text-sec-color);
  font-weight: 700;
}

/* Scroll Wrapper */
.scroll-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin: 50px 5rem 0 5rem;
  white-space: nowrap;
  user-select: none;
}

/* Scroll Container */
.scroll-container {
  display: flex;
  white-space: nowrap;
  animation: scroll 20s linear infinite; /* Smooth infinite scrolling */
  width: max-content; /* Adjust width based on content */
}

/* Project Cards */
.project-card {
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: inline-flex;
  border-radius: 8px;
  height: 47vh;
  width: 25vw;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  flex-shrink: 0;
}

/* Pause Scroll Animation on Hover */
.scroll-wrapper:hover .scroll-container {
  animation-play-state: paused;
  cursor: grab;
}

.project-card:hover {
  transform: scale(1.05);
  border-radius: 18px;
}

/* While dragging */
.scroll-wrapper:active .scroll-container {
  cursor: grabbing;
  background-color: transparent;
}

// Animation definition
/* Keyframes for Seamless Scrolling */
@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
