<template>
    <div>
        <v-alert color="teal-lighten-5" type="success" width="300" v-if="welcomeAlert" :text="welcomeAlert" />
    </div>
</template>
    
<script setup>
const welcomeAlert = ref('');

onMounted(() => {
    const firstName = sessionStorage.getItem('firstName');
    if (firstName) {
        welcomeAlert.value = `Welcome, ${firstName}`;
        setTimeout(() => {
            welcomeAlert.value = '';
        }, 4000);
    }
});
</script>