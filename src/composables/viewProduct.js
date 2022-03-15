import {ref} from "vue";

export const isOpen = ref(false)
export let product = ref([])

export function closeModal() {
    isOpen.value = false
}

export function openModal() {
    isOpen.value = true
}