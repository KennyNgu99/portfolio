<template>
  <div class="grid-container">
    <!-- Left side -->
    <div class="area1">
      <!-- Hello card here -->
      <div class="hello-card-container-bot-shadow">
        <div class="hello-card-container-right-shadow">
          <v-hover>
            <template v-slot:default="{ isHovering, props }">
              <v-card
                class="hello-card"
                v-bind="props"
                :color="isHovering ? 'primary' : undefined"
              >
                <v-card-title class="text-center">
                  <h2 class="semibold" :style="{ color: 'white' }">Hello :)</h2>
                </v-card-title>
              </v-card>
            </template>
          </v-hover>
        </div>
      </div>

      <!-- Icons bar -->
      <v-card class="buttons-top-bar" variant="outlined">
        <span class="button-font">RESUME</span>
        <span class="button-font">EXPERIENCE</span>
        <span class="button-font">SKILLS</span>
      </v-card>

      <div class="portrait-background">
        <v-img :src="paintBackground"></v-img>
      </div>

      <div class="experience">
        <h1 class="semibold">2</h1>
        <div>
          <h2 class="semibold">Years</h2>
          <h2 class="semibold">Experience</h2>
        </div>
      </div>
    </div>

    <!-- Right side -->
    <div class="area2">
      <div class="info-section">
        <div class="intro">
          <!-- Hi text -->
          <h2>Hey there, I'm</h2>

          <!-- Style the name -->
          <div :style="{ display: 'flex', 'margin-top': '2vh' }">
            <h2 class="title-cap">K</h2>
            <h2 class="title">enny</h2>
            <h2 class="title-cap ml-3">N</h2>
            <h2 class="title">gu</h2>
            <h2 class="title-cap ml-3">K</h2>
            <h2 class="title">ai</h2>
            <h2 class="title-cap ml-3">C</h2>
            <h2 class="title">hun</h2>
          </div>
        </div>
        <div class="job-title">
          <h2 class="semibold" :style="{ 'font-size': '40px' }">
            Software Engineer
          </h2>
          <div :style="{ 'margin-top': '2vh' }">
            <h3 class="semibold">I build web application.</h3>
            <h3 class="semibold">And I love what I do.</h3>
          </div>
        </div>

        <!-- Icons bar -->
        <!-- <v-card class="buttons-top-bar" variant="outlined">
          <v-icon color="primary">mdi-linkedin</v-icon>
          <v-icon color="tertiary">mdi-email</v-icon>
          <v-icon color="success">mdi-phone</v-icon>
        </v-card> -->

        <div class="info-button">
          <v-btn> About Me </v-btn>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import paintBackground from '@/assets/portrait.png'

definePageMeta({
  layout: false,
})
console.log('Portfolio page')
</script>

<style scoped>
/* Main container */
.grid-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 2.5fr 2fr;
  gap: 0px 0px;
  grid-template-areas: 'area1 area2';
}

/* *********** AREA 1 (LEFT SIDE) CSS */
.area1 {
  grid-area: area1;
  background-color: white;
  position: relative;
}

.buttons-top-bar {
  display: flex;
  justify-content: space-between;

  /* size */
  height: 5vh;
  width: 30vw;

  /* pos */
  position: absolute;
  left: 20vw;
  top: 4vh;

  /* border-radius: 20px; */
  /* background-color: var(--contrast-color); */
  border: 1px transparent var(--contrast-color);
}

.button-font {
  /* color: var(--text-sec-color); */
  font-size: normal;
  font-family: 'Segoe UI';
}

.button-font:hover {
  cursor: pointer;
  color: var(--text-sec-color);
}

.hello-card-container-bot-shadow {
  position: relative;
  width: 123px;
  height: 150px;
  margin: 30px 30px 30px 0;
  left: 4vh;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

.hello-card-container-right-shadow {
  width: 150px;
  height: 123px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
}

.hello-card {
  width: 150px;
  height: 150px;
  align-content: center;
  background: #ef8100;
  position: relative;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 27px),
    calc(100% - 27px) 100%,
    0 100%
  );
}

.hello-card::after {
  content: '';
  position: absolute;
  bottom: 10px;
  right: 0px;
  width: 0;
  height: 0;
  border-left: 20px solid transparent;
  border-right: 20px solid transparent;
  border-top: 20px solid #ffd700;
  transform: rotate(135deg);
  z-index: 2;
}

.portrait-background {
  position: absolute;
  width: 85%;
  height: 80%;
  bottom: 5vh;
  left: 15vh;
  z-index: 1;
}

.experience {
  bottom: 8vh;
  left: 5vw;
  position: absolute;
}
/* **************************** */

/* **** AREA 2 (RIGHT SIDE) CSS */
.area2 {
  grid-area: area2;
  background-color: var(--contrast-color);
}

.info-section {
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
  height: 100vh;
}

.intro {
  margin: 100px 0px 0px 50px;
  /* background: lightblue; */
}

.title-cap {
  font-family: 'Segoe UI';
  font-size: 62px;
  margin-top: -10px;
  font-weight: 750;
  line-height: normal;
  color: var(--text-color);
}

.job-title {
  margin: 2vh 0 0 50px;
  /* background: darkgreen; */
  height: 30%;
}

.info-button {
  margin: 0 0 0 0;
  background: lightcoral;
  height: 10%;
}

/* **************************** */
</style>
