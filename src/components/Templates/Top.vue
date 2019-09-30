<template lang="pug">
  #top
    TopTitle
    Navigation
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import TopTitle from '@/components/Atoms/TopTitle.vue'
import Navigation from '@/components/Organisms/Navigation.vue'

@Component({
  components: {
    TopTitle,
    Navigation
  }
})
export default class Top extends Vue {}
</script>

<style lang="stylus" scoped>
#top
  height 100vh
</style>
