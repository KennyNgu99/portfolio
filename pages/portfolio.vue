<template>
  <div>
    <!-- <span class="title">Software Engineer</span> -->
    <!-- <br /> -->
    <v-card class="hello-card" elevation="8">
      <v-card-title class="text-center">
        <h2 class="semibold" :style="{ color: 'white' }">Hello :)</h2>
      </v-card-title>
    </v-card>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>

<style scoped>
.hello-card {
  width: 150px;
  height: 150px;
  margin: 30px 30px;
  align-content: center;
  background: #ef8100;
}
</style>
