<template>
  <div v-highlight>
    <pre class="language-javascript"><code>
/**
 * 1番目のチャネルと3番目のチャネルを入れ替えます．
 */
export default function RGBtoBGR (
  src: ImageData,
  dst: ImageData
): void {
  for (let i = 0; i &lt; src.data.length; i += 4) {
    dst.data[i + 0] = src.data[i + 2] // R -> B
    dst.data[i + 1] = src.data[i + 1] // G -> G
    dst.data[i + 2] = src.data[i + 0] // B -> R
    dst.data[i + 3] = src.data[i + 3] // a -> a
  }
}
    </code></pre>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { component as VueCodeHighlight } from 'vue-code-highlight'

@Component({
  components: {
    VueCodeHighlight
  }
})
export default class AnswerCode1 extends Vue {}
</script>
