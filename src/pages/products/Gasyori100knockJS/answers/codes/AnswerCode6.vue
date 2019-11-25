<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
/**
 * 減色処理
 */
export default function subtractiveColor (
  src: ImageData,
  dst: ImageData
): void {
  for (let i = 0; i &lt; src.data.length; i++) {
    /** RGBaからRGBを抜き出して減色処理を施します */
    if (i % 4 === 3) {
      dst.data[i] = src.data[i]
    } else {
      /** 64 区切りで 32, 96, 160, 224 に色をまるめます */
      dst.data[i] = 64 * (1 + Math.floor(src.data[i] / 64)) - 32
    }
  }
}

    </code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnswerCode6 extends Vue {}
</script>
