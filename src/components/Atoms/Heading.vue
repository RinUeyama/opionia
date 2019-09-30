<template lang="pug">
  .heading
    v-container
      h1 {{ heading }}
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class Heading extends Vue {
  @Prop({ type: String, required: true })
  heading!: String
}
</script>
