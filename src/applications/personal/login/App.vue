<!-- src/applications/personal/App.vue -->
<template>
  <div>
    <header>
      <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
      />
      <h1>Login page</h1>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/login">Login</a>
      </nav>
    </header>
    <HelloWorld msg="Login" />
    <TheWelcome />
  </div>
</template>

<script setup>
// Import komponentów stron dla aplikacji personal
// import { RouterLink } from "vue-router";
import HelloWorld from "@/components/HelloWorld.vue";
import TheWelcome from "@/components/TheWelcome.vue"


</script>

<style>
/* Global styles dla aplikacji personal */
</style>