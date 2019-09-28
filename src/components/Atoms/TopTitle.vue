<template lang="pug">
  h1.title {{ title }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class TopTitle extends Vue {
  title = 'Opionia'
}
</script>
