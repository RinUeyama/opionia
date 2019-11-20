<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
    /**
     * グレースケール
     */
    export default function grayscale (
      srcData: Uint8ClampedArray,
      dstData: Uint8ClampedArray
    ): void {
      for (let i = 0; i &lt; srcData.length; i += 4) {
        const grey =
          0.2126 * srcData[i + 0] +
          0.7152 * srcData[i + 1] +
          0.0722 * srcData[i + 2]

        dstData[i] =
          dstData[i + 1] =
          dstData[i + 2] =
          grey

        dstData[i + 3] = srcData[i + 3]
      }
    }
    </code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnswerCode2 extends Vue {}
</script>
