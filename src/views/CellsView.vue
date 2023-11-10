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
          <router-link class="hover-link" to="/Timer">Timer</router-link>
        </li>
        <li>
          <router-link class="hover-link" to="/Crud">Crud</router-link>
        </li>
        <li>
          <router-link class="hover-link" to="/CircleDrawer">CircleDrawer</router-link>
        </li>


      </ul>

    </section>

    <section class="open-button">
      <img @click="toggleSidebar()" src="../icons/bars-solid.svg" alt="bars-icon">
    </section>

    <div class="cell-container">

      <div class="cells">
        <table>
          <thead>
            <tr>
              <th></th>
              <th v-for="c in cols">{{ c }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="i in cellStore.cells[0].length">
              <th>{{ i - 1 }}</th>
              <td v-for="(c, j) in cols">
                <CellsComponent :r="i - 1" :c="j"></CellsComponent>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue'

import { useCellsStore } from '../stores/cells';
import CellsComponent from '../components/CellsComponent.vue';

let sidebarClass = ref('sidebar-container')
let openSidebar = ref(false);

let cellStore = useCellsStore();

let cols = cellStore.cells.map((_, i) => String.fromCharCode(65 + i))

const toggleSidebar = () => {
  openSidebar.value = !openSidebar.value;
}


</script>
  
<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

  body{
    @apply
    m-0;
  }

  .body-component {}

  .sidebar-container {
    @apply 
    bg-[#435585] 
    h-screen 
    w-64 
    flex 
    items-center 
    justify-center 
    flex-wrap 
    transition-all 
    ease-in-out 
    duration-300 
    overflow-x-hidden;
  }

  .list-items {
    @apply 
    w-full 
    h-[95%] 
    flex 
    flex-col 
    items-center 
    justify-between 
    text-xl;
  }

  .hover-link {
    @apply 
    mb-10 
    h-full 
    flex 
    items-center 
    font-sans 
    ease-in-out 
    duration-300 
    text-xl;
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

  /* .cells */
  .cells{
    @apply
    
    h-[30.3125rem] 
    w-[95rem] 
    flex 
    items-center 
    justify-center;
  }

  /* .cell-container */
  .cell-container{
    @apply
    w-full
    flex
    items-center
    justify-end;
  }

  .cells table{
    @apply
    border-collapse
    table-fixed
    w-full;
  }

  .cells th{
    @apply
    bg-[#eee];
  }
  .cells tr:first-of-type th{
    @apply
    w-full;
  }

  .cells th:first-of-type tr:first-of-type{
    @apply
    w-[1.5625rem];
  }

  .cells td{
    @apply
    border border-[#ccc]
    h-6
    overflow-hidden;
  }

  

}
</style>
  