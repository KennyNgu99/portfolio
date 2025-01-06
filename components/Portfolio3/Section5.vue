<template>
  <div class="project-section">
    <div class="top-section">
      <span class="project-title">Howdy!</span>
      <div :style="{ display: 'flex' }">
        <span class="project-subtitle"> Lets connect! Start by</span>
        <span class="project-subtitle saying-hi">saying hi</span>
      </div>
    </div>

    <div class="middle-section">
      <div :style="{ display: 'flex', flexDirection: 'column' }">
        <span class="middle-section-title">Phone</span>
        <span class="middle-section-sub">0138035796</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column' }">
        <span class="middle-section-title">Email</span>
        <span class="middle-section-sub">kankenny9984@gmail.com</span>
      </div>
      <div :style="{ display: 'flex', flexDirection: 'column' }">
        <span class="middle-section-title">Location</span>
        <span class="middle-section-sub">Kuala Lumpur, Malaysia</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
</script>

<style lang="scss" scoped>
// Parent div css
.project-section {
  margin: 0 15px 50px 15px;
  border-radius: 10px;
  height: 80vh;
  display: flex;
  flex-direction: column;
}

// Top section css
.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-title {
  font-size: 3.5rem;
  font-weight: 600;
}

.project-subtitle {
  font-size: 2rem;
  margin-top: 12px;
}

.saying-hi {
  margin-left: 0.4rem;
  text-decoration: underline;
  font-weight: 700;
  color: var(--background-orange-color);
}

.saying-hi:hover {
  cursor: pointer;
}

// Middle section css
.middle-section {
  background-color: lightgray;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 3rem 5rem;
  border-radius: 8px;
  justify-content: space-around;
}

.middle-section-title {
  font-size: 1.5rem;
  font-weight: 700;
}

.middle-section-sub {
  font-size: 1.2rem;
}
</style>
