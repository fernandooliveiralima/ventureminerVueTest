<template>
    <div class="body-component">
  
      <section :class="[{ 'sidebar-container': sidebarClass }, [openSidebar ? 'open-sidebar' : 'close-sidebar']]">
  
  
  
        <ul class="list-items">
  
          <li class="home-link hover-link">
            <router-link to="/">Home</router-link>
          </li>
  
  
          <li>
            <router-link class="hover-link" to="/Counter">Counter</router-link>
          </li>
          <li>
            <router-link class="hover-link" to="/TemperatureConverter">Temperature Converter</router-link>
          </li>
          <li>
            <router-link class="hover-link" to="/FlightBooker">Flight Booker</router-link>
          </li>
  
          <li>
            <router-link class="hover-link" to="/Crud">Crud</router-link>
          </li>
          <li>
            <router-link class="hover-link" to="/CircleDrawer">CircleDrawer</router-link>
          </li>
          <li>
            <router-link class="hover-link" to="/Cells">Cells</router-link>
          </li>
  
        </ul>
  
      </section>
  
      <section class="open-button">
        <img @click="toggleSidebar()" src="../icons/bars-solid.svg" alt="bars-icon">
      </section>
  
      <div class="timer">
  
        <label>Elapsed Time: <progress :value="progressRate"></progress></label>
  
        <div>{{ (elapsed / 1000).toFixed(1) }}s</div>
  
        <div>
          Duration: <input type="range" v-model="duration" min="1" max="30000">
          {{ (duration / 1000).toFixed(1) }}s
        </div>
  
        <button @click="reset">Reset</button>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import {computed, ref, onUnmounted } from 'vue'
  
  
  let sidebarClass = ref('sidebar-container')
  let openSidebar = ref(false);
  
  const duration = ref(15 * 1000)
  const elapsed = ref(0)
  let lastTime
  let handle
  
  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
  }
  
  const update = () => {
    elapsed.value = performance.now() - lastTime
    if (elapsed.value >= duration.value) {
      cancelAnimationFrame(handle)
    } else {
      handle = requestAnimationFrame(update)
    }
  }
  
  const reset = () => {
    elapsed.value = 0
    lastTime = performance.now()
    update()
  }
  
  const progressRate = computed(() =>
    Math.min(elapsed.value / duration.value, 1)
  )
  
  reset()
  
  onUnmounted(() => {
    cancelAnimationFrame(handle)
  })
  
  </script>
    
  <style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @layer components {
  
    .body-component {}
  
    .sidebar-container {
      @apply bg-[#435585] h-screen w-64 flex items-center justify-center flex-wrap transition-all ease-in-out duration-300 overflow-x-hidden;
    }
  
    .list-items {
      @apply w-full h-[95%] flex flex-col items-center justify-between text-xl;
    }
  
    .hover-link {
      @apply mb-10 h-full flex items-center font-sans ease-in-out duration-300 text-xl;
    }
  
    /*  */
    .open-button {
      @apply mt-[-60.25rem] ml-64;
    }
  
    .open-button>img {
      @apply ml-5 mt-5 text-3xl font-semibold font-sans cursor-pointer w-8;
    }
  
    .open-sidebar {
      @apply w-64;
    }
  
    .close-sidebar {
      @apply w-0;
    }
  
    .timer {
      @apply h-[30.3125rem] w-screen flex items-center justify-center;
    }
  
    .timer button{
      @apply
      bg-slate-400
      px-3
      py-1
      rounded
      ml-1;
    }
    /* .elapsed-container */
    .elapsed-container{
      @apply
      w-[18.75rem];
    }
  
    .elapsed-bar{
      @apply
      bg-[#f00]
      h-[0.625rem];
      }
  }
  </style>
    