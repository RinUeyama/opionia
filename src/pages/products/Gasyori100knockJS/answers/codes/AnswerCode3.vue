<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
      /**
       * 二値化
       */
      import grayscale from './answer2'

      export default function binarize (
        srcData: Uint8ClampedArray,
        dstData: Uint8ClampedArray
      ): void {
        grayscale(srcData, dstData)
        const threshhold = 128

        for (let i = 0; i &lt; srcData.length; i++) {
          /** RGBaからRGBを抜き出して二値化を施します */
          if (i % 4 === 3) {
            dstData[i] = srcData[i]
          } else {
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
export default class AnswerCode3 extends Vue {}
</script>
