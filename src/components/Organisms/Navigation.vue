<template lang="pug">
  v-container.nav
    v-layout.justify-center(row wrap)
      v-flex(sm3 v-for="list in lists" :key="list.name")
        router-link(:to="list.link" replace)
          h2.text-center {{ list.name }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
  lists = [
    {
      name: 'Products',
      link: '#products'
    },
    {
      name: 'Library',
      link: '#library'
    },
    {
      name: 'About',
      link: '#about'
    }
  ]
}
</script>

<style lang="stylus" scoped>
.nav
  margin-top 10vh
</style>
