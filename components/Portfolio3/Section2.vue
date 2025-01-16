<template>
  <div class="experience-section">
    <!-- Title and description -->
    <div :style="{ display: 'flex', flexDirection: 'column' }">
      <span class="section-title">My Working Experience</span>
      <span class="section-description">
        Companies I have worked for in the past.</span
      >
      <!-- <span class="section-description"> for in the past. </span> -->
    </div>

    <!-- Experience content -->
    <div class="experience-content">
      <div
        class="experience-card"
        :class="{ 'animate-card': props.isVisible }"
        :style="{ animationDelay: '0s' }"
      >
        <div :style="{ position: 'relative' }">
          <span class="experience-card-number">01</span>
          <img :src="`${baseURL}/gamudLogo.svg`" class="gamuda-logo" />
        </div>

        <div :style="{ display: 'flex' }">
          <span class="experience-card-job-title" :style="{ color: 'red' }">
            Gamuda
          </span>
          <span
            class="experience-card-job-title"
            :style="{ 'margin-left': '0' }"
          >
            , Software Engineer
          </span>
        </div>
        <span :style="{ margin: '-2px 0 0 24px', fontStyle: 'italic' }">
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
      <div
        class="experience-card"
        :class="{ 'animate-card': props.isVisible }"
        :style="{ animationDelay: '0.1s' }"
      >
        <div :style="{ position: 'relative' }">
          <span class="experience-card-number">02</span>
          <img :src="`${baseURL}/intelLogo.svg`" class="intel-logo" />
        </div>
        <div :style="{ display: 'flex' }">
          <span
            class="experience-card-job-title"
            :style="{ color: 'var(--primary-color)' }"
          >
            Intel
          </span>
          <span
            class="experience-card-job-title"
            :style="{ 'margin-left': '0' }"
          >
            , Structural Design Engineer Trainee
          </span>
        </div>
        <span :style="{ margin: '-2px 0 0 24px', fontStyle: 'italic' }">
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
</style>
