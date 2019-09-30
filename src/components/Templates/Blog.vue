<template lang="pug">
  #blog
    Heading(heading="Blog")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Heading from '@/components/Atoms/Heading.vue'

@Component({
  components: {
    Heading
  }
})
export default class Blog extends Vue {}
</script>
