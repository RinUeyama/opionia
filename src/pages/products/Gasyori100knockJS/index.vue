<template lang="pug">
  v-container
    article
      h1 画像処理100本ノック JavaScript
      p XX様の画像処理100本ノックをJavaScript(TypeScript)で解いたものです．
    h2 {{ answer.id }}: {{ answer.title }}
    v-layout(row wrap)
      v-flex(xs12 sm6)
        v-image#image_origin(
          src="@/assets/logo.png"
          width="300"
          height="300"
        )
      v-flex(xs12 sm6)
        canvas#canvas_answer(
          width="300"
          height="300"
          ref="refCanvasAfter"
        )
    v-layout
      v-btn(@click="drawCanvasAnswer(answer.id)")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { getContext2DfromHTMLCanvasID, answerFunction } from '@/pages/products/Gasyori100knockJS/answers/'
import { mount } from '@vue/test-utils'

@Component
export default class Gasyori100knockJS extends Vue {
  drawCanvasAnswer (id: number) {
    const image: any = document.getElementById('image_origin')
    let ctx = getContext2DfromHTMLCanvasID('canvas_answer')

    answerFunction(id, ctx, image)
  }
}
</script>
