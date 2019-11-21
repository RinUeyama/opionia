<template lang="pug">
  component.pa-4(:is="`AnswerCode${currentId}`")
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue, Inject } from 'vue-property-decorator'
/** TODO: ここのインポートが冗長なので簡単に書きたい */
import AnswerCode1 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode1.vue'
import AnswerCode2 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode2.vue'
import AnswerCode3 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode3.vue'
import AnswerCode4 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode4.vue'
import AnswerCode5 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode5.vue'
import AnswerCode6 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode6.vue'

@Component({
  components: {
    AnswerCode1,
    AnswerCode2,
    AnswerCode3,
    AnswerCode4,
    AnswerCode5,
    AnswerCode6
  }
})
export default class SrcCode extends Vue {
  @Prop() id: number | undefined

  get currentId () {
    return this.id
  }
}
</script>
