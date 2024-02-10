<template>
    <v-container>
        <results />
        <v-row>
            <v-col cols="12" md="4" v-for="offer in store.filteredPlacesArray" :key="offer">
                <v-card class="mx-auto card" max-width="350" flat :to="'/programs/' + offer.id">
                    <div class="image-container">
                        <v-img :src="offer.img" height="320px" cover />
                    </div>
                    <v-card-text>
                        <div class="d-flex">
                            <p class="text-h6 text-blue-darken-3 font-weight-bold">{{ offer.title }}</p>
                            <span class="text-h6 ml-auto font-weight-medium">${{ offer.price }}</span>
                        </div>
                        <div class="d-flex my-2">
                            <p class="text-subtitle-1">{{ offer.subtitle }}</p>
                            <span class="ml-auto mt-1 text-subtitle-2">{{ offer.duration }}</span>
                        </div>
                        <ratings />
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useProgrammesCards } from '@/stores/programStore'

const store = useProgrammesCards()

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