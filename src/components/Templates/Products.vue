<template lang="pug">
  #products
    v-layout(row wrap)
      v-flex(xs12 sm6 md4 v-for="product in products" :key="product.name")
        v-hover(
          v-slot:default="{ hover }"
        )
          v-card.ma-4.pa-4(
            flat
            hover
          )
            v-img(
              :src="product.thumbnail"
              lazy-src="@/assets/logo.png"
              min-height="300"
              max-height="300"
            )
              v-fade-transition
                div(
                  v-if="hover"
                  class="d-flex transition-ease-in-ease-out filter"
                  style="height: 100%"
                )
                  p.pa-4(
                    v-if="hover"
                    :class="{ 'white--text': product.dark }"
                  ) {{ product.description }}
            v-card-text.pb-0 {{ product.name }}
</template>

<style lang="stylus" scoped>
.filter
  backdrop-filter blur(10px)
  align-items center
  justify-content center
</style>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Products extends Vue {
  products: Array<object> = [
    {
      name: '画像処理100本ノック JavaScript',
      thumbnail: require('@/assets/thumbnail/Storivia.png'),
      description: '画像処理100本ノックという問題集をTypeScriptで解き進めています．'
    },
    {
      name: 'CoC きゃらんだむ',
      thumbnail: require('@/assets/thumbnail/CoC_charandom.png'),
      description: 'クトゥルフ神話TRPGというアナログゲームのキャラクターを自動で生成するアプリです．',
      dark: true
    },
    {
      name: 'OPIONIA (old)',
      thumbnail: require('@/assets/thumbnail/OPIONIA_old.png'),
      description: 'このドメインはかつてブログとして使用していました．'
    },
    {
      name: 'ResonicaPress',
      thumbnail: require('@/assets/thumbnail/ResonicaPress.png'),
      description: 'アナログゲームのデータを管理するWikiのようなアプリです．'
    },
    {
      name: 'Storivia',
      thumbnail: require('@/assets/thumbnail/Storivia.png'),
      description: 'プチ卒論で作成したアプリで，小説などのプロット作成を支援します．'
    }
  ]
}
</script>
