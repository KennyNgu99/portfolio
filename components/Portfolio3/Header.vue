<template>
  <div class="top">
    <v-row no-gutters :style="{ height: '100%', width: '100%' }">
      <!-- signature section -->
      <v-col cols="3">
        <div :style="{ height: '100%', display: 'grid', 'justify-items': 'center', 'align-items': 'center' }">
          <span class="signature kenny-font" @click="$emit('navigate', 'home')">
            Kenny
          </span>
        </div>
      </v-col>

      <!-- buttons section -->
      <v-col :cols="displayWidth > 600 ? 6 : 7" :class="displayWidth > 600 ? 'px-8' : ''"
        :style="{ alignContent: 'center' }">
        <div :style="{
          display: 'flex',
          justifyContent: 'space-between',
          width: '100%',
          height: '100%',
        }">
          <div class="top-buttons" @click="$emit('navigate', 'section2Ref')">
            <div v-if="displayWidth > 600" class="top-button-wrapper">
              <span class="top-bar-font">Work Experience</span>
            </div>
            <div v-else><v-icon>mdi-office-building</v-icon></div>
          </div>
          <div class="top-buttons" @click="$emit('navigate', 'projects')">
            <div v-if="displayWidth > 600" class="top-button-wrapper">
              <span class="top-bar-font">Projects</span>
            </div>
            <div v-else><v-icon>mdi-laptop</v-icon></div>
          </div>
          <div class="top-buttons" @click="$emit('navigate', 'funFact')">
            <div v-if="displayWidth > 600" class="top-button-wrapper">
              <span class="top-bar-font">Fun Fact</span>
            </div>
            <div v-else><v-icon>mdi-trophy</v-icon></div>
          </div>
        </div>
      </v-col>

      <!-- connect section -->
      <v-col :cols="displayWidth > 600 ? 3 : 2" :style="{ padding: 0, margin: 0, justifyItems: 'center' }">
        <div class="hover-div" :style="{
          justifyContent: 'center',
          display: 'grid',
          height: '100%',
          alignContent: 'center',
          background: 'var(--background-orange-color)',
          width: displayWidth > 600 ? '50%' : '100%',
          cursor: 'pointer',
        }" @click="$emit('navigate', 'contact')">
          <span v-if="displayWidth > 600" :style="{
            color: 'white',
            fontSize: '20px',
            userSelect: 'none',
          }">
            Contact
          </span>
          <div v-else><v-icon>mdi-account-badge</v-icon></div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts">
import { useDisplay } from "vuetify";

const { width: displayWidth } = useDisplay();
</script>

<style lang="scss" scoped>
.top {
  height: 10vh;
}

.top-button-wrapper:active,
.hover-div:active {
  transform: translateY(4px);
}

.hover-div:hover {
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.3);
}

.top-buttons {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.top-bar-font {
  font-size: 20px;
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

.kenny-font {
  cursor: pointer;
  font-size: 28px;
}

// media queries 
@media (max-width: 600px) {
  .kenny-font {
    font-size: 20px;
  }
}
</style>
