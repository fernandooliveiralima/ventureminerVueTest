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
  
      <div class="flight-booker">
        <select v-model="flightType">
          <option value="one-way flight">One-way Flight</option>
          <option value="return flight">Return Flight</option>
        </select>
  
        <input type="date" v-model="departureDate">
        <input type="date" v-model="returnDate" :disabled="!isReturn">
  
        <button :disabled="!canBook" @click="book">Book</button>
  
        <p>{{ canBook ? '' : 'Return date must be after departure date.' }}</p>
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { computed, ref } from 'vue'
  
  let sidebarClass = ref('sidebar-container')
  let openSidebar = ref(false);
  
  const flightType = ref('one-way flight')
  const departureDate = ref(dateToString(new Date()))
  const returnDate = ref(departureDate.value)
  
  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
  }
  
  const isReturn = computed(() => flightType.value === 'return flight')
  
  const canBook = computed(() => !isReturn.value ||
    stringToDate(returnDate.value) > stringToDate(departureDate.value)
  )
  
  function book() {
    alert(
      isReturn.value
        ? `You have booked a return flight leaving on ${departureDate.value} and returning on ${returnDate.value}.`
        : `You have booked a one-way flight leaving on ${departureDate.value}.`
    )
  }
  
  function stringToDate(str) {
    const [y, m, d] = str.split('-')
    return new Date(+y, m - 1, +d)
  }
  
  function dateToString(date) {
    return (
      date.getFullYear() +
      '-' +
      pad(date.getMonth() + 1) +
      '-' +
      pad(date.getDate())
    )
  }
  
  function pad(n, s = String(n)) {
    return s.length < 2 ? `0${s}` : s
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
  
  
    /* .flight-booker */
    .flight-booker{
      @apply
      h-[30.3125rem] w-screen flex items-center justify-center;
    }
  
    .flight-booker select,input,button{
      @apply
      block
      mt-[0.5rem]
      mb-[0.5rem]
      ml-0
      mr-0;
    }
  
    .flight-booker input{
      @apply
      border border-black
      mr-1;
    }
  
    .flight-booker button{
      @apply
      bg-slate-400
      px-3
      py-1
      rounded;
    }
  
    .flight-booker input:disabled{
      @apply
      text-[#999];
    }
  
    .flight-booker p{
      @apply
      text-[#f00];
    }
  
  }
  </style>
    