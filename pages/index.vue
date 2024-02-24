<template>
    <div>
        <auth-alert :welcomeAlert="welcomeMessage" />
        <banner />
        <offer-deals />
        <fly-next-package />
        <latest-news-update />
        <!-- <snackbar /> -->
    </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/authStore'

const store = useAuthStore()

const welcomeMessage = computed(() => `Welcome, ${store.getUsername}`);
console.log(store.getUsername)
</script>