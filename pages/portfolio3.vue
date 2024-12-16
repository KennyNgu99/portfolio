<template>
  <div :style="{ position: 'relative' }">
    <!-- FIRST SECTION -->
    <img
      src="~assets/portfolio3/paintBackground.svg"
      class="paint-background"
    />
    <img src="~assets/portfolio3/portrait.png" class="portrait-background" />

    <!-- top bar -->
    <div class="top">
      <v-row no-gutters :style="{ height: '100%' }">
        <!-- signature section -->
        <v-col cols="3"
          ><div :style="{ margin: '12px 0 0 3vw' }">
            <span class="signature" :style="{ userSelect: 'none' }">Kenny</span>
          </div>
        </v-col>

        <!-- buttons section -->
        <v-col cols="6" class="px-8" :style="{ alignContent: 'center' }">
          <div
            :style="{
              display: 'flex',
              justifyContent: 'space-between',
              width: '100%',
              height: '100%',
            }"
          >
            <div class="top-buttons">
              <div class="top-button-wrapper">
                <span class="top-bar-font">Experience</span>
              </div>
            </div>
            <div class="top-buttons">
              <div class="top-button-wrapper">
                <span class="top-bar-font">Resume</span>
              </div>
            </div>
            <div class="top-buttons">
              <div class="top-button-wrapper">
                <span class="top-bar-font">Social media</span>
              </div>
            </div>
          </div>
        </v-col>

        <!-- connect section -->
        <v-col
          cols="3"
          :style="{ padding: 0, margin: 0, justifyItems: 'center' }"
        >
          <div
            class="hover-div"
            :style="{
              justifyContent: 'center',
              display: 'grid',
              height: '100%',
              alignContent: 'center',
              background: 'var(--background-orange-color)',
              width: '50%',
              cursor: 'pointer',
            }"
          >
            <span
              :style="{
                color: 'white',
                fontSize: '1.5rem',
                userSelect: 'none',
              }"
            >
              Contact
            </span>
          </div>
        </v-col>
      </v-row>
    </div>
    <div class="mid">
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
          marginRight: '14rem',
        }"
      >
        <span class="description" :style="{ alignContent: 'end' }">
          Currently a fullstack developer.
        </span>
        <span class="description">And I love what i do.</span>
      </div>
    </div>
    <div class="bot">
      <div :style="{ display: 'flex', flex: 1, marginLeft: '6rem' }">
        <span
          class="title"
          :style="{
            alignContent: 'center',
            marginRight: '12px',
            fontSize: '62px',
          }"
          >{{ yearOfExperience }}
        </span>
        <div :style="{ display: 'grid' }">
          <h2 class="semibold" :style="{ alignContent: 'end' }">YEARS</h2>
          <h2 class="semibold">EXPERIENCE</h2>
        </div>
      </div>
      <div :style="{ flex: '1' }">
        <div
          :style="{
            display: 'grid',
            justifyContent: 'end',
            marginRight: '16rem',
          }"
        >
          <img :src="gcpLogo" class="gcp-logo" />
          <span class="ace-font">GCP Certified</span>
          <span class="ace-font">Associate</span>
          <span class="ace-font">Cloud Engineer</span>
        </div>
      </div>
    </div>

    <!-- SECTION 2 -->
    <!-- Experience Section -->
    <!-- <section id="experience" class="experience-section">
      <v-container>
        <h2 class="section-title">Experience</h2>
        <div class="experience-content">
          <div class="experience-card">
            <h3>Fullstack Developer</h3>
            <p>Company XYZ | 2022 - Present</p>
            <p>
              Worked on developing scalable web applications, integrating APIs,
              and managing cloud infrastructure.
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
      </v-container>
    </section> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import gcpLogo from '@/assets/portfolio3/gcpLogo.svg'
definePageMeta({
  layout: false,
})

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
.top {
  height: 10vh;
}

.mid {
  height: 50vh;
  display: flex;
}

.bot {
  height: 40vh;
  display: flex;
}

.main-title {
  font-size: 5.5rem;
  color: var(--text-sec-color);
  font-weight: 800;
  margin-left: 6rem;
}

.description {
  font-size: 1.5rem;
}

.paint-background {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.portrait-background {
  position: absolute;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.5);
}

.ace-font {
  font-size: 28px;
  text-transform: uppercase;
  justify-self: center;
  font-weight: 600;
}

.gcp-logo {
  width: 100px;
  height: 100px;
  justify-self: center;
}

// ********************* top bar related css
.top-buttons {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.top-bar-font {
  font-size: 1.5rem;
  color: var(--text-sec-color);
  text-transform: none;
  pointer-events: none;
  user-select: none;
}

.top-button-wrapper {
  padding: 8px 16px;
  // border: 2px solid transparent;
  border-radius: 12px;
  transition:
    background 0.3s ease,
    // border 0.5s ease,
    box-shadow 0.3s ease;
  cursor: pointer;
}

.top-button-wrapper:hover {
  // border: 2px solid var(--text-sec-color);
  background: var(--text-sec-color);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
  color: white;
}

.top-button-wrapper:hover .top-bar-font {
  color: var(--contrast-color);
}

.top-button-wrapper:active,
.hover-div:active {
  transform: translateY(4px);
}

.hover-div:hover {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

// ********************* experience section
// .experience-section,
// .resume-section,
// .social-media-section {
//   padding: 50px 20px;
//   background-color: var(--background-color-light);
// }

// .section-title {
//   font-size: 2.5rem;
//   color: var(--text-primary-color);
//   text-align: center;
//   margin-bottom: 20px;
// }

// .experience-content,
// .social-media-links {
//   display: flex;
//   flex-direction: column;
//   gap: 20px;
//   align-items: center;
// }

// .experience-card {
//   background: white;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   border-radius: 8px;
//   padding: 20px;
//   max-width: 600px;
//   text-align: left;
// }

// .resume-content {
//   text-align: center;
// }

// .download-button {
//   padding: 10px 20px;
//   background-color: var(--text-sec-color);
//   color: white;
//   text-decoration: none;
//   border-radius: 5px;
//   transition: 0.3s ease;
// }

// .download-button:hover {
//   background-color: var(--contrast-color);
// }

// .social-media-links a {
//   font-size: 1.2rem;
//   color: var(--text-primary-color);
//   text-decoration: none;
//   transition: color 0.3s ease;
// }

// .social-media-links a:hover {
//   color: var(--contrast-color);
// }

// for large web screen
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
