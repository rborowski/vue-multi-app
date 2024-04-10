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
      <h1>Personal Application</h1>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script setup>
// Import komponentów stron dla aplikacji personal
import { RouterLink, RouterView } from "vue-router";

</script>

<style>
/* Global styles dla aplikacji personal */
</style>