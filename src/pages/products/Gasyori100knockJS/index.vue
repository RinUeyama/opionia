<template lang="pug">
  v-container
    home-button.mt-4
    v-row.mt-4.pa-4(justify="center")
      article
        h1 画像処理100本ノック JavaScript
        p yoyoyo_ 様の画像処理100本ノックを JavaScript ( TypeScript / Tensorflow.js ) で 1日1問のペースで解き進めています．
    v-row.mt-4.pa-4(justify="center")
      v-col(cols="2")
        v-row(justify="center")
          v-btn.mx-4(
            :disabled="currentId <= 1"
            text
            fab
            @click="currentId--; movePage()"
          ) <<
      v-col(cols="6" sm="4" md="3" text="center")
        v-row(justify="center")
          h3.mx-4.pt-4 {{ currentId }}. {{ answerTitles[currentId - 1] }}
      v-col(cols="2")
        v-row(justify="center")
          v-btn.mx-4(
            :disabled="currentId >= 9"
            text
            fab
            @click="currentId++; movePage()"
          ) >>
    v-row.pa-4(justify="center")
      v-col(cols="12" md="6" lg="5" xl="4")
        v-row(justify="center")
          canvas#canvas_origin
      v-col(cols="12" md="6" lg="5" xl="4")
        v-row(justify="center")
          canvas#canvas_answer
    v-row.my-4.pa-4(justify="center")
      SrcCode(:id="currentId")
    v-row.mb-4.pa-4(justify="center")
      v-btn(
        to="/"
        outlined
        large
      ) ホーム
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { drawCanvas, answerFunction } from '@/pages/products/Gasyori100knockJS/answers/'
import HomeButton from '@/components/Atoms/HomeButton.vue'
import SrcCode from '@/pages/products/Gasyori100knockJS/answers/codes/SrcCode.vue'

@Component({
  components: {
    HomeButton,
    SrcCode
  }
})
export default class Gasyori100knockJS extends Vue {
  answerTitles: Array<string> = [
    /** 1 */ 'RGBtoBGR',
    /** 2 */ 'グレースケール',
    /** 3 */ '二値化',
    /** 4 */ '大津の二値化',
    /** 5 */ 'HSV変換',
    /** 6 */ '減色処理',
    /** 7 */ '平均プーリング',
    /** 8 */ 'Maxプーリング',
    /** 9 */ 'ガウシアンフィルタ'
  ];

  @Prop({ type: Number, default: 1, required: true })
  id: number | undefined

  currentId: number = this.id ? this.id : 1
  showCode: boolean = false

  movePage () {
    this.$router.push(`/gasyori100knockJS/${this.currentId}`)
    this.drawCanvasAnswer(this.currentId)
  }

  drawCanvasAnswer (id: number) {
    const image = new Image()
    image.src = require('@/assets/images/TheAngelus.png')
    answerFunction(id, 'canvas_answer', image)
  }

  mounted () {
    const image = new Image()
    image.src = require('@/assets/images/TheAngelus.png')
    drawCanvas('canvas_origin', image)
    this.drawCanvasAnswer(this.currentId)
  }
}
</script>
