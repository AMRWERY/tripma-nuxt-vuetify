<template>
    <v-carousel show-arrows="hover" cycle class="carousel">
        <v-carousel-item src="https://justfields.com/storage/projects/7M5rV059/tickets.jpg" cover
            transition="slide-x-transition" />
        <v-carousel-item src="https://justfields.com/storage/projects/7M5rV059/travel.jpg" cover
            transition="slide-x-transition" />
        <div class="alert-container">
            <auth-alert :welcomeAlert="welcomeMessage" />
        </div>
    </v-carousel>
</template>

<script setup>

</script>

<style scoped>
.carousel {
    position: relative;
}

.alert-container {
    position: absolute;
    top: 20px;
    left: 20px;
    z-index: 1000;
    width: 300px;
}
</style>