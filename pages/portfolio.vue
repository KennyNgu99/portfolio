<template>
  <div class="grid-container">
    <!-- Left side -->
    <div class="area1">
      <!-- Hello card here -->
      <v-card class="hello-card">
        <v-card-title class="text-center">
          <h2 class="semibold" :style="{ color: 'white' }">Hello :)</h2>
        </v-card-title>
      </v-card>

      <!-- Icons bar -->
      <v-card class="icons-vertical-bar">
        <v-icon color="primary">mdi-linkedin</v-icon>
        <v-icon color="tertiary">mdi-email</v-icon>
        <v-icon color="success">mdi-phone</v-icon>
      </v-card>
    </div>

    <!-- Right side -->
    <div class="area2">
      <div class="job-title">
        <h1 class="semibold">Software Engineer</h1>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<style scoped>
.job-title {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.icons-vertical-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 3vw;
  gap: 50px;
  margin-left: 30px;
  background-color: var(--contrast-color);
  border-radius: 20px;
}

.grid-container {
  height: 100vh;
  display: grid;
  grid-template-columns: 2.5fr 2fr;
  gap: 0px 0px;
  grid-template-areas: 'area1 area2';
}

.area1 {
  grid-area: area1;
  background-color: white;
}

.area2 {
  grid-area: area2;
  background-color: var(--contrast-color);
}

.hello-card {
  width: 150px;
  height: 150px;
  margin: 30px 30px;
  align-content: center;
  background: #ef8100;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
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
</style>
