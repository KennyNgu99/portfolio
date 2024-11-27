<template>
  <h1>Home Page</h1>
  <br />

  <h3 class="semibold">Test Vuetify</h3>
  <br />

  <v-btn color="warning">test</v-btn>
  <v-icon> mdi-checkbox-marked-circle </v-icon>
  <br />

  <h3 class="semibold">Test Tailwind</h3>
  <div class="p-4 bg-blue-1000 text-blue">Hello, Tailwind!</div>
  <div class="text-3xl font-bold underline">Hello, Tailwind!</div>

  <br />
  <h3 class="semibold">Test SCSS Inheritance</h3>
  <div class="test-local-scss">Test local scss</div>

  <v-btn>
    <NuxtLink to="/portfolio">Portfolio</NuxtLink>
  </v-btn>
  <v-btn>
    <NuxtLink to="/portfolio2">Portfolio Version 2</NuxtLink>
  </v-btn>
  <v-btn>
    <NuxtLink to="/portfolio3">Portfolio Version 3</NuxtLink>
  </v-btn>
</template>

<script setup lang="ts">
const test: Ref<string> = ref<string>('tes22323t')
// test.value = 1
console.log(test.value)
// console.log(parseInt(test.value) + 1);
</script>

<style scoped>
.test-local-scss {
  color: var(--warning-color);
}
</style>
