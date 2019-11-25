<template lang="pug">
  v-btn(
    to="/"
    tile
    large
    icon
  ) <<
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class HomeButton extends Vue {}
</script>
