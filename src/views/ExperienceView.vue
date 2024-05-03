<script lang="ts" setup>
import { ref } from 'vue';
import type { Ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t, locale } = useI18n();

type Experience = {
  title: {
    'zh-TW': string;
    en: string;
  };
  company: {
    'zh-TW': string;
    en: string;
  };
  duration: string;
};

const experienceList:Ref<Experience[]> = ref([
  {
    title: {
      'zh-TW': '前端工程師',
      en: 'Frontend Developer',
    },
    company: {
      'zh-TW': 'LiquidLogic Tech',
      en: 'LiquidLogic Tech',
    },
    duration: 'May 2024 - Current',
  },
  {
    title: {
      'zh-TW': '創辦人',
      en: 'Founder',
    },
    company: {
      'zh-TW': 'TechNSport',
      en: 'TechNSport',
    },
    duration: 'April 2024 - Current',
  },
  {
    title: {
      'zh-TW': '資深全端工程師',
      en: 'Senior Full-stack Engineer',
    },
    company: {
      'zh-TW': '誠諾工程技術股份有限公司',
      en: 'Cheng-Nuo Engineering Technology Company',
    },
    duration: 'October 2023 - May 2024',
  },
  {
    title: {
      'zh-TW': '全端工程師 (兼職)',
      en: 'Full-stack Developer (Part-time)',
    },
    company: {
      'zh-TW': '國立中山大學運動發展組',
      en: 'Sport Development Division, National Sun Yat-sen University',
    },
    duration: 'June 2022 - September 2023',
  },
  {
    title: {
      'zh-TW': '全端工程師 (兼職)',
      en: 'Full-stack Developer (Part-time)',
    },
    company: {
      'zh-TW': '國立中山大學國際事務處',
      en: 'Office of International Affairs, National Sun Yat-sen University',
    },
    duration: 'February 2022 - September 2023',
  },
  {
    title: {
      'zh-TW': '全端工程師 (兼職)',
      en: 'Full-stack Developer (Part-time)',
    },
    company: {
      'zh-TW': '國立中山大學歐盟中心',
      en: 'European Centre, National Sun Yat-sen University',
    },
    duration: 'September 2022 - September 2023',
  },
  {
    title: {
      'zh-TW': '前端開發人員 (約聘)',
      en: 'Frontend Developer (Contract)',
    },
    company: {
      'zh-TW': '國立臺灣師範大學體育室',
      en: 'Athletic Department, National Taiwan Normal University',
    },
    duration: 'August 2022 - January 2023',
  },
  {
    title: {
      'zh-TW': '資訊助理',
      en: 'Information Assistant',
    },
    company: {
      'zh-TW': '國立中山大學校務研究辦公室',
      en: 'Office of Institutional Research, National Sun Yat-sen University',
    },
    duration: 'August 2021 - September 2023',
  },
  {
    title: {
      'zh-TW': '技術長',
      en: 'CTO',
    },
    company: {
      'zh-TW': '中山GO電商新創',
      en: 'NSYSU GO E-commerce',
    },
    duration: 'August 2021 - July 2022',
  },
  {
    title: {
      'zh-TW': '全端開發者',
      en: 'Full-stack Developer',
    },
    company: {
      'zh-TW': '自行接案',
      en: 'Freelance',
    },
    duration: 'December 2019 - July 2021',
  },
]);

type Speeches = {
  title: {
    'zh-TW': string;
    en: string;
  };
  location: {
    'zh-TW': string;
    en: string;
  };
  date: string[];
};

const speechesList: Ref<Speeches[]> = ref([
  {
    title: {
      'zh-TW': '講者',
      en: 'Speaker',
    },
    location: {
      'zh-TW': '國立成功大學工程科學系網頁開發工作坊',
      en: 'Web Development Workshop of Department of Engineering Science, National Cheng Kung University',
    },
    date: ['April 2024', 'October 2022', 'November 2021']
  },
  {
    title: {
      'zh-TW': '講者',
      en: 'Speaker',
    },
    location: {
      'zh-TW': 'NSYSU GDSC 網頁開發工作坊',
      en: 'NSYSU Google Developer Student Club Web Development Workshop',
    },
    date: ['December 2022']
  },
  {
    title: {
      'zh-TW': '講者',
      en: 'Speaker',
    },
    location: {
      'zh-TW': 'DevFest Kaohsiung & Tainan 2022, Google 開發者社群',
      en: 'DevFest Kaohsiung & Tainan 2022, Google Developer Groups Kaohsiung',
    },
    date: ['November 2022']
  },
  {
    title: {
      'zh-TW': '評審',
      en: 'Judge',
    },
    location: {
      'zh-TW': 'NSYSU GDSC 期末報告',
      en: 'NSYSU Google Developer Student Club Final Presentation, National Sun Yat-sen University',
    },
    date: ['June 2022']
  }
]);

