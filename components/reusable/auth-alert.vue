<template>
    <div>
        <v-alert color="teal-lighten-5" type="success" width="300" elevation="2" closable="mdi-close"
            v-if="welcomeAlert" :text="welcomeAlert" />
    </div>
</template>

<script setup>
const welcomeAlert = ref('');
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
    const firstName = sessionStorage.getItem('firstName');
    const displayName = sessionStorage.getItem('username');
    if (firstName) {
        welcomeAlert.value = t('alert.welcome', { name: firstName });
        setTimeout(() => {
            welcomeAlert.value = '';
        }, 4000);
    } else if (displayName) {
        welcomeAlert.value = t('alert.welcome', { name: displayName });
        setTimeout(() => {
            welcomeAlert.value = '';
        }, 4000);
    }
});
</script>