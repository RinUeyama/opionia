<template lang="pug">
  #products
    heading(heading="Products")
    v-layout(row wrap)
      v-flex(xs12 sm6 md4 v-for="product in products" :key="product.name")
       .product
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Heading from '@/components/Atoms/Heading.vue'

@Component({
  components: {
    Heading
  }
})
export default class Products extends Vue {
  products: Array<object> = [{}]
}
</script>
