<template>
  <div class="DefaultLayout">
    <LayoutAppHeader />
    <slot />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.DefaultLayout {
  margin-left: 1.5rem;
  margin-right: 1.5rem;
  /* margin-top: calc(64px + 1.5rem); */
}

/* Mobile view */
@media screen and (max-width: 600px) {
  .DefaultLayout {
    margin-left: 1rem;
    margin-right: 1rem;
    margin-top: calc(64px + 1rem);
  }
}
</style>
