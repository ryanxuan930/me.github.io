<script lang="ts" setup>
  import { ref } from 'vue';
  import ProjectItem from '@/components/ProjectItem.vue';

  const projects = ref([
    {
      title: 'SportEvent Pro 5',
      discription: 'This system is the result of many years of research and testing, culminating in a comprehensive sports event management solution, especially for athletics, swimming, and marathon events.',
      tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'Laravel', 'Docker'],
      links: [
        {
          title: 'Deployed in University',
          url: 'https://athletics.nsysu.dev',
        },
        {
          title: 'Deployed in High School',
          url: 'https://sports.hs.ntnu.edu.tw',
        },
        {
          title: 'GitHub Repository',
          url: 'https://github.com/ryanxuan930/sep5',
        },
      ],
      images: ['../../public/projects/sep1.png', '../../public/projects/sep2.png', '../../public/projects/sep3.png', '../../public/projects/sep4.png', '../../public/projects/sep5.png'],
      cover: '../../public/projects/sep1.png',
      status: 1,
      visibility: true,
      section: 1,
    },
    {
      title: 'NSYSU Interneational Affairs Information Management System',
      discription: 'This system serves as an internal tool for the Office of International Affairs at National Sun Yat-sen University, designed to manage partner university agreements, foreign student data, and exchange student applications, among other operational tasks.',
      tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel'],
      links: [
        {
          title: 'Link',
          url: 'https://partners.oia.nsysu.edu.tw/display',
        },
      ],
      images: [],
      cover: '../../public/projects/nims.png',
      status: 1,
      visibility: true,
      section: 1,
    },
    {
      title: 'DARTS',
      discription:
        'This system is a traffic information platform for internal use at National Sun Yat-sen University. It offers information such as estimated crowd conditions, parking status, recommendations for bus scheduling, and real-time Youbike station statuses, serving as a support platform for traffic management.',
      tags: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
      links: [],
      images: [],
      cover: '../../public/projects/darts.png',
      status: 2,
      visibility: false,
      section: 1,
    },
    {
      title: 'Monkey ID',
      discription:
        'Monkey ID was developed as an identity verification and single sign-on platform for college and university students, in conjunction with the SportEvent Pro system. It was also designed to be expandable for integration with other services. Due to changes in related projects, its development has now been discontinued.',
      tags: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Laravel'],
      links: [
        {
          title: 'GitHub Repository',
          url: 'https://github.com/ryanxuan930/monkey-id',
        },
      ],
      images: [],
      cover: '../../public/projects/monkeyid.png',
      status: 0,
      visibility: true,
      section: 1,
    },
    {
      title: 'NSYSUGO E-commerce Platform',
      discription:
        'This platform is the internal shopping website of National Sun Yat-sen University and serves as the core system for the NSYSUGO. It includes features such as shopping, logistics management, and member loyalty points. However, due to company restructuring, this system is no longer maintained.',
      tags: ['Vue 3', 'JavaScript', 'Laravel'],
      links: [],
      images: [],
      cover: '../../public/projects/nsysugo.png',
      status: 0,
      visibility: false,
      section: 1,
    },
    {
      title: 'Fully Automated Timing System',
      discription:
        'The current Fully Automated Timing System (FATS) are mostly imported from abroad and are expensive. However, medium and small-scale competitions may not necessarily require such high-precision timing systems. Therefore, I have developed my own FATS, constructing a system with similar functionalities to imported products at less than one-tenth of the cost. It has already been put to practical use in several events.',
      tags: ['Arduino', 'Python', 'C'],
      links: [],
      images: [],
      cover: '../../public/projects/fat.png',
      status: 1,
      visibility: false,
      section: 2,
    },
  ]);
</script>

<template>
  <div class="flex p-6">
    <div class="m-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col gap-6">
      <div class="section-title border-b-4">Websites</div>
      <ProjectItem :inputItem="projects" :filterSection="1" />
      <div class="section-title border-b-4">Others</div>
      <ProjectItem :inputItem="projects" :filterSection="2" />
    </div>
  </div>
</template>
