<template>
  <div class="project-section">
    <!-- top section -->
    <div class="top-section">
      <span class="project-title">Howdy!</span>
      <div :style="{ display: 'flex' }">
        <span class="project-subtitle"> Lets connect! Start by</span>
        <v-dialog max-width="500">
          <template v-slot:activator="{ props: activatorProps }">
            <span class="project-subtitle saying-hi" v-bind="activatorProps">
              saying hi
            </span>
          </template>

          <template v-slot:default="{ isActive }">
            <v-card>
              <v-card-title class="menu-title">
                Drop me a message
              </v-card-title>
              <div class="text-field-container">
                <v-text-field
                  label="Name"
                  outlined
                  density="compact"
                  class="input-field"
                ></v-text-field>
                <v-text-field
                  label="Email"
                  density="compact"
                  class="input-field"
                ></v-text-field>
                <v-text-field
                  label="Message"
                  class="input-field"
                ></v-text-field>
              </div>

              <v-card-actions>
                <v-spacer></v-spacer>

                <v-btn @click="isActive.value = false" class="menu-button">
                  LET'S GET STARTED
                </v-btn>
              </v-card-actions>
            </v-card>
          </template>
        </v-dialog>
      </div>
    </div>

    <!-- middle connection section -->
    <div class="middle-section">
      <div class="divider"></div>
      <div class="middle-left">
        <div :style="{ display: 'flex', flexDirection: 'column' }">
          <span class="middle-section-title">Phone</span>
          <span class="middle-section-sub">+60138035796</span>
        </div>
        <div :style="{ display: 'flex', flexDirection: 'column' }">
          <span class="middle-section-title">Email</span>
          <span class="middle-section-sub">kankenny9984@gmail.com</span>
        </div>
        <div :style="{ display: 'flex', flexDirection: 'column' }">
          <span class="middle-section-title">Location</span>
          <span class="middle-section-sub">Petaling Jaya, Malaysia</span>
        </div>
      </div>
      <div class="middle-right">
        <a href="https://www.linkedin.com/in/kennyngukaichun" target="_blank">
          <img :src="`${baseURL}/linkedin.svg`" class="linkedinlogo" />
        </a>
        <a href="https://www.instagram.com/kenny.ngu.73/" target="_blank">
          <img :src="`${baseURL}/instagram.svg`" class="instagramlogo" />
        </a>
        <a href="https://wa.me/60138035796" target="_blank">
          <img :src="`${baseURL}/whatsapp.svg`" class="whatsapplogo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const baseURL = useAppConfig().baseURL || '' // Add fallback for local development
</script>

<style lang="scss" scoped>
// Parent div css
.project-section {
  margin: 0 15rem 50px 15rem;
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
  background-color: rgb(231, 231, 231);
  height: 100%;
  display: flex;
  padding: 2rem 0;
  border-radius: 12px;
  margin-top: 12px;
  position: relative;
}

.middle-left {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.middle-right {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}

.divider {
  position: absolute;
  left: 50%;
  bottom: 12.5%;
  width: 2px;
  height: 75%;
  background-color: black;
}

.linkedinlogo {
  width: 4rem;
  height: 4rem;
}

.instagramlogo {
  width: 4.4rem;
  height: 4.4rem;
}

.whatsapplogo {
  width: 5rem;
  height: 5rem;
}

.middle-section-title {
  font-size: 1.5rem;
  font-weight: 700;
  align-self: center;
}

.middle-section-sub {
  font-size: 1.2rem;
}

// menu css
.menu-button {
  // background-color: var(--background-orange-color);
  background-color: var(--text-sec-color);
  color: white;
  font-weight: 700;
}

.menu-title {
  background-color: var(--text-sec-color);
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  height: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.text-field-container {
  display: flex;
  flex-direction: column;
  margin: 1.5rem 1rem;
}

.input-field {
  margin: 0.5rem 0;
}
</style>
