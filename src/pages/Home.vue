<template lang="pug">
  v-container
    top
    products
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Top from '@/components/Templates/Top.vue'
import Products from '@/components/Templates/Products.vue'

@Component({
  components: {
    Top,
    Products
  }
})
export default class Home extends Vue {}
</script>
