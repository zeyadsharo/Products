<script setup>
import {isOpen, closeModal, product} from '../composables/viewProduct.js'
import {baseUrl} from '../composables/constant.js'
</script>
<template>
  <Transition name="modal">
    <div v-if="isOpen" class="modal-mask ">
      <div
          class="modal-wrapper  flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
        <div
            class="modal-container w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
          <div class="modal-header">
            <button type="button"
                    class="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                    @click="closeModal">
              <span class="sr-only">Close</span>
              <svg class="h-6 w-6" x-description="Heroicon name: outline/x" xmlns="http://www.w3.org/2000/svg"
                   fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>

          <div class="modal-body">
            <slot name="body">

              <div class="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                <div class="aspect-w-0 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                  <img :src="baseUrl+'/storage/'+product.image"
                       alt="Two each of gray, white, and black shirts arranged on table."
                       class="object-center object-cover">
                </div>
                <div class="sm:col-span-8 lg:col-span-7">
                  <h2 class="text-2xl font-extrabold text-gray-900 sm:pr-12">
                    {{ product.product_name }}
                  </h2>

                  <section aria-labelledby="information-heading" class="mt-2">
                    <h3 id="information-heading" class="sr-only">Product information</h3>

                    <p class="text-2xl text-gray-900">
                      Price {{ product.price }} $
                    </p>

                  </section>

                  <section aria-labelledby="options-heading" class="mt-10">
                    <h3 id="options-heading" class="sr-only">Product options</h3>

                    <form>
                      <!-- Colors -->
                      <div>
                        <h1 class="title-font text-lg font-medium text-gray-900 mb-3">Product Attributes</h1>
                        <fieldset v-for="attrs in product.attributes" :key="attrs" class="mt-1">
                          {{ attrs.name }} : {{ attrs.attribute_value }}
                        </fieldset>
                      </div>
                      <div class=""><h1 class="title-font text-lg mt-3 font-medium text-gray-900 mb-1">About This Item</h1>
                        <p class="leading-relaxed mb-3">  {{product.product_description}}</p>
                      </div>


                      <!--                      <button type="submit" class="mt-6 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add to bag</button>-->
                    </form>
                  </section>
                </div>
              </div>


            </slot>
          </div>

        </div>
      </div>
    </div>
  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 700px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>