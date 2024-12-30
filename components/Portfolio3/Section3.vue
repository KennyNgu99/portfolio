<template>
  <div class="project-section">
    <div class="top-section">
      <span class="project-title">My Projects</span>
      <span class="project-subtitle">
        Work that I've done for the past years reflects my journey, from being a
        computer engineering student to pursuing a career as a software
        engineer.
      </span>
    </div>
    <div class="scroll-wrapper" ref="scrollWrapper">
      <div class="scroll-container">
        <div class="project-card">Project 1</div>
        <div class="project-card">Project 2</div>
        <div class="project-card">Project 3</div>
        <div class="project-card">Project 4</div>
        <div class="project-card">Project 5</div>

        <!-- Duplicate Cards for Seamless Loop -->
        <div class="project-card">Project 6</div>
        <div class="project-card">Project 7</div>
        <div class="project-card">Project 8</div>
        <div class="project-card">Project 9</div>
        <div class="project-card">Project 10</div>
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
// Parent div css
.project-section {
  margin: 0 15px 50px 15px;
  border-radius: 10px;
  height: 85vh;
}

// Top section css
.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-title {
  font-size: 3rem;
  font-weight: 600;
}

.project-subtitle {
  font-size: 1.2rem;
  margin-top: 12px;
}

/* Scroll Wrapper */
.scroll-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
  white-space: nowrap;
  user-select: none;
}

/* Scroll Container */
.scroll-container {
  display: flex;
  white-space: nowrap;
  animation: scroll 10s linear infinite; /* Smooth infinite scrolling */
  width: max-content; /* Adjust width based on content */
}

/* Project Cards */
.project-card {
  background: lightgray;
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
  background-color: var(--background-orange-color);
  // transform: scale(2);
  // height: 50vh;
  // border-radius: 18px;
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
