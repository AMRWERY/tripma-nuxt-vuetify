<template>
    <v-container class="pa-4 text-center">
        <v-row align="center" justify="center">
            <v-col class="text-center">
                <p class="text-h4 font-weight-medium">{{ $t('home.find_your_reservation') }}</p>
                <p class="text-subtitle-1">{{
                    $t('home.you_can_search_for_your_reservation_with_your_20_character_reservation_code') }}
                </p>
            </v-col>
        </v-row>
        <v-row class="fill-height" align="center" justify="center">
            <template v-for="offer in store.places" :key="offer">
                <v-col cols="12" md="4">
                    <v-hover v-slot="{ isHovering, props }">
                        <v-card :elevation="isHovering ? 12 : 2" :class="{ 'on-hover': isHovering }" v-bind="props"
                            height="400">
                            <v-img :src="offer.img" height="400" cover>
                                <div class="d-flex flex-column justify-center align-center" style="height: 100%;">
                                    <v-card-title class="text-h6 text-black font-weight-bold">
                                        <p>{{ offer.title }}</p>
                                        <div>
                                            <p
                                                class="ma-0 text-h6 font-weight-bold text-teal-darken-2 text-decoration-underline">
                                                {{ offer.subtitle }}
                                            </p>
                                            <p class="text-body-1 font-weight-medium">
                                                {{ offer.date }}
                                            </p>
                                            <p class="text-h6 font-weight-medium text-white">${{ offer.price }}</p>
                                        </div>
                                    </v-card-title>
                                    <div class="align-self-center">

                                        <video-player-dialog />

                                    </div>
                                </div>
                            </v-img>
                        </v-card>
                    </v-hover>
                </v-col>
            </template>
        </v-row>
    </v-container>
</template>  

<script setup>
import { useOfferDealsStore } from '@/stores/offerDealsStore'

const store = useOfferDealsStore()
// const icons = ref(['mdi-rewind', 'mdi-play', 'mdi-fast-forward'])

onMounted(() => {
    store.fetchPlaces()
})
</script>

<style scoped>
.v-card {
    transition: opacity .4s ease-in-out;
}

.v-card:not(.on-hover) {
    opacity: 0.7;
}

/* .show-btns {
    color: rgba(255, 255, 255, 1) !important;
} */
</style>