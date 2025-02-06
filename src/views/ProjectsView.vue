<script lang="ts" setup>
  import { ref } from 'vue';
  import ProjectItem from '@/components/ProjectItem.vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();

  const projects = ref([
    {
      title: {
        'zh-TW': 'AthletIX 6',
        en: 'AthletIX 6',
      },
      discription: {
        'zh-TW': 'AthletIX (Athlete Information) 6 系統是 SportEvent Pro 5 的後繼版本，將深度整合自主技術研發的電動計時設備，並提升系統效能與降低營運成本，提供更好的競賽資訊系統與使用者體驗。',
        en: 'AthletIX 6 is the successor to SportEvent Pro 5, integrating proprietary electronic timing equipment and enhancing system performance while reducing operational costs. It provides a better competition information system and user experience.',
      },
      tags: ['Nuxt', 'Next', 'TypeScript', 'Tailwind CSS', 'PrimeVue', 'PrimeReact', 'Laravel', 'Docker', 'GCP'],
      links: [
        {
          title: 'Link',
          url: 'https://athletix.technsport.co/registration/login/user',
        },
      ],
      images: [],
      cover: '../../public/projects/athletix.png',
      status: 1,
      visibility: true,
      section: 1,
    },
    {
      title: {
        'zh-TW': 'SportEvent Pro 5',
        en: 'SportEvent Pro 5',
      },
      discription: {
        'zh-TW': '本系統是一套運動賽事管理系統，特別為田徑、游泳、馬拉松等運動項目而設計。這套系統是多年研究與測試的結果，目前已被多個單位採用。',
        en: 'This system is the result of many years of research and testing, culminating in a comprehensive sports event management solution, especially for athletics, swimming, and marathon events.',
      },
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
      status: 2,
      visibility: true,
      section: 1,
    },
    {
      title: {
        'zh-TW': '國際處校際交流資料管理系統',
        en: 'National Sun Yat-sen University Partner Management System',
      },
      discription: {
        'zh-TW': '本系統是為國立中山大學國際處所開發的校際交流資料管理系統，提供國際處人員管理交換生資料、學生申請資料、教職員工資料管理等功能。',
        en: 'This system serves as an internal tool for the Office of International Affairs at National Sun Yat-sen University, designed to manage partner university agreements, foreign student data, and exchange student applications, among other operational tasks.',
      },
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
      title: {
        'zh-TW': 'DARTS',
        en: 'DARTS',
      },
      discription: {
        'zh-TW': '本系統是國立中山大學內部使用的交通資訊平台，提供估計的人潮狀況、停車位狀況、公車班次建議、Youbike 站點即時狀態等資訊，作為交通管理的輔助決策平台。',
        en: 'This system is a traffic information platform for internal use at National Sun Yat-sen University. It offers information such as estimated crowd conditions, parking status, recommendations for bus scheduling, and real-time Youbike station statuses, serving as a support platform for traffic management.',
      },
      tags: ['Vue 3', 'React', 'TypeScript', 'Tailwind CSS', 'Laravel'],
      links: [],
      images: [],
      cover: '../../public/projects/darts.png',
      status: 2,
      visibility: false,
      section: 1,
    },
    {
      title: {
        'zh-TW': 'Monkey ID',
        en: 'Monkey ID',
      },
      discription: {
        'zh-TW': 'Monkey ID 是一套為大專院校學生設計的身分驗證與單一登入平台，與 SportEvent Pro 系統搭配使用。同時也設計為可擴充整合其他服務。由於相關計畫變動，目前已停止開發。',
        en: 'Monkey ID was developed as an identity verification and single sign-on platform for college and university students, in conjunction with the SportEvent Pro system. It was also designed to be expandable for integration with other services. Due to changes in related projects, its development has now been discontinued.',
      },
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
      title: {
        'zh-TW': 'NSYSUGO 電子商務平台',
        en: 'NSYSUGO E-commerce Platform',
      },
      discription: {
        'zh-TW': 'NSYSUGO平台 是一個連結在校生和校友品牌的電商平台。平台同時也是本團隊內部訂單、物流、購物等功能的管理系統。由於相關計畫變動，目前已停止開發。',
        en: 'This platform is the internal shopping website of National Sun Yat-sen University and serves as the core system for the NSYSUGO. It includes features such as shopping, logistics management, and member loyalty points. However, due to company restructuring, this system is no longer maintained.',
      },
      tags: ['Vue 3', 'JavaScript', 'Laravel'],
      links: [],
      images: [],
      cover: '../../public/projects/nsysugo.png',
      status: 0,
      visibility: false,
      section: 1,
    },
    {
      title: {
        'zh-TW': '田徑/游泳電動計時系統',
        en: 'Track & Field / Swimming Timing System',

      },
      discription: {
        'zh-TW': '目前市面上的電動計時系統大多是進口，價格數百至數千萬。然而，中小型比賽未必需要這麼高級的計時系統。因此我以不到進口產品十分之一的成本，自行開發了一套電動計時系統。目前已經在多場比賽中實際應用。',
        en: 'The current Fully Automated Timing System (FATS) are mostly imported from abroad and are expensive. However, medium and small-scale competitions may not necessarily require such high-precision timing systems. Therefore, I have developed my own FATS, constructing a system with similar functionalities to imported products at less than one-tenth of the cost. It has already been put to practical use in several events.',
      },
      tags: ['Arduino', 'Python', 'C', 'Electron'],
      links: [],
      images: [],
      cover: '../../public/projects/fat.png',
      status: 1,
      visibility: false,
      section: 2,
    },
    {
      title: {
        'zh-TW': '跳遠影像測距系統',
        en: 'Video Distance Measurement (TechNSport Visual Ranging System)',

      },
      discription: {
        'zh-TW': '此系以自主研發之攝影裝置，搭配影像辨識技術與自行撰寫之判讀軟體，協助裁判快速判讀選手成績，加速賽事進行效率，並同時保存影像，若有爭議時可供仲裁使用。',
        en: 'This system uses a self-developed camera device, combined with image recognition technology and processing software, to assist referees in quickly reading results and saving images simultaneously. In the event of a dispute, the images can be used for arbitration. This system has been put to practical use in several events.',
      },
      tags: ['Arduino', 'Python', 'C', 'Electron', 'OpenCV', 'Node.js'],
      links: [],
      images: [],
      cover: '../../public/projects/vrs.png',
      status: 1,
      visibility: false,
      section: 2,
    },
  ]);
</script>

<template>
  <div class="flex p-6">
    <div class="m-auto w-full md:w-[768px] lg:w-[1024px] xl:w-[1280px] flex flex-col gap-6">
      <div class="section-title border-b-4">{{ t('websites') }}</div>
      <ProjectItem
        :inputItem="projects"
        :filterSection="1"
      />
      <div class="section-title border-b-4">{{ t('others') }}</div>
      <ProjectItem
        :inputItem="projects"
        :filterSection="2"
      />
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "websites": "Websites",
      "others": "Others"
    },
    "zh-TW": {
      "websites": "網站類",
      "others": "其他類"
    }
  }
  </i18n
