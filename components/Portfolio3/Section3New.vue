<template>
  <div class="project-section">
    <div class="content-section">
      <!-- LEFT COLUMN -->
      <div class="left-column">
        <div class="project-1 project-card">
          <img
            :src="`${baseURL}/projectPhotoUploadUi.jpg`"
            :style="{ scale: 1 }"
          />
          <div class="project-content">
            <span class="card-title">Photo Upload and Chart Component</span>
            <span class="card-content">
              Designed and developed reusable components for photo uploads and
              interactive chart visualizations to enhance user experience and
              streamline development.
            </span>
          </div>
        </div>

        <div class="project-3 project-card">
          <img :src="`${baseURL}/projectDrcFixes.jpg`" :style="{ scale: 1 }" />
          <div class="project-content">
            <span class="card-title">Automation of DRC Fixes</span>
            <span class="card-content">
              Automated the fixing of ASIC design layout issues during the
              Design Rule Checking (DRC) process by developing efficient TCL
              scripts for IC Compiler II. Extracted and visualized DRC
              violations leading to a 10% improvement in efficiency through
              enhanced data presentation and analysis.
            </span>
          </div>
        </div>
      </div>

      <!-- RIGHT COLUMN -->
      <div class="right-column">
        <div class="section-title">
          <span class="project-title">My Projects</span>
          <span class="project-subtitle">
            Work that I've done for the past years
          </span>
        </div>

        <div class="project-2 project-card">
          <img
            :src="`${baseURL}/projectMlFilterTuningApproach.jpg`"
            :style="{ scale: 1 }"
          />
          <div class="project-content">
            <span class="card-title">Machine Learning in Filter Tuning</span>
            <span class="card-content">
              Developed a machine learning-based solution using Reinforcement
              Learning, specifically Proximal Policy Optimization (PPO), to
              automate the tuning of a 4th-order Chebyshev filter.
            </span>
          </div>
        </div>

        <div class="project-4 project-card">
          <img
            :src="`${baseURL}/projectFriendDetector.png`"
            :style="{ scale: 1 }"
          />
          <div class="project-content">
            <span class="card-title">Friend Detector</span>
            <span class="card-content">
              Developed a friend detection system using an ESP8266 Wi-Fi module
              to identify specific MAC addresses within range. The solution
              utilized packet sniffing to monitor nearby devices, enabling
              real-time detection of known devices for personalized interactions
              or notifications.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

import { useDisplay } from 'vuetify'
const { width: displayWidth } = useDisplay()

const baseURL = useAppConfig().baseURL || '' // Add fallback for local development
onMounted(() => {})
</script>

<style lang="scss" scoped>
// Parent div css
.project-section {
  margin: 0 15px 50px 15px;
  border-radius: 10px;
  // height: 85vh;
  // border: 1px solid black; // TODO: REMOVE THIS
}

// Section title font css
.project-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(116, 116, 116);
  margin: 0.5rem 0 0 1rem;
}

.project-subtitle {
  font-size: 3rem;
  font-weight: 600;
  line-height: 1.2;
  margin: 0.5rem 0 0 1rem;
}

/* Content Section Grid */
.content-section {
  display: flex;
  gap: 1.2rem;
  align-items: flex-start;
  flex-direction: row;
}

/* Left Column Grid */
.left-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
}

.project-1 {
  grid-row: 1;
  margin-right: 10px;
}

.project-3 {
  grid-row: 2;
  margin-right: 10px;
}

/* Right Column Grid */
.right-column {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  flex: 1;
}

.section-title {
  grid-row: 1;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 1rem;
}

.project-2 {
  grid-row: 2;
  margin-left: 10px;
}

.project-4 {
  grid-row: 3;
  margin-left: 10px;
}

/* General Styling */
.project-card {
  background-color: rgb(43, 43, 43);
  display: flex;
  flex-direction: column;
  border: 1px solid rgb(219, 219, 219);
}

.project-card:hover {
  transform: scale(1.02);
  transition: transform 0.2s;
}

.project-content {
  padding: 20px;
  display: flex;
  flex-direction: column;
}

.card-title {
  font-size: 1.5rem;
  font-weight: 600;
  color: white;
}

.card-content {
  font-size: 1rem;
  color: white;
}

// ********************** media queries
// // mobile view - other models (width 400 - 600px)
@media (max-width: 600px) {
  .content-section {
    flex-direction: column-reverse; // Reverse the order for mobile
    gap: 0;
  }

  .project-section {
    margin: -5rem 15px 10px 15px;
  }

  // right column css in mobile view
  .right-column {
    margin-bottom: 1.2rem;
  }

  .project-title {
    margin: 0 0 0 0;
  }

  .project-subtitle {
    font-size: 2.2rem;
    margin: 0 0 0 0;
  }

  .section-title {
    height: 150px;
    padding: 0 10px;
  }

  .project-2 {
    margin-left: 0px;
  }

  .project-4 {
    margin-left: 0px;
  }

  // left column css in mobile view
  .project-1 {
    margin-right: 0px;
  }

  .project-3 {
    margin-right: 0px;
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
