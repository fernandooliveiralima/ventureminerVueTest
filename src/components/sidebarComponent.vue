<template>
    <div class="body-component">

        <section :class="[{'sidebar-container': sidebarClass }, [openSidebar ? 'open-sidebar' : 'close-sidebar']]">

            <ul class="list-items">
                
                <li>
                    <router-link to="/Counter">Counter</router-link>
                </li>
                <li>
                    <router-link to="/TemperatureConverter">Temperature Converter</router-link>
                </li>
                <li>
                    <router-link to="/FlightBooker">Flight Booker</router-link>
                </li>
                <li>
                    <router-link to="/Timer">Timer</router-link>
                </li>
                <li>
                    <router-link to="/Crud">Crud</router-link>
                </li>
                <li>
                    <router-link to="/CircleDrawer">CircleDrawer</router-link>
                </li>
                <li>
                    <router-link to="/Cells">Cells</router-link>
                </li>
                
            </ul>
                
                

            
        </section>

        <section class="open-button">
            <img @click="toggleSidebar()" src="../icons/bars-solid.svg" alt="bars-icon">
        </section>

    </div>
</template>

<script setup>
import { ref } from 'vue';


let sidebarClass = ref('sidebar-container')
let openSidebar = ref(false);

const toggleSidebar = ()=>{
    openSidebar.value = !openSidebar.value;
}

</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {

    .body-component{
        @apply
        flex;
    }
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

    /* class sidebar animation */

    .open-sidebar{
        @apply
        w-64;
    }
    .close-sidebar{
        @apply
        w-0;
    }

    

    .open-button > img{
        @apply
        ml-5
        mt-5
        text-3xl
        font-semibold
        font-sans
        cursor-pointer
        w-8;
    }

    /* .list-items */
    .list-items {
        @apply w-full h-[70%] flex flex-col items-center justify-between;
    }

    .list-items> li {
        @apply 
        text-xl 
        font-sans 
        font-semibold 
        text-white 
        cursor-pointer 
        transition-all
        ;
    }

     @layer utilities {
        .list-items>li:hover {
            @apply 
            text-white
            ;
        }
    }
}
</style>