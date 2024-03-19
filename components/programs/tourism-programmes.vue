<template>
    <v-row dense class="ms-12">
        <v-col>
            <div class="d-flex">
                <v-icon icon="mdi-map-marker-outline" size="large" color="blue-darken-1" class="mt-1" />
                <p class="ms-2 text-h6">Tourism Programs</p>
            </div>
            <p class="ms-8">Choose your favourite tourist destination</p>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" md="4" v-for="offer in store.filteredPlacesArray" :key="offer">
            <v-card class="mx-auto card" max-width="350" flat :to="'/programs/tourism-programmes/' + offer.id">
                <div class="image-container">
                    <v-img :src="offer.cover" height="320px" cover />
                </div>
                <v-card-text>
                    <div class="d-flex">
                        <p class="text-h6 text-blue-darken-3 font-weight-bold">{{ offer.smallTitle }}</p>
                        <span class="text-h6 ms-auto font-weight-medium">${{ offer.price }}</span>
                    </div>
                    <div class="d-flex my-2">
                        <p class="text-subtitle-1">{{ offer.hotel }}</p>
                        <span class="ms-auto mt-1 text-subtitle-2">{{ offer.duration }}</span>
                    </div>
                    <ratings />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
import { useTourismProgrammesStore } from '@/stores/tourismProgramsStore'

const store = useTourismProgrammesStore()

onMounted(() => {
    store.fetchPlaces()
})
</script>

<style scoped>
.card {
    border-radius: 20px;
}

.image-container {
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
}

.image-container:hover {
    transform: scale(1.05);
}
</style>