<template lang="pug">
  .pa-4(:is="code")
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import { drawCanvas, answerFunction } from '@/pages/products/Gasyori100knockJS/answers/'
import AnswerCode1 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode1.vue'

@Component({
  components: {
    AnswerCode1
  }
})
export default class SrcCode extends Vue {
  @Prop(Number) readonly id: number | undefined

  get code () {
    return `AnswerCode${this.id}`
  }
}
</script>
