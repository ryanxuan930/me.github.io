<script setup lang="ts">
  import { ref } from 'vue';
  import { useI18n } from 'vue-i18n';

  const hideNav = ref(true);
  const { t } = useI18n();
</script>

<template>
  <div class="flex flex-col md:flex-row py-3 text-slate-300 text-xl gap-2 md:gap-8 px-12 font-semibold bg-gradient-to-r from-black bg-opacity-90 z-10 absolute w-full">
    <div class="flex flex-grow items-center">
      <div class="flex-grow">RYAN CHANG</div>
      <div class="text-3xl block md:hidden">
        <i class="pi pi-bars" @click="hideNav = !hideNav"></i>
      </div>
    </div>
    <TransitionGroup name="list">
      <router-link :class="{ hidden: hideNav, 'md:block duration-150': true }" to="/">{{ t('navbar.home') }}</router-link>
      <router-link :class="{ hidden: hideNav, 'md:block duration-150': true }" to="/expirence">{{ t('navbar.experience') }}</router-link>
      <router-link :class="{ hidden: hideNav, 'md:block duration-150': true }" to="/works">{{ t('navbar.works') }}</router-link>
    </TransitionGroup>
  </div>
</template>

<style lang="scss" scoped>
  a {
    @apply text-slate-400 duration-200 hover:text-slate-200 py-1;
  }
  .router-link-exact-active {
    @apply text-slate-300;
  }
</style>
