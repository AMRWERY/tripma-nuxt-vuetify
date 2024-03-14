import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import * as labsComponents from "vuetify/labs/components";
import { createI18n } from "vue-i18n";
import { en, ar } from "vuetify/locale";
// import { VuetifyDateAdapter } from "vuetify/date/adapters/vuetify";
import { VuetifyDateAdapter } from "../node_modules/vuetify/lib/composables/date/adapters/vuetify.mjs";

const messages = {
  en: {
    $vuetify: {
      ...en,
      dataIterator: {
        rowsPerPageText: "Items per page:",
        pageText: "{0}-{1} of {2}",
      },
    },
  },
  sv: {
    $vuetify: {
      ...ar,
      dataIterator: {
        rowsPerPageText: "مواد لكل صفحة:",
        pageText: "{0}-{1} ل {2}",
      },
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ar",
  fallbackLocale: "en",
  messages,
});

export default defineNuxtPlugin((app) => {
  const vuetify = createVuetify({
    ssr: true,
    components: {
      ...components,
      ...labsComponents,
    },
    directives,
    date: {
      adapter: VuetifyDateAdapter,
    },
  });
  app.vueApp.use(vuetify);
});
