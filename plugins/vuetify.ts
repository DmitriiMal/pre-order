import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    components,
    directives,
    defaults: {
      VBtn: {
        elevation: '0',
        ripple: 'false', // ??
      },
    },
    theme: {
      defaultTheme: 'light',
    },
  });
  nuxtApp.vueApp.use(vuetify);
});
