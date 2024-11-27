<template>
    <div class="top">
        <v-row no-gutters :style="{height: '100%'}">
            <v-col cols="2"><span>Kenny</span></v-col>
            <v-col cols="8" class="px-8">
                    <div :style="{'display': 'flex', 'justify-content': 'space-between', width: '100%', 'background-color': 'red'}">
                        <v-btn><span class="top-bar-font">Experience</span></v-btn>
                        <v-btn><span class="top-bar-font">Resume</span></v-btn>
                        <v-btn><span class="top-bar-font">Social media</span></v-btn>
                    </div>
            </v-col>
            <v-col>
                contact
            </v-col>
        </v-row>
    </div>
    <div class="mid">
        Part 2
    </div>
    <div class="bot">
        Part 3 
    </div>
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