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
      <div class="experience-card">
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
  margin: 0 0 0 5rem;
  font-weight: 700;
}

.experience-content,
.social-media-links {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
}

.experience-card {
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  max-width: 600px;
  text-align: left;
}

.resume-content {
  text-align: center;
}

.download-button {
  padding: 10px 20px;
  background-color: var(--text-sec-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  transition: 0.3s ease;
}

.download-button:hover {
  background-color: var(--contrast-color);
}

.social-media-links a {
  font-size: 1.2rem;
  color: var(--text-primary-color);
  text-decoration: none;
  transition: color 0.3s ease;
}

.social-media-links a:hover {
  color: var(--contrast-color);
}
</style>
