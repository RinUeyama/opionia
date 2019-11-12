import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    dark: false,
    themes: {
      dark: {
        primary: colors.red.darken4,
        secondary: colors.red.lighten5,
        accent: colors.red.accent4
      }
    }
  },
  icons: {
    iconfont: 'mdi'
  }
})
