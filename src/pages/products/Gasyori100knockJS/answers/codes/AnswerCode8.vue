<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
/**
 * Maxプーリング
 */
export default function poolingMax (
  srcData: Uint8ClampedArray,
  dstData: Uint8ClampedArray
): void {
  /**
   * 本来なら引数で渡されるであろう値．
   *  pooling_px: 区切り範囲の px です．
   *  image_width_index: 本来なら image.width * 4 を代入して定数にします．
   */
  const POOLING_PX = 8
  const IMAGE_WIDTH_INDEX = 1600

  /**
   * I. 8x8 で画像を区切ります．
   */
  let keys: Array&lt;number> = []
  for (let i = 0; i &lt; srcData.length; i++) {
    if (i % 4 === 3) {
      dstData[i] = srcData[i]
    /**
     * 1. 8px ずつ分割された行のうち 1px 目のインデックスを指定します．
     * 2. 行の中の rgba のうち，8pxごとの r のインデックスを抜き出します．
     */
    } else if (
      i % (IMAGE_WIDTH_INDEX * POOLING_PX) &lt; IMAGE_WIDTH_INDEX &amp;&amp;
       i % (4 * POOLING_PX) === 0
    ) {
      keys.push(i)
    }
  }

  /**
   * II. 区切り内の色を平均化します．
   */
  /**
   * 2階層以降のfor文は POOLING_PX に依存しますが
   * これは 最上位の for文が依存する keys.length と反比例の関係にあり
   * 計算量は，最良の条件では O(n) に，
   * 最悪の条件（画像全体を平均化）では O(n^2) に近似できます．
   */
  /** 下記 1~2 の処理を区切りごとに行います */
  for (let i = 0; i &lt; keys.length; i++) {
    let maxR: number = 0
    let maxG: number = 0
    let maxB: number = 0
    /** 1. 範囲内の色のうち最大のものを取り出します */
    for (let j = 0; j &lt; (4 * POOLING_PX); j += 4) {
      maxR = maxR &lt; srcData[keys[i] + j + 0] ? srcData[keys[i] + j + 0] : maxR
      maxG = maxG &lt; srcData[keys[i] + j + 1] ? srcData[keys[i] + j + 1] : maxG
      maxB = maxB &lt; srcData[keys[i] + j + 2] ? srcData[keys[i] + j + 2] : maxB
      for (let k = 1; k &lt; POOLING_PX; k++) {
        maxR = maxR &lt; srcData[keys[i] + j + 0 + k * IMAGE_WIDTH_INDEX]
          ? srcData[keys[i] + j + 0 + k * IMAGE_WIDTH_INDEX] : maxR
        maxG = maxG &lt; srcData[keys[i] + j + 1 + k * IMAGE_WIDTH_INDEX]
          ? srcData[keys[i] + j + 1 + k * IMAGE_WIDTH_INDEX] : maxG
        maxB = maxB &lt; srcData[keys[i] + j + 2 + k * IMAGE_WIDTH_INDEX]
          ? srcData[keys[i] + j + 2 + k * IMAGE_WIDTH_INDEX] : maxB
      }
    }

    /** 2. 最大色を出力します */
    for (let j = 0; j &lt; (4 * POOLING_PX); j += 4) {
      dstData[keys[i] + j + 0] = maxR
      dstData[keys[i] + j + 1] = maxG
      dstData[keys[i] + j + 2] = maxB
      for (let k = 1; k &lt; POOLING_PX; k++) {
        dstData[keys[i] + j + 0 + k * IMAGE_WIDTH_INDEX] = maxR
        dstData[keys[i] + j + 1 + k * IMAGE_WIDTH_INDEX] = maxG
        dstData[keys[i] + j + 2 + k * IMAGE_WIDTH_INDEX] = maxB
      }
    }
  }
}
    </code></pre>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class AnswerCode8 extends Vue {}
</script>
