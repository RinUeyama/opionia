<template lang="pug">
  component.pa-4(:is="`AnswerCode${currentId}`")
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue, Inject } from 'vue-property-decorator'
import AnswerCode1 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode1.vue'
import AnswerCode2 from '@/pages/products/Gasyori100knockJS/answers/codes/AnswerCode2.vue'

@Component({
  components: {
    AnswerCode1,
    AnswerCode2
  }
})
export default class SrcCode extends Vue {
  @Prop() id: number | undefined

  get currentId () {
    return this.id
  }
}
</script>
