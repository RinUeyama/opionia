<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
/**
 * 平均プーリング
 *
 * 本体なら区切り範囲の px を指定しますが
 * 今回は定数として決め打ちしています．
 * 計算量をなるべく抑えるため，冗長な書き方になりました．
 *
 * なお今回の画像サイズは 400x336 です．
 */
export default function poolingAvg (
  src: ImageData,
  dst: ImageData
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
  for (let i = 0; i &lt; src.data.length; i++) {
    if (i % 4 === 3) {
      dst.data[i] = src.data[i]
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
   * 計算量は，最良のパフォーマンスでは O(n) に，
   * 最悪のパフォーマンスでは O(n^2) に近似できます．
   */
  /** 下記 1~3 の処理を区切りごとに行います */
  for (let i = 0; i &lt; keys.length; i++) {
    let r: number = 0
    let g: number = 0
    let b: number = 0
    /** 1. 範囲内の色を rgb ごとに加えます */
    for (let j = 0; j &lt; (4 * POOLING_PX); j += 4) {
      r += src.data[keys[i] + j + 0]
      g += src.data[keys[i] + j + 1]
      b += src.data[keys[i] + j + 2]
      for (let k = 1; k &lt; POOLING_PX; k++) {
        r += src.data[keys[i] + j + 0 + k * IMAGE_WIDTH_INDEX]
        g += src.data[keys[i] + j + 1 + k * IMAGE_WIDTH_INDEX]
        b += src.data[keys[i] + j + 2 + k * IMAGE_WIDTH_INDEX]
      }
    }

    /** 2. 加えた色を平均化します */
    r = Math.ceil(r / (POOLING_PX * POOLING_PX))
    g = Math.ceil(g / (POOLING_PX * POOLING_PX))
    b = Math.ceil(b / (POOLING_PX * POOLING_PX))

    /** 3. 完成した平均色を出力します */
    for (let j = 0; j &lt; (4 * POOLING_PX); j += 4) {
      dst.data[keys[i] + j + 0] = r
      dst.data[keys[i] + j + 1] = g
      dst.data[keys[i] + j + 2] = b
      for (let k = 1; k &lt; POOLING_PX; k++) {
        dst.data[keys[i] + j + 0 + k * IMAGE_WIDTH_INDEX] = r
        dst.data[keys[i] + j + 1 + k * IMAGE_WIDTH_INDEX] = g
        dst.data[keys[i] + j + 2 + k * IMAGE_WIDTH_INDEX] = b
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
export default class AnswerCode7 extends Vue {}
</script>
