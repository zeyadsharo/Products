import {ref} from "vue";

let products = ref(JSON.parse(localStorage.getItem('products')))

export function RefreshProducts() {
    products.value = JSON.parse(localStorage.getItem('products'))
}

export default products;