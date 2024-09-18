<template>
  <header class="header">
    <img :src="logoSrc" alt="Logo" class="logo" />
  </header>
</template>

<script setup>
// Import the logo image
import logoSrc from "@/assets/images/logo.png";
</script>

<style scoped>
.header {
  display: flex;
  justify-content: center; /* Horizontally center */
  align-items: center; /* Vertically center */
}

.logo {
  max-width: 500px; /* Adjust the logo size as needed */
  height: auto;
}
</style>
