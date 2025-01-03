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
    <div class="content-section">
      <div class="project-1 project-card">
        <img
          src="~assets/portfolio3/projectPhotoUploadUi.jpg"
          :style="{ scale: 1 }"
        />
        <div class="project-content">
          <span class="card-title">Photo Upload and Chart Component</span>
          <span class="card-content">
            Designed and developed reusable components for photo uploads and
            interactive chart visualizations to enhance user experience and
            streamline development. Leveraged Figma for initial design and
            prototyping to ensure an intuitive and cohesive interface.
          </span>
        </div>
      </div>

      <div class="project-2 project-card">
        <img
          src="~assets/portfolio3/projectMlFilterTuningApproach.jpg"
          :style="{ scale: 1 }"
        />
        <div class="project-content">
          <span class="card-title"
            >Application of Machine Learning in Filter Tuning Approach</span
          >
          <span class="card-content">
            Developed a machine learning-based solution using Reinforcement
            Learning, specifically Proximal Policy Optimization (PPO), to
            automate the tuning of a 4th-order Chebyshev filter. The model
            achieved up to an 80% convergence rate within the trained steps,
            demonstrating its effectiveness in optimizing complex filter
            parameters with minimal human intervention.
          </span>
        </div>
      </div>

      <div class="project-3 project-card">
        <img
          src="~assets/portfolio3/projectDrcFixes.jpg"
          :style="{ scale: 1 }"
        />
        <div class="project-content">
          <span class="card-title"
            >Automation of DRC Fixes by Tool Command Language and Synopsys
            Tool</span
          >
          <span class="card-content">
            Automated the fixing of ASIC design layout issues during the Design
            Rule Checking (DRC) process by developing efficient TCL scripts for
            IC Compiler II. Extracted and visualized DRC violations using
            tables, spreadsheets, and graphical displays, leading to a 10%
            improvement in efficiency through enhanced data presentation and
            analysis
          </span>
        </div>
      </div>

      <div class="project-4 project-card">
        <img
          src="~assets/portfolio3/projectFriendDetector.png"
          :style="{ scale: 1 }"
        />
        <div class="project-content">
          <span class="card-title">Friend Detector</span>
          <span class="card-content">
            Developed a friend detection system using an ESP8266 Wi-Fi module to
            identify specific MAC addresses within range. The solution utilized
            packet sniffing to monitor nearby devices, enabling real-time
            detection of known devices for personalized interactions or
            notifications
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const scrollWrapper = ref<HTMLElement | null>(null)

onMounted(() => {})
</script>

<style lang="scss" scoped>
// Parent div css
.project-section {
  margin: 0 15px 50px 15px;
  border-radius: 10px;
  // height: 85vh;
  // border: 1px solid black; // TODO: REMOVE THIS
  display: flex;
  flex-direction: column;
}

// Top section css
.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
}

.project-title {
  font-size: 3rem;
  font-weight: 600;
}

.project-subtitle {
  font-size: 1.2rem;
  margin-top: 12px;
}

// Content section css
.content-section {
  background-color: transparent;
  display: grid;
  grid-template-columns: 50% 50%;
  gap: 1.2rem 0;
  grid-template-areas:
    'project-1 project-2'
    'project-3 project-4';
}

.project-1 {
  grid-area: project-1;
  margin-right: 10px;
}

.project-2 {
  grid-area: project-2;
  margin-left: 10px;
}

.project-3 {
  grid-area: project-3;
  margin-right: 10px;
}

.project-4 {
  grid-area: project-4;
  margin-left: 10px;
}

.project-card {
  background-color: rgb(43, 43, 43);
  display: flex;
  flex-direction: column;
  // border-radius: 10px;
  border: 1px solid rgb(219, 219, 219);
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
</style>
