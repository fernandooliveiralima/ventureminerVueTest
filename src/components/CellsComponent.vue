<template>
  <div>

    <div class="cell" :title="cells[c][r]" @click="editing = true">
      <input type="text" v-if="editing" :value="cells[c][r]" @change="update" @blur="update"
        @vue:mounted="({ el }) => el.focus()" />
      <span v-else>{{ evalCell(cells[c][r]) }}</span>
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useCellsStore } from '../stores/cells';

  let { cells, evalCell } = useCellsStore();

  const props = defineProps({
    c: Number,
    r: Number
  })

  const editing = ref(false);

  function update(e) {
    editing.value = false;
    cells[props.c][props.r] = e.target.value.trim()
}
</script>


<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

.cell,
.cell input {
  @apply h-[1.5rem] leading-[1.5rem] text-[0.9375rem];
}

.cell span {
  @apply py-0 px-[0.375rem];
}

.cell input {
  @apply box-border w-full;
}
</style>