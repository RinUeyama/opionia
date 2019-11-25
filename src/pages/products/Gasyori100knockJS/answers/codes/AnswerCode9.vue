<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
/**
 * 今日は tensorflow.js の導入で時間がなくなったので
 * この問題は明日解きます．
 */
/**
 * ガウシアンフィルター
 */
import * as tf from '@tensorflow/tfjs'

export default function gaussianFilter (
  src: ImageData,
  _dst: ImageData,
  canvas: HTMLCanvasElement
): void {
  const srcTensor: tf.Tensor&lt;tf.Rank.R3> = tf.browser.fromPixels(src)
  tf.browser.toPixels(srcTensor, canvas)
}

    </code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnswerCode9 extends Vue {}
</script>
