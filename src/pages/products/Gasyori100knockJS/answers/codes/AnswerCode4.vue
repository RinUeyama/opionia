<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
      /**
       * 大津の二値化（省略）
       */
      import grayscale from './answer2'

      export default function binarizeOtsu (
        srcData: Uint8ClampedArray,
        dstData: Uint8ClampedArray
      ): void {
        grayscale(srcData, dstData)
        /** 本来ならば，この閾値を自然な処理になるよう整えます */
        const threshhold = 128

        for (let i = 0; i &lt; srcData.length; i++) {
          /** RGBaからRGBを抜き出して二値化を施します */
          if (i % 4 !== 3) {
            dstData[i] > threshhold ? dstData[i] = 255 : dstData[i] = 0
          }
        }
      }
    </code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnswerCode4 extends Vue {}
</script>
