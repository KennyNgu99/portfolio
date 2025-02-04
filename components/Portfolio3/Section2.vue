<template>
  <div class="experience-section">
    <!-- Title and description -->
    <div :style="{ display: 'flex', flexDirection: 'column' }">
      <span class="section-title">My Working Experience</span>
      <span class="section-description">
        Companies I have worked for in the past.</span>
      <!-- <span class="section-description"> for in the past. </span> -->
    </div>

    <!-- Experience content -->
    <div class="experience-content">
      <div class="experience-card" :class="{ 'animate-card': props.isVisible }" :style="{ animationDelay: '0s' }">
        <div :style="{ position: 'relative' }">
          <span class="experience-card-number">01</span>
          <img :src="`${baseURL}/gamudLogo.svg`" class="gamuda-logo" />
        </div>

        <div :style="{ display: 'flex', flexDirection: displayWidth <= 600 ? 'column' : 'row' }">
          <span class="experience-card-job-title" :style="{ color: 'red' }">
            Gamuda
          </span>
          <span class="experience-card-job-title" v-if="displayWidth > 600" :style="{ marginLeft: '0' }">,</span>
          <span class="experience-card-job-title" :style="{ marginLeft: displayWidth > 600 ? '8px' : '24px' }">
            Software Engineer
          </span>
        </div>
        <span :style="{ margin: displayWidth > 600 ? '-2px 0 0 24px' : '5px 0 0 24px', fontStyle: 'italic' }">
          (2022 - Present)
        </span>
        <span class="experience-card-description">
          I am currently working on tunneling software projects as part of the
          Tunnel Research & Development Team. My responsibilities include
          full-stack development using the Vue.js and Nuxt frameworks.
          Additionally, I deploy cloud-based solutions on the GCP platform,
          leveraging backend technologies such as Golang and Python.
        </span>
      </div>
      <div class="experience-card" :class="{ 'animate-card': props.isVisible }" :style="{ animationDelay: '0.1s' }">
        <div :style="{ position: 'relative' }">
          <span class="experience-card-number">02</span>
          <img :src="`${baseURL}/intelLogo.svg`" class="intel-logo" />
        </div>
        <div :style="{ display: 'flex', flexDirection: displayWidth <= 600 ? 'column' : 'row' }">
          <span class="experience-card-job-title" :style="{ color: 'var(--primary-color)' }">
            Intel
          </span>
          <span class="experience-card-job-title" v-if="displayWidth > 600" :style="{ marginLeft: '0' }">,</span>
          <span class="experience-card-job-title"
            :style="{ marginLeft: displayWidth > 600 ? '8px' : '24px', lineHeight: displayWidth > 600 ? '' : 'normal' }">
            Structural Design Engineer Trainee
          </span>
        </div>
        <span :style="{ margin: displayWidth > 600 ? '-2px 0 0 24px' : '5px 0 0 24px', fontStyle: 'italic' }">
          (2020 - 2021)
        </span>
        <span class="experience-card-description">
          Involved in Application Specific Integrated Circuit (ASIC) backend
          development, focusing on automating design rule checking (DRC) fixes
          using TCL scripting and Synopsys tool (IC Compiler II). My role
          includes developing automation scripts to streamline workflows and
          visualizing results.
        </span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";
const { width: displayWidth } = useDisplay();
const baseURL = useAppConfig().baseURL || '' // Add fallback for local development
// Handle props here
const props = defineProps({
  isVisible: Boolean,
})
</script>

<style lang="scss" scoped>
// ********************* experience section
.experience-section {
  margin: 50px 15px 50px 15px;
  background-color: var(--contrast-color);
  border-radius: 10px;
  height: 87vh;
  display: flex;
  flex-direction: column;
}

.section-title {
  font-size: 2rem;
  color: var(--background-orange-color);
  margin: 3rem 0 0 5rem;
  font-weight: 700;
}

.section-description {
  font-size: 4rem;
  color: var(--text-sec-color);
  margin-left: 5rem;
  font-weight: 700;
}

.experience-content {
  margin: 12px 5rem 0 5rem;
  background-color: transparent;
  display: flex;
  gap: 20px;
  align-items: center;
  height: 100%;
}

.experience-card {
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  display: flex;
  border-radius: 8px;
  height: 47vh;
  width: 35vw;
  justify-content: center;
  opacity: 0;
  position: relative;
}

.experience-card-number {
  font-size: 5rem;
  color: var(--background-orange-color);
  font-weight: 700;
  margin: 0 24px 0 24px;
}

.experience-card-job-title {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0 24px;
}

.experience-card-description {
  font-size: 1rem;
  margin: 12px 24px 0 24px;
  color: var(--text-color);
}

.gamuda-logo {
  position: absolute;
  transform: translateY(-50%) scale(0.2);
  top: 50%;
  right: calc(-20%);
}

.intel-logo {
  position: absolute;
  transform: translateY(-50%) scale(0.3);
  top: 50%;
  right: calc(-30%);
}

// card animation
.animate-card {
  animation: slideIn 0.5s forwards ease-in-out;
}

@keyframes slideIn {
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

// ********************** media queries
// // mobile view - other models (width 400 - 600px)
@media (max-width: 600px) {
  .experience-section {
    margin: -3rem 10px 150px 10px;
    height: fit-content;
  }

  .section-title {
    font-size: 1.5rem;
    margin: 1rem 0 0 1rem;
  }

  .section-description {
    font-size: 2.2rem;
    margin: 0.2rem 0 0 1rem;
  }

  .experience-content {
    margin: 12px 10px 20px 10px;
    display: grid;
  }

  .experience-card {
    height: 100%;
    width: 100%;
  }

  .experience-card-description {
    margin: 12px 24px 10px 24px;
  }

  .gamuda-logo {
    right: calc(-33%);
  }
}

// mobile view - iphone XR 
/* ========== Specifically up to 900 tall ========== */
@media (max-height: 900px) and (max-width: 420px) {
  .experience-section {
    margin: -2rem 10px 150px 10px;
  }
}

// mobile view - iphone 12 pro
/* ========== Specifically up to 850 tall ========== */
@media (max-height: 850px) and (max-width: 391px) {
  .experience-section {
    margin: -1rem 10px 150px 10px;
  }
}

// mobile view - iphone SE 
/* ========== Specifically up to 670 tall ========== */
@media (max-height: 670px) and (max-width: 400px) {
  .experience-section {
    margin: 4rem 10px 150px 10px;
  }
}
</style>
