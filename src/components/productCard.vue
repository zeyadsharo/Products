<template>
  <div class="bg-white p-1 rounded-md">
    <div class="relative group flex flex-col-reverse">
      <div class="mt-4 flex items-center justify-between text-base font-medium text-gray-900 space-x-8">
        <h3>
          <a href="#">
            {{ Product.product_name }}
          </a>
        </h3>
        <p>{{ Product.price }} $</p>
      </div>
      <div class="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden bg-gray-100">
        <img :src="baseUrl+'/storage/'+Product.image" alt="Model wearing gray t-shirt."
             class="object-center object-cover">
        <div class="flex items-end p-4">
          <button type="button"
                  class="relative z-10 w-full bg-blue-100 bg-opacity-75 py-2 px-4 rounded-md text-sm text-gray-900 opacity-0 group-hover:opacity-100 focus:opacity-100"
                  @click="viewProduct(Product)">Quick View<span class="sr-only">, Basic Tee 6-Pack </span></button>
        </div>
      </div>
    </div>
  </div>
  <viewProductComponent></viewProductComponent>
</template>

<script setup>
import {defineProps} from "vue";
import {baseUrl} from "../composables/constant.js";
import viewProductComponent from './viewProduct.vue'
import {openModal, product} from "../composables/viewProduct.js";

defineProps({
  Product: Array
})

function viewProduct(pro) {
  product.value = pro
  openModal()
}
</script>

<style scoped>

</style>