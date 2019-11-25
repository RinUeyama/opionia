<template>
  <div v-highlight>
    <pre class="lang-javascript"><code>
/**
 * グレースケール
 *
 * ITU-R Rec BT.709
 * https://qiita.com/yoya/items/96c36b069e74398796f3
 */
export default function grayscale (
  src: ImageData,
  dst: ImageData
): void {
  for (let i = 0; i &lt; src.data.length; i += 4) {
    const grey =
      0.2126 * src.data[i + 0] +
      0.7152 * src.data[i + 1] +
      0.0722 * src.data[i + 2]

    dst.data[i] =
      dst.data[i + 1] =
      dst.data[i + 2] =
      grey

    dst.data[i + 3] = src.data[i + 3]
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
