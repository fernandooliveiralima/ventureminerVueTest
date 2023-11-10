<template>
    <div data-test="dataBody-component" class="body-component">
  
      <section  :class="[{ 'sidebar-container': sidebarClass }, [openSidebar ? 'open-sidebar' : 'close-sidebar']]">
  
  
  
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
            <router-link class="hover-link" to="/Cells">Cells</router-link>
          </li>
  
        </ul>
  
      </section>
  
  
  
      <div data-test="drawer-container" class="drawer-container">
        
        <svg @click="onClick">
          <foreignObject class="foreignObject">
            <p data-test="paragraph" class="tip">
              Click on the canvas to draw a circle. Click on a circle to select it.
              Right-click on the canvas to adjust the radius of the selected circle.
            </p>
          </foreignObject>
          <circle v-for="circle in circles" :cx="circle.cx" :cy="circle.cy" :r="circle.r"
            :fill="circle === selected ? '#ccc' : '#fff'" @click="selected = circle" @contextmenu.prevent="adjust(circle)">
          </circle>
        </svg>
        <div class="controls">
          <button data-test="button-undo" @click="undo" :disabled="index <= 0">Undo</button>
          <button data-test="button-redo" @click="redo" :disabled="index >= history.length - 1">Redo</button>
        </div>
  
        <div class="dialog" v-if="adjusting" @click.stop>
          <p>Adjust radius of circle at ({{ selected.cx }}, {{ selected.cy }})</p>
          <input type="range" v-model="selected.r" min="1" max="300">
        </div>
  
      </div>
  
      <section class="open-button">
        <img @click="toggleSidebar()" src="../icons/bars-solid.svg" alt="bars-icon">
      </section>
  
    </div>
  </template>
  
  <script setup>
  import { ref, shallowReactive, toRaw } from 'vue'
  
  
  
  const history = shallowReactive([[]])
  const index = ref(0)
  const circles = ref([])
  const selected = ref()
  const adjusting = ref(false)
  
  let sidebarClass = ref('sidebar-container')
  let openSidebar = ref(false);
  
  const toggleSidebar = () => {
    openSidebar.value = !openSidebar.value;
  }
  
  
  const onClick =({ clientX: x, clientY: y })=> {
    if (adjusting.value) {
      adjusting.value = false
      selected.value = null
      push()
      return
    }
  
    selected.value = [...circles.value].reverse().find(({ cx, cy, r }) => {
      const dx = cx - x
      const dy = cy - y
      return Math.sqrt(dx * dx + dy * dy) <= r
    })
  
    if (!selected.value) {
      circles.value.push({
        cx: x,
        cy: y,
        r: 50
      })
      push()
    }
  }
  
  const adjust = (circle)=> {
    selected.value = circle
    adjusting.value = true
  }
  
  const push = () => {
    history.length = ++index.value
    history.push(clone(circles.value))
    console.log(toRaw(history))
  }
  
  const undo = () => {
    circles.value = clone(history[--index.value])
  }
  
  const redo = () => {
    circles.value = clone(history[++index.value])
  }
  
  const clone = (circles) => {
    return circles.map((c) => ({ ...c }))
  }
  
  defineExpose({
    history,
    index,
    circles,
    selected,
    adjusting
  })

  </script>
    
  <style scoped>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  
  @layer components {
    
  
    .sidebar-container {
          @apply bg-[#435585] 
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
  
    /* .cells-menu */
    .cells-menu {
      @apply bg-purple-600 h-24 w-full flex flex-col justify-center
    }
  
    .sidebar-container {
      @apply bg-[#435585] h-screen w-64 flex items-center justify-center flex-wrap transition-all ease-in-out duration-300 overflow-x-hidden absolute;
    }
  
    .list-items {
      @apply w-full h-[95%] flex flex-col items-center justify-between text-xl;
    }
  
  
    .hover-link {
      @apply mb-10 h-full flex items-center font-sans ease-in-out duration-300 text-xl;
    }
  
  
  
    .home-link {
      @apply flex-1 mb-20;
    }
  
    @layer utilities {
      .hover-link:hover {
        @apply text-white;
      }
    }
  
  
    /* circle drawer */
    svg {
      @apply h-screen w-full bg-[#eee];
    }
  
    circle {
      @apply stroke-black;
    }
  
    .controls {
      @apply w-full absolute top-5 flex items-center justify-end;
    }
  
    .controls button {
      @apply mr-5;
    }
  
    .dialog{
      @apply
      fixed
      top-[calc(50%-50px)]
      left-[calc(50%-50px)]
      bg-white
      w-[21.875rem]
      h-[6.25rem]
      py-20
      px-5
      box-border
      rounded
      text-center;
    }
  
    .dialog input {
      @apply
      block
      w-[12.5rem]
      mt-0
      mx-auto;
    }
  
    .tip{
      @apply
      text-center
      text-[#bbb]
      py-0
      px-[3.125rem];
    }
  
    .sidebar {
      @apply absolute bg-[#435585] h-screen w-64 flex items-center justify-center flex-wrap transition-all ease-in-out duration-300 overflow-x-hidden;
    }
  
    .foreignObject{
      @apply
      w-full 
      h-[12.5rem];
    }
  
    .drawer-container {}
  
    .open-button{
      @apply
      mt-[-60.25rem]
      ml-64;
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
  
  }
  </style>
    