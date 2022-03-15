<script setup>
import {ref} from 'vue'
import {syncProduct} from "../src/composables/cacheProduct.js";
</script>

<template>
  <div>
    <header class="bg-white shadow " v-if="$route.meta.title">
      <div
          class="flex lg:justify-between sm:justify-between  md:justify-between flex-row max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div class=" ">
          <h1
              @click="counter = 0"
              class="text-3xl font-bold leading-tight text-gray-900"
          >
            {{ $route.meta.title }}
          </h1>
        </div>
        <div class="">

          <button @click="syncProduct()"
                  class=" rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-small leading-6 text-white transition duration-150 ease-in-out hover:bg-indigo-500 focus:outline-none">
            Sync Products
          </button>
        </div>
      </div>

    </header>
    <main>
      <!--      <div class="flex flex-row   loading-overlay    h-screen">-->
      <!--        <div-->
      <!--            class="bg-blue-600 p-2  w-4 h-4 rounded-full animate-bounce blue-circle"-->
      <!--        ></div>-->
      <!--        <div-->
      <!--            class="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce green-circle"-->
      <!--        ></div>-->
      <!--        <div-->
      <!--            class="bg-red-600 p-2  w-4 h-4 rounded-full animate-bounce red-circle"-->
      <!--        ></div>-->
      <!--      </div>-->
      <router-view/>
    </main>
  </div>
</template>
<style>
.blue-circle {
  animation-delay: 0.1s;
}

.green-circle {
  animation-delay: 0.2s;
}

.red-circle {
  animation-delay: 0.3s;
}

.loading-overlay {
  background: rgba(255, 255, 255, 0.7);
  z-index: 9998;
}

.code {
  font-family: monospace;
  /*   font-size: .9em; */
  color: #dd4a68;
  background-color: rgb(238, 238, 238);
  padding: 0 3px;
}
</style>