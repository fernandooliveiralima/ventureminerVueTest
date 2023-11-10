<template>
    <div class="body-component">
  
      <section :class="[{ 'sidebar-container': sidebarClass }, [openSidebar ? 'open-sidebar' : 'close-sidebar']]">
  
  
  
        <ul class="list-items">
  
          <li class="home-link hover-link">
            <router-link to="/">Home</router-link>
          </li>
  
  
  
          <li>
            <router-link class="hover-link" to="/TemperatureConverter">Temperature Converter</router-link>
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
          
        <div class="counter">
          <span data-test="counter">{{ count }}</span>
          <button data-test="button" @click="incrementCount()">count</button>
        </div>
      
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  
  let sidebarClass = ref('sidebar-container')
  let openSidebar = ref(false);
  
  let count = ref(0);
  
  const incrementCount = ()=>{
    count.value++;
  }
  
  
  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
  }
  
  defineExpose({
    incrementCount,
    count

  })
  
  </script>
    
  <style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @layer components {
  
    .body-component{
      
    }
  
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
  
    /* counter */
  
    .counter{
      @apply
      h-[30.3125rem] 
      w-screen 
      flex 
      items-center 
      justify-center;
    }
  
    .counter button{
      @apply
      bg-blue-400
      text-4xl
      px-3
      py-1
      rounded
      cursor-pointer;
    }
  
    .counter span{
      @apply
      text-4xl
      mr-5;
    }
  
  }
  </style>
    