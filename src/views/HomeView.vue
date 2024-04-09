<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const { t } = useI18n();
</script>

<template>
  <div class="flex p-6">
    <div class="m-auto flex flex-col md:gap-6">
      <div class="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        <div class="h-72 w-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover relative">
          <div class="h-full w-full rounded-full absolute border-4 border-rose-500 -right-3 -bottom-3 z-10"></div>
          <div class="h-full w-full rounded-full absolute bg-rose-500 -right-3 -bottom-3"></div>
          <img class="rounded-full grayscale h-full shadow" src="@/assets/avatar.jpeg" alt="" />
        </div>
        <div class="font-bold text-5xl lg:text-6xl xl:text-7xl flex flex-col gap-4">
          <div>
            <div class="pb-2">{{ t('title.line1') }}</div>
            <div class="border-b-rose-500 border-b-4 pb-1">{{ t('title.line2') }}</div>
          </div>
          <div class="text-lg md:text-2xl font-medium text-slate-400">{{ t('description') }}</div>
          <div class="text-base md:text-xl font-medium text-slate-500 flex gap-2 items-center">
            <i class="pi pi-map-marker"></i>
            <div>{{ t('location') }}</div>
          </div>
          <div class="flex items-center gap-5 text-3xl text-slate-300">
            <a href="mailto:ryanphchang@gmail.com" target="_blank">
              <i class="icon pi pi-at"></i>
            </a>
            <a href="https://github.com/ryanxuan930" target="_blank">
              <i class="icon pi pi-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/ryan-po-hsuan-chang-055a0a253/" target="_blank">
              <i class="icon pi pi-linkedin"></i>
            </a>
            <a href="https://t.me/ryanxuan930" target="_blank">
              <i class="icon pi pi-telegram"></i>
            </a>
            <a href="https://www.instagram.com/ryan_qaqa/" target="_blank">
              <i class="icon pi pi-instagram"></i>
            </a>
          </div>
        </div>
        <div class="flex-grow"></div>
      </div>
      <div class="max-w-80 md:max-w-none flex flex-col gap-4">
        <div class="section-title">{{ t('about') }}</div>
        <div class="text-lg leading-6 max-w-[768px] lg:max-w-[1024px] flex flex-col gap-2">
          <p>I'm Ryan Po-Hsuan Chang, a full-stack developer from Kaohsiung, Taiwan.</p>
          <p>
            I specialize in creating websites and applications using <strong class="border-b-2 border-b-emerald-400">Vue</strong> + <strong class="border-b-2 border-b-sky-400">TypeScript</strong> and <strong class="border-b-2 border-red-500">Laravel</strong>, with additional experience in
            <strong class="border-b-2 border-b-blue-500">React</strong> and <strong class="border-b-2 border-b-yellow-400">Python</strong>.
          </p>
          <p>Passionate about pushing the boundaries of web development, I constantly seek new challenges to enhance my expertise.</p>
        </div>
        <div class="section-title">{{ t('skills') }}</div>
        <div class="text-lg leading-6 max-w-[768px] lg:max-w-[1024px] grid grid-cols-1 md:grid-cols-3 gap-5">
          <div>
            <div class="box-title border-b-4 border-b-emerald-400">
              <span>{{ t('frontend') }}</span>
            </div>
            <ul>
              <li>Vue 3</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>PrimeVue</li>
              <li>React</li>
              <li>SCSS</li>
            </ul>
          </div>
          <div>
            <div class="box-title border-b-4 border-b-red-500">
              <span>{{ t('backend') }}</span>
            </div>
            <ul>
              <li>Laravel</li>
              <li>PHP</li>
              <li>MySQL</li>
              <li>Apache</li>
              <li>Linux</li>
              <li>Docker</li>
            </ul>
          </div>
          <div>
            <div class="box-title border-b-4 border-b-yellow-400">
              <span>{{ t('others') }}</span>
            </div>
            <ul>
              <li>Python</li>
              <li>Selenium</li>
              <li>Arduino</li>
              <li>Git</li>
              <li>Illustrator</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .box-title {
    @apply text-2xl font-bold mb-2;
  }
  .tag-box {
    @apply -top-0.5 text-xs relative inline-block;
  }
  .icon {
    @apply text-2xl md:text-3xl lg:text-4xl;
  }
</style>

<i18n>
{
  "en": {
    "title": {
      "line1": "HI, I AM",
      "line2": "RYAN CHANG"
    },
    "description": "A versatile full-stack developer",
    "location": "Kaohsiung, Taiwan",
    "about": "About Me",
    "skills": "Skills",
    "frontend": "Frontend",
    "backend": "Backend",
    "others": "Others",
  },
  "zh-TW": {
    "title": {
      "line1": "嗨, 我是",
      "line2": "張栢瑄"
    },
    "description": "喜歡亂開技能樹的全端開發者",
    "location": "台灣高雄",
    "about": "關於我",
    "skills": "技能樹",
    "frontend": "前端",
    "backend": "後端",
    "others": "其他",
  }
}
</i18n>
