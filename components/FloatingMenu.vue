<template>
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
</template>

<script setup lang="ts"></script>

<style scoped>
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
</style>
