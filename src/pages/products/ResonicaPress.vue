<template lang="pug">
  v-container
    home-button.mt-4
    v-row.mt-4(justify="center")
      h1 ResonicaPress
    v-row.mt-4.pa-4(justify="center")
      v-img(
        src="@/assets/thumbnail/ResonicaPress.png"
        max-width="420"
      )
    v-row.mt-4.pa-4(justify="center")
      article
        | Vuepress のアルファ版がリリースされたときに飛びついて作成した Wiki風アプリ．
        | 機能と使い方を確かめたあとは，すっかり満足してしまい公開を取りやめています．
    v-row.mt-4.pa-4(justify="center")
      v-btn(
        outlined
        x-large
        disabled
      ) 非公開
    v-row.mb-4.pa-4(justify="center")
      v-btn(
        to="/"
        outlined
        large
      ) ホーム
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeButton from '@/components/Atoms/HomeButton.vue'

@Component({
  components: {
    HomeButton
  }
})
export default class ResonicaPress extends Vue {}
</script>
