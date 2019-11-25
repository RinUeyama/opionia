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
            :disabled="product.close"
            @click="route(product.path)"
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
      thumbnail: require('@/assets/thumbnail/Gasyori100knockJS.png'),
      path: '/Gasyori100knockJS/',
      description: '画像処理をTypeScriptで実装．'
    },
    {
      name: 'CoC きゃらんだむ',
      thumbnail: require('@/assets/thumbnail/CoC_charandom.png'),
      path: '/CoC_charandom',
      description: 'クトゥルフ神話TRPGのキャラクターを自動生成',
      dark: true
    },
    {
      name: 'OPIONIA (old)',
      thumbnail: require('@/assets/thumbnail/OPIONIA_old.png'),
      path: '/opionia_old',
      description: 'このドメインはかつてブログとして使用していました．'
    },
    {
      name: 'ResonicaPress',
      thumbnail: require('@/assets/thumbnail/ResonicaPress.png'),
      path: '/resonica_press',
      description: 'アナログゲームのデータ管理'
    },
    {
      name: 'Storivia',
      thumbnail: require('@/assets/thumbnail/Storivia.png'),
      path: '/Storivia',
      description: 'プロット作成支援'
    }
  ]

  route (path: string) {
    this.$router.push({ path: path })
  }
}
</script>
