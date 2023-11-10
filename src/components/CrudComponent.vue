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
  
      <div class="crud">
  
        <div><input v-model="prefix" placeholder="Filter prefix"></div>
  
        <select size="5" v-model="selected">
          <option v-for="name in filteredNames" :key="name">{{ name }}</option>
        </select>
  
        <label>Name: <input v-model="first"></label>
        <label>Surname: <input v-model="last"></label>
  
        <div class="buttons">
          <button @click="create()">Create</button>
          <button @click="update()">Update</button>
          <button @click="del()">Delete</button>
        </div>
  
      </div>
  
    </div>
  </template>
  
  <script setup>
  import { ref, reactive, computed, watch } from 'vue'
  
  
  const names = reactive(['Emil, Hans', 'Mustermann, Max', 'Tisch, Roman'])
  const selected = ref('')
  const prefix = ref('')
  const first = ref('')
  const last = ref('')
  
  let sidebarClass = ref('sidebar-container')
  let openSidebar = ref(false);
  
  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
  }
  
  const filteredNames = computed(() =>
    names.filter((n) =>
      n.toLowerCase().startsWith(prefix.value.toLowerCase())
    )
  )
  
  watch(selected, (name) => {
    ;[last.value, first.value] = name.split(', ')
  })
  
  function create() {
    if (hasValidInput()) {
      const fullName = `${last.value}, ${first.value}`
      if (!names.includes(fullName)) {
        names.push(fullName)
        first.value = last.value = ''
      }
    }
  }
  
  function update() {
    if (hasValidInput() && selected.value) {
      const i = names.indexOf(selected.value)
      names[i] = selected.value = `${last.value}, ${first.value}`
    }
  }
  
  function del() {
    if (selected.value) {
      const i = names.indexOf(selected.value)
      names.splice(i, 1)
      selected.value = first.value = last.value = ''
    }
  }
  
  function hasValidInput() {
    return first.value.trim() && last.value.trim()
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
  
    /* .crud */
    .crud {
      @apply 
      h-[30.3125rem] 
      w-screen 
      flex 
      items-center 
      justify-center;
    }
  
    .crud input{
      @apply
      block
      mb-[0.625rem]
      border border-black
      p-1
      rounded
      mr-3;
    }
    .crud select{
      @apply
      border border-black
      mt-0
      mr-4
      mb-4
      ml-0
      float-left
      w-56;
    }
  
    /* .buttons */
    .buttons{
      @apply
      clear-both;
    }
    button{
      @apply
      ml-[0.3125rem]
      bg-slate-500
      px-4
      py-1
      text-lg
      font-semibold
      font-sans;
    }
  
  }
  </style>
    