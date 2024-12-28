<template>
  <div class="project-section">
    <div class="top-section">
      <span class="project-title">My Projects</span>
      <span class="project-subtitle"
        >Work that I've done for the past years reflects my journey, from being
        a computer engineering student to pursuing a career as a software
        engineer.
      </span>
    </div>
    <div class="scroll-wrapper">
      <div class="scroll-container">
        <div class="project-card">Project 1</div>
        <div class="project-card">Project 2</div>
        <div class="project-card">Project 3</div>

        <!-- Duplicate the cards for infinite scrolling -->
        <div class="project-card">Project 1</div>
        <div class="project-card">Project 2</div>
        <div class="project-card">Project 3</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.project-section {
  margin: 0 15px 50px 15px;
  // border: 10px solid rgb(211, 211, 211); // TODO: REMOVE THIS
  border-radius: 10px;
  height: 85vh;
}

.top-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.project-title {
  font-size: 3rem;
  font-weight: 600;
}

.project-subtitle {
  font-size: 1.2rem;
  margin-top: 12px;
}

// .project-card {
//   background: lightgray;
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//   display: flex;
//   border-radius: 8px;
//   height: 47vh;
//   width: 45vw;
//   justify-content: center;
//   margin: 0 10px;
// }

.scroll-wrapper {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-top: 50px;
}

.scroll-container {
  display: flex;
  animation: scroll 15s linear infinite;
}

.project-card {
  background: lightgray;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  border-radius: 8px;
  height: 47vh;
  width: 45vw;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
}

@keyframes scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
