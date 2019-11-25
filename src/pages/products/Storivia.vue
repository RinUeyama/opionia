<template lang="pug">
  v-container
    home-button.mt-4
    v-row.mt-4(justify="center")
      h1 Storivia
    v-row.mt-4.pa-4(justify="center")
      v-img(
        src="@/assets/thumbnail/Storivia.png"
        max-width="420"
      )
    v-row.mt-4.pa-4(justify="center")
      article
        | プチ卒論で作成したプロット作成支援アプリ．プロットを「行動」「キャラクター」「世界観」の3点から捉えて組み進めていく形式．
        | 最初に作成したWebアプリであるためどう操作していいか分かりにくいですが，これを通してVue, Vuexの知識と納期への恐怖心を得ることができました．
    v-row.my-4.pa-4(justify="center")
      v-btn.indigo--text(
        href="https://storivia.firebaseapp.com"
        outlined
        x-large
      ) アプリページ
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
export default class Storivia extends Vue {}
</script>
