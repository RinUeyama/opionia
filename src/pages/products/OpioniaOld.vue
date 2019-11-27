<template lang="pug">
  v-container
    home-button.mt-4
    v-row.mt-4(justify="center")
      h1 OPIONIA (OLD)
    v-row.mt-4.pa-4(justify="center")
      v-img(
        src="@/assets/thumbnail/OPIONIA_old.png"
        max-width="420"
      )
    v-row.mt-4.pa-4(justify="center")
      article
        p
        | かつてブログとして運用していた頃の名残です．
        | ブログというか情報発信は Qiita, Note に任せることにしたため，
        | このドメインのサイトはポートフォリオとして扱うことにしました．
    v-row.mt-4.pa-4(justify="center")
      v-btn(
        outlined
        indigo
        x-large
        disabled
      ) 公開終了
    v-row.mb-4.pa-4(justify="center")
      v-btn(
        outlined
        large
        to="/"
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
export default class CoCCharandom extends Vue {}
</script>
