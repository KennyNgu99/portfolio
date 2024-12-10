<template>
  <div class="top">
    <v-row no-gutters :style="{ height: '100%' }">
      <v-col cols="3"
        ><div :style="{ margin: '6px 0 0 12px' }">
          <span class="signature">Kenny</span>
        </div></v-col
      >
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
          <v-icon
            :style="{
              'align-self': 'center',
              marginRight: '6px',
              color: 'var(--text-sec-color)',
            }"
            >mdi-phone</v-icon
          >
          <span class="top-bar-font">+6013-8035796 </span>
        </div>
      </v-col>
    </v-row>
  </div>
  <div class="mid">
    <div :style="{ flex: 1, display: 'grid' }">
      <span class="main-title" :style="{ 'align-content': 'end' }">
        Hey There,
      </span>
      <span class="main-title">I'm Kenny</span>
    </div>
    <div :style="{ flex: 1, display: 'grid', marginLeft: '35vw' }">
      <span class="description" :style="{ 'align-content': 'end' }">
        Currently a fullstack developer.
      </span>
      <span class="description">And I love what i do.</span>
    </div>
  </div>
  <div class="bot">
    <div class="paint-background">
      <v-img :src="paintBackground"></v-img>
    </div>
    <div class="portrait-background">
      <v-img :src="portraitSvg"></v-img>
    </div>
    <div :style="{ display: 'flex', flex: 1, 'margin-left': '6rem' }">
      <span
        class="title"
        :style="{ 'align-content': 'center', 'margin-right': '12px' }"
        >2.5</span
      >
      <div :style="{ display: 'grid' }">
        <h2 class="semibold" :style="{ 'align-content': 'end' }">YEARS</h2>
        <h2 class="semibold">EXPERIENCE</h2>
      </div>
    </div>
    <div :style="{ flex: '1' }">
      <div
        :style="{
          display: 'grid',
          'justify-content': 'center',
        }"
      >
        <v-img :src="gcpLogo" class="gcp-logo"></v-img>
        <span class="ace-font">GCP Certified</span>
        <span class="ace-font">Associate</span>
        <span class="ace-font">Cloud Engineer</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import paintBackground from '@/assets/portfolio3/paintBackground.svg'
import gcpLogo from '@/assets/portfolio3/gcpLogo.svg'
import portraitSvg from '@/assets/portfolio3/portrait.svg'
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
  // background-color: green;
}

.mid {
  height: 50vh;
  display: flex;
}

.bot {
  // background-color: rgb(119, 119, 119);
  height: 40vh;
  position: relative;
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
  bottom: 30%;
  width: 100%;
  height: 100%;
  scale: 1.8;
}

.portrait-background {
  position: absolute;
  bottom: 30%;
  width: 100%;
  height: 100%;
  scale: 2.5;
  z-index: 10;
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
</style>
