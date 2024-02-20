<template>
    <div>
        <v-alert color="teal-lighten-5" type="success" width="300" v-if="welcomeAlert" :text="welcomeAlert" />
    </div>
</template>
  
<script setup>
const props = defineProps({
    welcomeAlert: String,
});
</script>