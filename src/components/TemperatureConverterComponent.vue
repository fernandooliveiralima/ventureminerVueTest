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
            <router-link class="hover-link" to="/FlightBooker">Flight Booker</router-link>
          </li>
          <li>
            <router-link class="hover-link" to="/Timer">Timer</router-link>
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
  
      <div class="temperature-converter">
        <input type="number" :value="c" @change="setC"> Celsius =
        <input type="number" :value="f" @change="setF"> Fahrenheit
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  let sidebarClass = ref('sidebar-container')
  let openSidebar = ref(false);
  
  const c = ref(0)
  const f = ref(32)
  
  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
  }
  
  function setC(e, v = +e.target.value) {
    c.value = v
    f.value = v * (9 / 5) + 32
    c.value = ''
  }
  
  function setF(e, v = +e.target.value) {
    f.value = v
    c.value = (v - 32) * (5 / 9)
    c.value = ''
  }
  
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
  
    /* .temperature-converter */
    .temperature-converter{
      @apply
      h-[30.3125rem] 
      w-screen 
      flex 
      items-center 
      justify-center;
    }
  
    .temperature-converter input{
      @apply
      border border-black
      p-1
      mr-1;
    }
  
  }
  </style>
    