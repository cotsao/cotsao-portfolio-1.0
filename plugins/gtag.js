import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default ({ app }) => {
    Vue.use(VueGtag, {
      config: { id: 'G-5S2HKBQK7X' },
      appName: 'cotsao_portfolio',
    }, app.router);
  }