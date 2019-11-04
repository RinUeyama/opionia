<template lang="pug">
  v-container
    top
    products
    about
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Top from '@/components/Templates/Top.vue'
import Products from '@/components/Templates/Products.vue'
import About from '@/components/Templates/About.vue'

@Component({
  components: {
    Top,
    Products,
    About
  }
})
export default class Home extends Vue {}
</script>
