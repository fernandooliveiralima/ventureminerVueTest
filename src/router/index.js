import { createRouter, createWebHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';

import CellsView from '../views/CellsView.vue';
import CircleDrawerView from '../views/CircleDrawerView.vue';
import CounterView from '../views/CounterView.vue';
import CrudView from '../views/CrudView.vue';
import FlightBookerView from '../views/FlightBookerView.vue';
import TemperatureConverterView from '../views/TemperatureConverterView.vue';
import TimerView from '../views/TimerView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomeView},

    {path: '/Cells',  component: CellsView},
    {path: '/CircleDrawer',  component: CircleDrawerView},
    {path: '/Counter',  component: CounterView},
    {path: '/FlightBooker',  component: FlightBookerView},
    {path: '/Crud',  component: CrudView},
    {path: '/TemperatureConverter',  component: TemperatureConverterView},
    {path: '/Timer',  component: TimerView},
    

  ]
})

export default router
    
