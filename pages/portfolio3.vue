<template>
  <div class="top">
    <v-row no-gutters :style="{ height: '100%' }">
      <v-col cols="3"><span class="signature">Kenny</span></v-col>
      <v-col cols="6" class="px-8" :style="{ 'align-content': 'center' }">
        <div
          :style="{
            display: 'flex',
            'justify-content': 'space-between',
            width: '100%',
          }"
        >
          <div><span class="top-bar-font">Experience</span></div>
          <div><span class="top-bar-font">Resume</span></div>
          <div><span class="top-bar-font">Social media</span></div>
        </div>
      </v-col>
      <v-col cols="3" :style="{ 'align-content': 'center' }">
        <div
          :style="{
            width: '100%',
            'justify-content': 'center',
            display: 'flex',
          }"
        >
          <v-icon>mdi-phone</v-icon>
          <span class="top-bar-font">+6013-8035796 </span>
        </div>
      </v-col>
    </v-row>
  </div>
  <div class="mid">Part 2</div>
  <div class="bot">Part 3</div>
</template>

<script setup>
definePageMeta({
  layout: false,
})
</script>

<style lang="scss" scoped>
.top-bar-font {
  font-size: 1.5rem;
  color: var(--text-sec-color);
  text-transform: none;
}

.top {
  height: 10vh;
  // display: flex;
}

.mid {
  background-color: green;
  height: 50vh;
}

.bot {
  background-color: blue;
  height: 40vh;
}
</style>
