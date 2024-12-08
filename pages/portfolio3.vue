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
  background-color: green;
}

.mid {
  height: 50vh;
  display: flex;
}

.bot {
  background-color: blue;
  height: 40vh;
}

.main-title {
  font-size: 5.5rem;
  color: var(--text-sec-color);
  font-weight: 800;
  margin-left: 6rem;
}

.description {
  font-size: 1.5rem;
  // color: var(--text-sec-color);
  // margin-left: 6rem;
}
</style>
