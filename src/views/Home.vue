<script setup>
import {ref, watch} from "vue";
import {isSyncProducts} from '../composables/cacheProduct.js'
import products from "../store/products.js";
import productCard from '../components/productCard.vue'
</script>
<template>
  <div class="bg-gray-50">
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-7 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Products</h2>
      <div v-if="!isSyncProducts"
           class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a v-for="product in products" :key="product.product_name" class="group">
          <productCard :Product="product"></productCard>
        </a>
      </div>
    </div>
  </div>
</template>
