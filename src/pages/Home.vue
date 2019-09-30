<template lang="pug">
  #home
    Top
    Blog
    About
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Top from '@/components/Templates/Top.vue'
import Blog from '@/components/Templates/Blog.vue'
import About from '@/components/Templates/About.vue'

@Component({
  components: {
    Top,
    Blog,
    About
  }
})
export default class Home extends Vue {}
</script>
