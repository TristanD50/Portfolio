import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    sets: {
      fa,
    },
  },
  theme: {
    options: {
      customProperties: true,
    },
    themes: {
      dark: {
        backgound: '#292930',
      },
    },
    dark: true,
  }
})
