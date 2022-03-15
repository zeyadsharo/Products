import axios from "axios";
import {ref} from "vue";
import {baseUrl} from "./constant.js";
import {RefreshProducts} from '../store/products.js'

export let isSyncProducts = ref(false)

export function syncProduct() {
    getProductAndCache()
}

function getProductAndCache() {
    isSyncProducts.value = true;
    axios.get(baseUrl + 'api/products')
        .then(function (response) {
            localStorage.setItem('products', JSON.stringify(response.data.products))
            isSyncProducts.value = false;
            RefreshProducts()
        })
        .catch(function (error) {
            alert(error);
            isSyncProducts.value = false;
        });
}