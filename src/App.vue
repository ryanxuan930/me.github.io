<script setup lang="ts">
  import { RouterView } from 'vue-router';
  import NavBar from '@/components/NavBar.vue';
</script>

<template>
  <div class="bg-gradient-to-br from-black to-slate-700 h-screen overflow-hidden flex flex-col geologica-font">
    <div class="h-12">
      <NavBar />
    </div>
    <div class="flex-grow overflow-auto">
      <RouterView />
    </div>
  </div>
</template>