type Volunteering = {
  title: {
    'zh-TW': string;
    en: string;
  };
  organization: {
    'zh-TW': string;
    en: string;
  };
  duration: string;
};

const volunteeringList: Ref<Volunteering[]> = ref([
  {
    title: {
      'zh-TW': '學生議員',
      en: 'Student Councilor',
    },
    organization: {
      'zh-TW': '國立中山大學學生議會',
      en: 'Student Council, National Sun Yat-sen University Student Association',
    },
    duration: 'June 2023 - Current',
  },
  {
    title: {
      'zh-TW': '部長',
      en: 'Vice President',
    },
    organization: {
      'zh-TW': '國立中山大學學生會社團部',
      en: 'Club Affairs Department, National Sun Yat-sen University Student Association',
    },
    duration: 'January 2023 - Current',
  },
  {
    title: {
      'zh-TW': '隊長',
      en: 'Captain',
    },
    organization: {
      'zh-TW': '國立中山大學田徑隊',
      en: 'National Sun Yat-sen University Athletics Team',
    },
    duration: 'September 2022 - Current',
  },
  {
    title: {
      'zh-TW': '副隊長',
      en: 'Co-Captain',
    },
    organization: {
      'zh-TW': '國立中山大學田徑隊',
      en: 'National Sun Yat-sen University Athletics Team',
    },
    duration: 'September 2021 - August 2022',
  },
]);

</script>

<template>
  <div class="flex p-6">
    <div class="m-auto md:w-[768px] flex flex-col gap-4">
      <div>
        <div class="section-title mb-2">{{ t('work-experience') }}</div>
        <ul>
          <li v-for="experience in experienceList" :key="experience.title.en">
            <div class="font-bold">{{ experience.title[locale as 'zh-TW'|'en']}}</div>
            <div class="text-slate-300">{{ experience.company[locale as 'zh-TW'|'en'] }}</div>
            <div class="text-slate-500">{{ experience.duration }}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="section-title mb-2">{{ t('speeches') }}</div>
        <ul>
          <li v-for="speech in speechesList" :key="speech.title.en">
            <div class="font-bold">{{ speech.title[locale as 'zh-TW'|'en'] }}</div>
            <div class="text-slate-300">{{ speech.location[locale as 'zh-TW'|'en'] }}</div>
            <div v-for="date in speech.date" :key="date" class="text-slate-500">{{ date }}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="section-title mb-2">{{ t('volunteering') }}</div>
        <ul>
          <li v-for="volunteering in volunteeringList" :key="volunteering.title.en">
            <div class="font-bold">{{ volunteering.title[locale as 'zh-TW'|'en'] }}</div>
            <div class="text-slate-300">{{ volunteering.organization[locale as 'zh-TW'|'en'] }}</div>
            <div class="text-slate-500">{{ volunteering.duration }}</div>
          </li>
        </ul>
      </div>
      <div>
        <div class="section-title mb-2">{{ t('education-background') }}</div>
        <ul v-if="locale == 'en'">
          <li>
            <div class="font-bold">National Sun Yat-sen University</div>
            <div class="text-slate-300">Bachelor's Degree</div>
            <div class="text-slate-500">Program in Interdisciplinary Studies</div>
            <div class="text-slate-500 text-base">Fields of Specialization: Planning Science and Data Analysis Techniques</div>
            <div class="text-slate-500">September 2020 - Est. June 2025</div>
          </li>
          <li>
            <div class="font-bold">The Affiliated Senior High School of NTNU</div>
            <div class="text-slate-300">High School</div>
            <div class="text-slate-500">September 2017 - June 2020</div>
          </li>
        </ul>
        <ul v-else>
          <li>
            <div class="font-bold">國立中山大學</div>
            <div class="text-slate-300">學士學位</div>
            <div class="text-slate-500">人文暨科技跨領域學士學位學程</div>
            <div class="text-slate-500 text-base">專長領域：規劃科學與資料分析技術</div>
            <div class="text-slate-500">September 2020 - Est. June 2025</div>
          </li>
          <li>
            <div class="font-bold">國立臺灣師範大學附屬高級中學</div>
            <div class="text-slate-300">高中</div>
            <div class="text-slate-500">September 2017 - June 2020</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<i18n>
  {
    "en": {
      "work-experience": "Work Experience",
      "speeches": "Speeches",
      "volunteering": "Volunteering",
      "education-background": "Education Background"
    },
    "zh-TW": {
      "work-experience": "工作經歷",
      "speeches": "演講經歷",
      "volunteering": "志工經歷",
      "education-background": "學歷背景"
    }
  }
  </i18n>
