<template lang="pug">
  #products
    v-layout(row wrap)
      v-flex(xs12 sm6 md4 v-for="product in products" :key="product.name")
       .product
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Products extends Vue {
  products: Array<object> = [{}]
}
</script>
