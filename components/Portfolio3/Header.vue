<template>
  <div class="top">
    <v-row no-gutters :style="{ height: '100%' }">
      <!-- signature section -->
      <v-col cols="3">
        <div :style="{ margin: '12px 0 0 3vw' }">
          <span
            class="signature kenny-font"
            :style="{ userSelect: 'none', fontSize: '28px' }"
            @click="$emit('navigate', 'home')"
          >
            Kenny
          </span>
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
          <div class="top-buttons" @click="$emit('navigate', 'section2Ref')">
            <div class="top-button-wrapper">
              <span class="top-bar-font">Work Experience</span>
            </div>
          </div>
          <div class="top-buttons" @click="$emit('navigate', 'projects')">
            <div class="top-button-wrapper">
              <span class="top-bar-font">Projects</span>
            </div>
          </div>
          <div class="top-buttons" @click="$emit('navigate', 'funFact')">
            <div class="top-button-wrapper">
              <span class="top-bar-font">Fun Fact</span>
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
          @click="$emit('navigate', 'contact')"
        >
          <span
            :style="{
              color: 'white',
              fontSize: '20px',
              userSelect: 'none',
            }"
          >
            Contact
          </span>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>

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
</style>
