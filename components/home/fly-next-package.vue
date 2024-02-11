<template>
    <v-container>
        <v-row align="center" justify="center" dense>
            <v-col class="text-center">
                <p class="text-subtitle-1 text-indigo font-weight-medium">{{ $t('home.fly_next_package') }}</p>
                <p class="text-h4 font-weight-medium">{{ $t('home.your_great_destination') }}</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-card flat>
                    <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="start">
                        <v-tab :value="1" class="text-capitalize text-h6" append-icon="mdi-airplane">{{ $t('home.flights')
                        }}</v-tab>
                        <v-tab :value="2" class="text-capitalize text-h6" append-icon="mdi-taxi">{{ $t('home.car_rentals')
                        }}</v-tab>
                        <v-tab :value="3" class="text-capitalize text-h6" append-icon="mdi-office-building">{{
                            $t('home.hotels') }}</v-tab>
                    </v-tabs>
                    <v-window v-model="tab">
                        <v-window-item v-for="n in 3" :key="n" :value="1" transition="slide-x-transition">
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12" md="4" v-for="offer in store.places" :key="offer">
                                        <v-card class="mx-auto" max-width="344" hover>
                                            <v-img :src="offer.img" height="250px" cover />
                                            <v-card-text class="text-center">
                                                <span class="text-subtitle-1">{{ offer.date }}</span>
                                                <div class="my-1">
                                                    <p class="text-h6 font-weight-medium">{{ offer.from }}</p>
                                                    <v-icon icon="mdi-swap-horizontal" size="x-large" />
                                                    <p class="text-h6 font-weight-medium">{{ offer.to }}</p>
                                                </div>
                                                <v-img :src="offer.smallImg" width="50" class="mx-auto" />
                                                <v-divider class="mt-4 mb-2" />
                                                <div class="text-start">
                                                    <p class="text-h6 font-weight-medium">{{ offer.category }}</p>
                                                    <p class="text-subtitle-1 font-weight-bold">${{ offer.price }}</p>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-window-item>
                        <v-window-item v-for="n in 3" :key="n" :value="2" transition="slide-x-transition">
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12" md="4" v-for="offer in storeTwo.places" :key="offer">
                                        <v-card class="mx-auto" max-width="344" hover>
                                            <v-img :src="offer.img" height="250px" cover />
                                            <v-card-text class="text-center">
                                                <span class="text-subtitle-1">{{ offer.date }}</span>
                                                <div class="my-1">
                                                    <p class="text-h6 font-weight-medium">{{ offer.from }}</p>
                                                    <v-icon icon="mdi-swap-horizontal" size="x-large" />
                                                    <p class="text-h6 font-weight-medium">{{ offer.to }}</p>
                                                </div>
                                                <v-img :src="offer.smallImg" width="50" class="mx-auto" />
                                                <v-divider class="mt-4 mb-2" />
                                                <div class="text-start">
                                                    <p class="text-h6 font-weight-medium">{{ offer.category }}</p>
                                                    <p class="text-subtitle-1 font-weight-bold">${{ offer.price }}</p>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-window-item>
                        <v-window-item v-for="n in 3" :key="n" :value="3" transition="slide-x-transition">
                            <v-container fluid>
                                <v-row>
                                    <v-col cols="12" md="4" v-for="offer in storeThree.places" :key="offer">
                                        <v-card class="mx-auto" max-width="344" hover>
                                            <v-img :src="offer.img" height="250px" cover />
                                            <v-card-text class="text-center">
                                                <span class="text-subtitle-1">{{ offer.date }}</span>
                                                <div class="my-1">
                                                    <p class="text-h6 font-weight-medium">{{ offer.from }}</p>
                                                    <v-icon icon="mdi-swap-horizontal" size="x-large" />
                                                    <p class="text-h6 font-weight-medium">{{ offer.to }}</p>
                                                </div>
                                                <v-img :src="offer.smallImg" width="50" class="mx-auto" />
                                                <v-divider class="mt-4 mb-2" />
                                                <div class="text-start">
                                                    <p class="text-h6 font-weight-medium">{{ offer.category }}</p>
                                                    <p class="text-subtitle-1 font-weight-bold">${{ offer.price }}</p>
                                                </div>
                                            </v-card-text>
                                        </v-card>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useFlightsPackage } from '@/stores/flightsStore'
import { useCarPackage } from '@/stores/carRentStore'
import { useTaxiPackage } from '@/stores/taxisStore'

const store = useFlightsPackage()
const storeTwo = useCarPackage()
const storeThree = useTaxiPackage()

onMounted(() => {
    store.fetchPlaces()
})

onMounted(() => {
    storeTwo.fetchPlaces()
})

onMounted(() => {
    storeThree.fetchPlaces()
})

const tab = ref(null)
</script>