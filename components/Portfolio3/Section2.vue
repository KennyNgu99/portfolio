<template>
  <div class="experience-section">
    <!-- Title and description -->
    <div :style="{ display: 'flex', flexDirection: 'column' }">
      <span class="section-title">Work Experience</span>
      <span class="section-description"> Companies I have worked </span>
      <span class="section-description"> for in the past. </span>
    </div>

    <!-- Experience content -->
    <div class="experience-content">
      <!-- <div class="experience-card">
        <h3>Fullstack Developer</h3>
        <p>Company XYZ | 2022 - Present</p>
        <p>
          Worked on developing scalable web applications, integrating APIs, and
          managing cloud infrastructure.
        </p>
      </div>
      <div class="experience-card">
        <h3>Frontend Developer</h3>
        <p>Company ABC | 2020 - 2022</p>
        <p>
          Designed and implemented responsive UI components and ensured
          cross-browser compatibility.
        </p>
      </div> -->
      <div class="experience-card">
        <span class="experience-card-number">01</span>
        <span class="experience-card-job">Gamuda, Software Engineer</span>
        <span class="experience-card-description"
          >Currently working on the tunneling software projects in Tunnel
          Research & Development Team.</span
        >
      </div>

      <div class="experience-card">
        <span class="experience-card-number">02</span>
        <span class="experience-card-job"
          >Intel, Structural Design Engineer Trainee</span
        >
        <span class="experience-card-description"
          >Currently working on the tunneling software projects in Tunnel
          Research & Development Team.</span
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
// ********************* experience section
.experience-section {
  margin: 50px 15px 50px 15px;
  background-color: var(--contrast-color);
  border-radius: 10px;
  height: 85vh;
  background-color: var(--contrast-color);
}

.section-title {
  font-size: 1.5rem;
  color: var(--background-orange-color);
  margin: 3rem 0 0 5rem;
  font-weight: 700;
}

.section-description {
  font-size: 3rem;
  color: var(--text-sec-color);
  margin-left: 5rem;
  font-weight: 700;
}

.experience-content {
  margin: 12px 5rem 0 5rem;
  background-color: transparent;
  display: flex;
  gap: 20px;
}

.experience-card {
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  flex-direction: column;
  display: flex;
  border-radius: 8px;
  height: 45vh;
  width: 35vw;
}

.experience-card-number {
  font-size: 5rem;
  color: var(--background-orange-color);
  font-weight: 700;
  margin: 0 12px 0 12px;
}

.experience-card-job {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 12px 0 12px;
}

.experience-card-description {
  font-size: 1rem;
  margin: 12px 12px 0 12px;
  color: var(--text-color);
}
</style>
