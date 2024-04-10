<!-- src/applications/personal/pages/About.vue -->
<template>
  <div>
    <h1>About Personal Application</h1>
    <p>Learn more about the personal application.</p>
    <HelloWorld msg="About App" />
    <TheWelcome />

  </div>
</template>

<script setup>
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue"
</script>

<style scoped>
/* Component styles */
</style>
