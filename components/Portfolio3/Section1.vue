<template>
  <div :style="{ position: 'relative', height: '90vh' }">
    <img :src="`${baseURL}/paintBackground.svg`" class="paint-background" />
    <img :src="`${baseURL}/portrait.png`" class="portrait-background" />

    <div class="middle-section">
      <div :style="{ flex: 1, display: 'grid' }">
        <span class="main-title" :style="{ alignContent: 'end' }">
          Hey There,
        </span>
        <span class="main-title">I'm Kenny</span>
      </div>
      <div
        :style="{
          flex: 1,
          display: 'grid',
          justifyContent: 'end',
          marginRight: '10vw',
        }"
      >
        <span class="description" :style="{ alignContent: 'end' }">
          Currently a fullstack developer.
        </span>
        <span class="description">And I love what i do.</span>
      </div>
    </div>
    <div class="bottom-section">
      <div :style="{ display: 'flex', flex: 1, marginLeft: '6rem' }">
        <span
          class="title"
          :style="{
            alignContent: 'center',
            marginRight: '12px',
            fontSize: '3rem',
          }"
          >{{ yearOfExperience }}
        </span>
        <div :style="{ display: 'grid' }">
          <h2
            class="semibold"
            :style="{ alignContent: 'end', fontSize: '1.5rem' }"
          >
            YEARS
          </h2>
          <h2 class="semibold" :style="{ fontSize: '1.5rem' }">EXPERIENCE</h2>
        </div>
      </div>
      <div :style="{ flex: '1' }">
        <div
          :style="{
            display: 'grid',
            justifyContent: 'end',
            marginRight: '9vw',
          }"
        >
          <img :src="`${baseURL}/gcpLogo.svg`" class="gcp-logo" />
          <span class="ace-font">GCP Certified</span>
          <span class="ace-font">Associate</span>
          <span class="ace-font">Cloud Engineer</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
definePageMeta({
  layout: false,
})
const baseURL = useAppConfig().baseURL || '' // Add fallback for local development
// 2022 August
const startDate = new Date(2022, 7)
const currentDate = new Date()
const diffInMilliseconds = currentDate.getTime() - startDate.getTime()

// Convert to years and months (Considering leap years)
const diffInYears = Math.floor(
  diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25),
)

const yearOfExperience = computed(() => {
  return `${diffInYears}+`
})
</script>

<style lang="scss" scoped>
// ********************* section related css
.middle-section {
  height: 50vh;
  display: flex;
}

.bottom-section {
  height: 40vh;
  display: flex;
}

// ********************* font related css
.main-title {
  font-size: 5rem;
  color: var(--text-sec-color);
  font-weight: 800;
  margin-left: 6rem;
}

.description {
  font-size: 1.2rem;
}

// ********************* portrait and paint background related css
.paint-background {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -52%) scale(0.9);
}

.portrait-background {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.43);
}

// ********************* gcp ace related css
.ace-font {
  font-size: 1.5rem;
  text-transform: uppercase;
  justify-self: center;
  font-weight: 600;
}

.gcp-logo {
  width: 100px;
  height: 100px;
  justify-self: center;
}

// ********************* for screen > 2560px
@media (min-width: 2560px) {
  .paint-background {
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.4);
  }

  .portrait-background {
    transform: translate(-50%, -50%) scale(0.65);
  }
}
</style>
