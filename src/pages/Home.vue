<template lang="pug">
  #home
    Top
    Product
    About
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Top from '@/components/Templates/Top.vue'
import Product from '@/components/Templates/Product.vue'
import About from '@/components/Templates/About.vue'

@Component({
  components: {
    Top,
    Product,
    About
  }
})
export default class Home extends Vue {}
</script>
