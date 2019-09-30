<template lang="pug">
  #title
    v-container
      h1.display-4.text-center {{ title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopTitle extends Vue {
  title = 'Opionia'
}
</script>

<style lang="stylus" scoped>
#title
  margin-top 30vh
</style>
