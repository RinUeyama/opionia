<template>
  <div v-highlight>
    <pre class="language-javascript"><code>
    /**
     * 1番目のチャネルと3番目のチャネルを入れ替えます．
     */
    export default function RGBtoBGR (
      srcData: Uint8ClampedArray,
      dstData: Uint8ClampedArray
    ): void {
      for (let i = 0; i &lt; srcData.length; i += 4) {
        dstData[i + 0] = srcData[i + 2] // R -> B
        dstData[i + 1] = srcData[i + 1] // G -> G
        dstData[i + 2] = srcData[i + 0] // B -> R
        dstData[i + 3] = srcData[i + 3] // a -> a
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
