<template lang="pug">
  #Nav
    ul
      li(v-for="list in lists") {{ list.name }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Navigation extends Vue {
  lists = [
    {
      name: 'Product',
      link: '#product'
    },
    {
      name: 'About',
      link: '#about'
    }
  ]
}
</script>
