import './assets/main.css';
import 'primeicons/primeicons.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { createI18n } from 'vue-i18n';
import PrimeVue from 'primevue/config';

import App from './App.vue';
import router from './router';

const i18n = createI18n({
  locale: 'en',
  messages: {
    en: {
      navbar: {
        home: 'HOME',
        experience: 'EXPERIENCE',
        works: 'WORKS',
      },
    },
    'zh-TW': {
      navbar: {
        home: '首頁',
        experience: '經歷',
        works: '作品',
      },
    },
  },
});

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(i18n);
app.use(PrimeVue);

app.mount('#app');
