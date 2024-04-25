<script lang="ts" setup>
  import Card from 'primevue/card';
  import Tag from 'primevue/tag';
  import Chip from 'primevue/chip';
  import Button from 'primevue/button';
  import { useI18n } from 'vue-i18n';

  const { t, locale } = useI18n();

  const isBuild = (import.meta as any).env.PROD;
  const props = defineProps<{
    inputItem: {
      title: {
        'zh-TW': string;
        en: string;
      };
      discription: {
        'zh-TW': string;
        en: string;
      };
      tags: string[];
      links: { title: string; url: string }[];
      cover: string;
      status: number;
      visibility: boolean;
      section: number;
    }[];
    filterSection: number;
  }>();
  function imgRouteHandler(route: string) {
    // if isBuild, remove /public in the route
    if (isBuild) {
      return new URL(route, import.meta.url).href.replace('/public', '');
    }
    return new URL(route, import.meta.url).href;
  }
  function openLink(link: { title: string; url: string }) {
    window.open(link.url, '_blank');
  }
</script>

<template>
  <div v-for="(item, index) in props.inputItem.filter((el) => el.section === props.filterSection)" :key="index" class="flex items-center gap-4 flex-col md:flex-row" :class="{ 'md:flex-row-reverse md:text-right': index % 2 === 1 }">
    <Card class="md:basis-1/2 shadow">
      <template #content>
        <img class="p-0 m-0" :src="imgRouteHandler(item.cover)" alt="" />
      </template>
    </Card>
    <div class="w-full md:w-auto p-4 md:basis-1/2 flex flex-col gap-4">
      <div class="title">
        {{ item.title[locale as 'zh-TW'|'en'] }}
        <span class="relative -top-1">
          <Tag v-if="item.status === 0" class="p-1 text-xs bg-red-500">{{ t('deprecated') }}</Tag>
          <Tag v-else-if="item.status === 1" class="p-1 text-xs bg-green-500">{{ t('active') }}</Tag>
          <Tag v-else class="p-1 text-xs bg-yellow-500">{{ t('maintaining') }}</Tag>
        </span>
      </div>
      <div class="flex gap-3 flex-wrap" :class="{ 'md:flex-row-reverse ': index % 2 === 1 }">
        <Chip v-for="(tag, index) in item.tags" :key="index" class="text-sm">{{ tag }}</Chip>
      </div>
      <div class="text-slate-300">{{ item.discription[locale as 'zh-TW'|'en'] }}</div>
      <div v-if="item.visibility" class="flex gap-3 pt-4 flex-wrap" :class="{ 'md:flex-row-reverse': index % 2 === 1 }">
        <Button v-for="(link, index) in item.links" :key="index" class="button" :label="link.title" @click="openLink(link)" icon="pi pi-external-link" />
      </div>
      <div v-else>
        <Button class="button" label="Not open to the public" disabled />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .title {
    @apply text-3xl font-bold relative;
  }
  .button {
    @apply text-sm font-medium border-2 py-1 px-4 border-slate-300 text-slate-300 hover:bg-slate-300 hover:text-black duration-150;
  }
</style>

<i18n>
  {
    "en": {
      "maintaining": "Maintaining",
      "active": "Active",
      "deprecated": "Deprecated"
    },
    "zh-TW": {
      "maintaining": "維護中",
      "active": "使用中",
      "deprecated": "已停止維護"
    }
  }
  </i18n
