<script setup lang="ts">
  import { ref } from 'vue';
</script>

<template>
  <div class="flex p-12">
    <div class="m-auto flex flex-col md:gap-6">
      <div class="flex flex-col md:flex-row gap-6 md:gap-10 items-center">
        <div class="w-60 h-60 md:h-72 md:w-72 lg:w-80 lg:wh-80 xl:w-96 xl:h-96 object-cover">
          <img class="rounded-full grayscale h-full shadow" src="@/assets/avatar.jpeg" alt="" />
        </div>
        <div class="text-slate-100 font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl flex flex-col gap-4">
          <div>
            <div class="pb-2">HI, I AM</div>
            <div class="border-b-rose-700 border-b-4 pb-1">RYAN CHANG</div>
          </div>
          <div class="text-lg md:text-2xl font-medium text-slate-400">A versatile full-stack developer</div>
          <div class="text-base md:text-xl font-medium text-slate-500 flex gap-2 items-center">
            <i class="pi pi-map-marker"></i>
            <div>Kaohsiung, Taiwan</div>
          </div>
          <div class="flex items-center gap-5 text-3xl text-slate-300">
            <a href="mailto:ryanphchang@gmail.com" target="_blank">
              <i class="pi pi-at"></i>
            </a>
            <a href="https://github.com/ryanxuan930" target="_blank">
              <i class="pi pi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ryan-po-hsuan-chang-055a0a253/" target="_blank">
              <i class="pi pi-linkedin"></i>
            </a>
            <a href="https://t.me/ryanxuan930" target="_blank">
              <i class="pi pi-telegram"></i>
            </a>
            <a href="https://www.instagram.com/ryan_qaqa/" target="_blank">
              <i class="pi pi-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div class="text-slate-100 text-4xl font-bold mt-10">About Me</div>
      </div>
    </div>
  </div>
</template>
