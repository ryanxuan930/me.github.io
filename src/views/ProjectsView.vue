<script lang="ts" setup>
import { ref } from 'vue';
import Card from 'primevue/card';
import Tag from 'primevue/tag';

const projects = ref([
  {
    title: 'SportEvent Pro',
    discription: '',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel', 'Docker'],
    links: [
      {
        title: 'Deployed in University',
        url: 'https://athletics.nsysu.dev',
      },
      {
        title: 'Deployed in High School',
        url: 'https://sports.hs.ntnu.edu.tw',
      }
    ],
    images: [
      '../assets/projects/sep1.png',
      '../assets/projects/sep2.png',
      '../assets/projects/sep3.png',
      '../assets/projects/sep4.png',
      '../assets/projects/sep5.png',
    ],
    cover: '../assets/projects/sep1.png',
    status: 1,
    visibility: false,
  },
  {
    title: 'NSYSU Interneational Affairs Information Management System',
    discription: '',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    links: [],
    images: [],
    cover: '../assets/projects/nims.png',
    status: 1,
    visibility: true,
  },
  {
    title: 'DARTS',
    discription: '',
    tags: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    links: [],
    images: [],
    cover: '',
    status: 2,
    visibility: false,
  },
  {
    title: 'Monkey ID',
    discription: '',
    tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel'],
    links: [],
    images: [],
    cover: '../assets/projects/monkeyid.png',
    status: 0,
    visibility: false,
  },
  {
    title: 'NSYSUGO E-commerce Platform',
    discription: '',
    tags: ['Vue 3', 'JavaScript', 'Laravel'],
    links: [],
    images: [],
    cover: '../assets/projects/nsysugo.png',
    status: 0,
    visibility: false,
  },
]);

function imgRouteHandler(route: string) {
  return new URL(route, import.meta.url).href;
}
</script>

<template>
  <div class="flex p-6">
    <div class="m-auto max-w-[768px] md:max-w-[1024px] lg:max-w-[1280px] p-5 flex flex-col gap-8">
      <div v-for="(item, index) in projects" :key="index" class="flex items-center gap-4" :class="{'flex-row-reverse text-right': index % 2 === 1}">
        <Card class="basis-1/2 shadow">
          <template #content>
            <img class="p-0 m-0" :src="imgRouteHandler(item.cover)" alt="">
          </template>
        </Card>
        <div class="p-4 basis-1/2 flex flex-col gap-4">
          <div class="title">{{ item.title }}</div>
          <div class="text-slate-300">{{ item.discription }}</div>
          <div class="flex gap-3" :class="{'flex-row-reverse text-right': index%2 === 1}">
            <Tag v-for="(tag, index) in item.tags" :key="index" class="text-sm">{{ tag }}</Tag>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    @apply text-3xl font-bold;
  }
</style>