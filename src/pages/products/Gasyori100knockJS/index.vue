<template lang="pug">
  v-container
    article
      h1 画像処理100本ノック JavaScript
      p XX様の画像処理100本ノックをJavaScript(TypeScript)で解いたものです．
    h2 {{ currentAnswerID }}: {{ answerTitles[currentAnswerID - 1] }}
    v-layout(row wrap)
      v-flex(xs12 sm6)
        canvas#canvas_origin(
          width="240"
          height="240"
        )
      v-flex(xs12 sm6)
        canvas#canvas_answer(
          width="240"
          height="240"
        )
    v-layout
      v-btn(@click="drawCanvasAnswer(currentAnswerID)") Click!
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { drawCanvas, answerFunction } from '@/pages/products/Gasyori100knockJS/answers/'

@Component
export default class Gasyori100knockJS extends Vue {
  currentAnswerID: number = 1
  answerTitles: Array<string> = [
    /** 1 **/ 'RGBtoBGR'
  ];

  drawCanvasAnswer (id: number) {
    const image = new Image()
    image.src = require('@/assets/logo.png')
    answerFunction(id, 'canvas_answer', image)
  }

  mounted () {
    const image = new Image()
    image.src = require('@/assets/logo.png')
    drawCanvas('canvas_origin', image)
  }
}
</script>
