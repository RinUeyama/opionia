<template lang="pug">
  v-container
    v-row.mt-4.pa-4(justify="center")
      article
        h1 画像処理100本ノック JavaScript
        p yoyoyo_様の画像処理100本ノックをJavaScript(TypeScript)で解いたものです．
    v-row.mt-4.pa-4(justify="center")
      h2 {{ currentAnswerId }}: {{ answerTitles[currentAnswerId - 1] }}
    v-row.mt-4.pa-4(justify="center")
      v-col(cols="12" md="6" lg="5" xl="4")
        v-row(justify="center")
          canvas#canvas_origin
      v-col(cols="12" md="6" lg="5" xl="4")
        v-row(justify="center")
          canvas#canvas_answer
    v-row.mt-4.pa-4(justify="center")
      v-btn(@click="drawCanvasAnswer(currentAnswerId)") Click!
    v-row.mt-4.pa-4(justify="center")
      SrcCode(:id="currentAnswerId")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { drawCanvas, answerFunction } from '@/pages/products/Gasyori100knockJS/answers/'
import SrcCode from '@/pages/products/Gasyori100knockJS/answers/codes/SrcCode.vue'

@Component({
  components: {
    SrcCode
  }
})
export default class Gasyori100knockJS extends Vue {
  answerTitles: Array<string> = [
    /** 1 **/ 'RGBtoBGR'
  ];

  currentAnswerId: number = 1

  drawCanvasAnswer (id: number) {
    const image = new Image()
    image.src = require('@/assets/images/TheAngelus.png')
    answerFunction(id, 'canvas_answer', image)
  }

  mounted () {
    const image = new Image()
    image.src = require('@/assets/images/TheAngelus.png')
    drawCanvas('canvas_origin', image)
  }
}
</script>
