<template>
  <div class="home-container">
      
      <sidebarComponent></sidebarComponent>

      <section class="info-container">
          <span>7 GUIs Vuejs</span>
          <img src="../icons/vuejs.svg" />
      </section>

  </div>
  
</template>

<script setup>
  import sidebarComponent from '../components/sidebarComponent.vue';
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  .home-container {
      @apply bg-[#47B987] 
      w-screen 
      h-screen 
      flex 
      items-center 
      justify-between;
  }

  /* .image-container */
  .info-container {
      @apply w-72 
      flex flex-col 
      items-center 
      justify-center
      m-auto;
  }

  .info-container > span {
      @apply text-[3rem] font-sans;
  }
}
</style>