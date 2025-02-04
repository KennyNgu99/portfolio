<template>
  <div :style="{ position: 'relative', height: '90vh' }">
    <img :src="`${baseURL}/paintBackground.svg`" class="paint-background" />
    <img :src="`${baseURL}/portrait.png`" class="portrait-background" />

    <div class="middle-section">
      <div class="title-section">
        <span class="main-title" :style="{ alignContent: 'end' }">
          Hey There,
        </span>
        <span class="main-title">I'm Kenny</span>
      </div>
      <div class="subtitle-section">
        <span class="description" :style="{ alignContent: 'end' }">
          Currently a fullstack developer.
        </span>
        <span class="description">And I love what i do.</span>
      </div>
    </div>
    <div class="bottom-section">
      <div class="two-year-exp">
        <span class="title" :style="{
          alignContent: 'center',
          marginRight: '12px',
          fontSize: displayWidth > 600 ? '3rem' : '1.8rem',
        }">{{ yearOfExperience }}
        </span>
        <div :style="{ display: 'grid' }">
          <h2 class="semibold" :style="{ alignContent: 'end', fontSize: displayWidth > 600 ? '1.5rem' : '1rem' }">
            YEARS
          </h2>
          <h2 class="semibold" :style="{ fontSize: displayWidth > 600 ? '1.5rem' : '1rem' }">EXPERIENCE</h2>
        </div>
      </div>


      <div :style="{ flex: '1' }">
        <div class="gcp-section">
          <img :src="`${baseURL}/gcpLogo.svg`" class="gcp-logo" />
          <span v-if="displayWidth > 600" class="ace-font">GCP Certified</span>
          <span v-if="displayWidth > 600" class="ace-font">Associate</span>
          <span v-if="displayWidth > 600" class="ace-font">Cloud Engineer</span>
          <span v-else :style="{ marginLeft: '8px', fontWeight: '600' }"> GCP Certified
            Associate
            Cloud Engineer</span>
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

import { useDisplay } from "vuetify";
const { width: displayWidth } = useDisplay();

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

.two-year-exp {
  display: flex;
  flex: 1;
  margin-left: 6rem;
}

.title-section {
  flex: 1;
  display: grid;
}

.subtitle-section {
  flex: 1;
  display: grid;
  justify-content: end;
  margin-right: 10vw;
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
.gcp-section {
  display: grid;
  justify-content: end;
  margin-right: 9vw;
}

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

// ********************** media queries
// ********************* for screen > 2560px (4k)
@media (min-width: 2560px) {
  .paint-background {
    transform: translate(-50%, -50%) scale(1.4);
  }

  .portrait-background {
    transform: translate(-50%, -50%) scale(0.65);
  }
}

// // mobile view - other models ( 400 - 600px)
@media (max-width: 600px) {
  .middle-section {
    display: flex;
    flex-direction: column;
    height: fit-content;
    margin-top: 2rem;
  }

  .title-section {
    display: flex;
    flex-direction: column;
  }

  .subtitle-section {
    justify-content: start;
    margin: 5px 0 0 0px;
  }

  .main-title {
    font-size: 3.5rem;
    margin-left: 10px;
  }

  .description {
    font-size: 1.2rem;
    margin: 5px 0 0 10px;
    color: var(--text-sec-color);
  }

  .paint-background {
    transform: translate(-50%, -65%) scale(0.7);
  }

  .portrait-background {
    transform: translate(-53%, -65%) scale(1);
  }

  .bottom-section {
    margin-top: 25rem;
    display: grid;
    height: fit-content;
  }

  .two-year-exp {
    margin: 20px 0 10px 0;
    justify-content: center;
  }

  .gcp-section {
    width: 100%;
    display: flex;
    margin-right: 0;
    align-items: center;
    justify-content: center;
  }

  .ace-font {
    font-size: 1.2rem;
    text-transform: none;
  }

  .gcp-logo {
    width: 50px;
    height: 50px;
  }
}


// mobile view - iphone XR 
/* ========== Specifically up to 900 tall ========== */
@media (max-height: 900px) and (max-width: 420px) {
  .bottom-section {
    margin-top: 24rem;
  }
}

// mobile view - iphone 12 pro
/* ========== Specifically up to 850 tall ========== */
@media (max-height: 850px) and (max-width: 391px) {
  .bottom-section {
    margin-top: 22rem;
  }
}


// mobile view - iphone SE 
/* ========== Specifically up to 670 tall ========== */
@media (max-height: 670px) and (max-width: 400px) {

  /* Override ONLY paint & portrait backgrounds */
  .paint-background {
    transform: translate(-50%, -45%) scale(0.7);
  }

  .portrait-background {
    transform: translate(-50%, -45%) scale(0.95);
  }

  .bottom-section {
    margin-top: 20rem;
  }

  .gcp-logo {
    width: 30px;
    height: 30px;
  }

  .main-title {
    font-size: 3rem;
  }
}
</style>
