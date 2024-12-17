<template>
  <!-- FIRST SECTION -->
  <!-- Home section -->
  <div :style="{ position: 'relative' }">
    <img
      src="~assets/portfolio3/paintBackground.svg"
      class="paint-background"
    />
    <img src="~assets/portfolio3/portrait.png" class="portrait-background" />

    <!-- top bar -->
    <Portfolio3Header />

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
  </div>

  <!-- SECTION 2 -->
  <!-- Experience Section -->
  <br />
  <br />
  <section
    id="experience"
    class="experience-section"
    :style="{
      marginTop: '1150px',
      backgroundColor: 'var(--background-color-light)',
    }"
  >
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
  </section>
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
