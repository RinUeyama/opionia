<template lang="pug">
  v-container(fluid)
    v-row.mt-4.pa-4(justify="center")
      h1.display-4 OPIONIA
    v-row.pa-4(justify="center")
      p ただいま改装中
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Top extends Vue {}
</script>

<style lang="stylus" scoped>
#top
  height 30vh
</style>
