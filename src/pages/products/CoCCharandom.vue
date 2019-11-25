<template lang="pug">
  v-container
    home-button.mt-4
    v-row.mt-4(justify="center")
      h1 CoCきゃらんだむ
    v-row.mt-4.pa-4(justify="center")
      v-img(
        src="@/assets/thumbnail/CoC_charandom.png"
        max-width="420"
      )
    v-row.mt-4.pa-4(justify="center")
      article
        p
        | よく言えば大胆な色使い，悪く言えば目に痛いキャラクター作成アプリ．
        | 似たようなアプリは世に溢れていたので，キャラクターを自動生成するという点と，
        | 技能を押せば Slack に判定結果が出力されるという点で差別化していました．
        p
        | もともと友人と遊ぶために作ったこともあり異様に説明不足．
        | またCoCが流行れば，誰にもでも使ってもらえるようなアップデートをするつもりです．
    v-row.mt-4.pa-4(justify="center")
      v-btn.indigo--text(
        href="https://wizardly-borg-cd29f1.netlify.com"
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
export default class CoCCharandom extends Vue {}
</script>
