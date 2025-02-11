<template>
  <div class="section-4">
    <span class="section-4-title">Fun Fact!</span>
    <span class="section-4-subtitle">Achievements & Participations</span>

    <!-- Scroll Wrapper -->
    <div class="scroll-wrapper" ref="scrollWrapper">
      <div v-show="isDetected" class="scroll-container">
        <div class="project-card">
          <span class="project-title">Toastmaster Speech Contest Champion</span>
          <span class="project-subtitle"
            >Won first place at both the club (Gamuda Toastmaster Club) and area
            (D2) levels in the 2023-2024 International Speech Contest</span
          >
        </div>
        <div class="project-card">
          <span class="project-title">Gamuda Scholarship Award 2020</span>
          <span class="project-subtitle">
            Awarded the Gamuda Scholarship Programme for the strong will and
            leadership qualities
          </span>
        </div>
        <div class="project-card">
          <span class="project-title">Dean List Award</span>
          <span class="project-subtitle">
            Dean List's Award Achiever throughout all semesters during
            undergraduate study
          </span>
        </div>
        <div class="project-card">
          <span class="project-title">Gamuda Toastmaster Club - Secretary</span>
          <span class="project-subtitle">
            Served as the Secretary of the club for the term 2023-2024 with the
            pathway system of 'Dynamic Leadership
          </span>
        </div>
        <div class="project-card">
          <span class="project-title">AIESECers</span>
          <span class="project-subtitle">
            Part of Incoming Global Volunteer (IGV) team for Global Village
            Programme in UTP
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify'
const { width: displayWidth } = useDisplay()

import { ref, onMounted } from 'vue'
const scrollWrapper = ref<HTMLElement | null>(null)
const isDetected = ref(false)
onMounted(() => {
  isDetected.value = true
  if (scrollWrapper.value) {
    const container = scrollWrapper.value.querySelector('.scroll-container')
    if (container) {
      container.innerHTML += container.innerHTML // Duplicate content dynamically
    }
  }
})
</script>

<style lang="scss" scoped>
// parent div
.section-4 {
  margin: 50px 15px 50px 15px;
  background-color: var(--contrast-color);
  border-radius: 10px;
  height: 87vh;
  display: flex;
  flex-direction: column;
}

// font css
.section-4-title {
  margin: 3rem 0 0 5rem;
  font-weight: 700;
  font-size: 2rem;
  color: var(--background-orange-color);
}

.section-4-subtitle {
  margin-left: 5rem;
  font-size: 4rem;
  color: var(--text-sec-color);
  font-weight: 700;
}

// /* Scroll Container */
// .scroll-container {
//   display: flex;
//   white-space: nowrap;
//   animation: scroll 10s linear infinite; /* Smooth infinite scrolling */
//   width: 100%;
//   height: 100%;
//   align-items: center;
// }

/* Scroll Wrapper */
.scroll-wrapper {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
}

/* Scroll Container */
.scroll-container {
  display: flex;
  white-space: nowrap;
  animation: scroll 20s linear infinite; /* Smooth infinite scrolling */
  align-items: center;
  flex-shrink: 0;
}

/* Project Cards */
.project-card {
  background: var(--text-sec-color);
  // border: 3px solid orange;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  white-space: normal;
  border-radius: 8px;
  height: 47vh;
  width: 25vw;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
  flex-shrink: 0;
  padding: 0.5rem;
}

.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
  text-align: center;
}

.project-subtitle {
  margin-top: 1rem;
  font-size: 1rem;
  color: white;
  text-align: center;
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

// ********************** media queries
// // mobile view - other models (width 400 - 600px)
@media (max-width: 600px) {
  .section-4 {
    margin-bottom: 0;
  }

  // font css
  .section-4-title {
    // margin: 3rem 0 0 5rem;
    margin: 1rem 0 0 1rem;
    font-size: 1.5rem;
  }

  .section-4-subtitle {
    margin: 0.2rem 0 0 1rem;
    font-size: 2.2rem;
  }

  /* Scroll Wrapper */
  .scroll-wrapper {
    flex-direction: column;
  }

  /* Scroll Container */
  .scroll-container {
    flex-direction: column;
  }

  /* Project Cards */
  .project-card {
    height: 30vh;
    width: 80%;
    margin: 10px 0;
    padding: 0.5rem;
  }

  .project-title {
    font-size: 1.5rem;
  }

  @keyframes scroll {
    from {
      transform: translateY(0);
    }
    to {
      transform: translateY(-50%);
    }
  }
}

// mobile view - iphone XR
/* ========== Specifically up to 900 tall ========== */
@media (max-height: 900px) and (max-width: 420px) {
}

// mobile view - iphone 12 pro
/* ========== Specifically up to 850 tall ========== */
@media (max-height: 850px) and (max-width: 391px) {
}

// mobile view - iphone SE
/* ========== Specifically up to 670 tall ========== */
@media (max-height: 670px) and (max-width: 400px) {
}
</style>
