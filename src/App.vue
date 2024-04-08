<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="bg-gradient-to-br from-black to-slate-700 h-screen overflow-hidden flex flex-col geologica-font">
    <div class="h-24 md:h-16">
      <NavBar />
    </div>
    <div class="flex-grow overflow-auto">
      <RouterView />
      <div class="p-5 text-center text-sm text-slate-300">© {{ new Date().getFullYear() }} Ryan P. H. Chang</div>
    </div>
  </div>
</template>

<style>
#app {
  @apply text-slate-100;
}
.section-title {
  @apply text-3xl font-bold mt-10;
}

li {
  @apply text-lg items-center;
}
ul {
  @apply list-disc pl-6;
}
</style>