<!-- src/applications/professional/App.vue -->
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
      <h1>Professional Application</h1>
      <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/services">Services</router-link>
      </nav>
    </header>
    <router-view></router-view>
  </div>
</template>

<script setup>
// Import komponentów stron dla aplikacji professional
import { RouterLink, RouterView } from "vue-router";

</script>

<style>
/* Global styles dla aplikacji professional */
</style>
