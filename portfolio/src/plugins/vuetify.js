import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

import { createVuetify } from 'vuetify'

export default createVuetify({
  icons: {
    iconfont: 'fa' || 'md' || 'mdi'
  },
  theme: {
    themes: {
      dark: {
        backgound: '#111111'
      }
    }
  }
})
