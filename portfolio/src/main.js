import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')

createApp(App).use(store).use(router).mount('#app')
