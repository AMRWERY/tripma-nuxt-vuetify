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
                                    <v-col cols="12" md="4" v-for="flight in flights" :key="flight">
                                        <v-card class="mx-auto" max-width="344" hover>
                                            <v-img :src="flight.img" height="250px" cover />
                                            <v-card-text class="text-center">
                                                <span class="text-subtitle-1">{{ flight.date }}</span>
                                                <div class="my-1">
                                                    <p class="text-h6 font-weight-medium">{{ flight.from }}</p>
                                                    <v-icon icon="mdi-swap-horizontal" size="x-large" />
                                                    <p class="text-h6 font-weight-medium">{{ flight.to }}</p>
                                                </div>
                                                <v-img :src="flight.smallImg" width="50" class="mx-auto" />
                                                <v-divider class="mt-4 mb-2" />
                                                <div class="text-start">
                                                    <p class="text-h6 font-weight-medium">{{ flight.category }}</p>
                                                    <p class="text-subtitle-1 font-weight-bold">${{ flight.price }}</p>
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
import { useCarPackage } from '@/stores/carRentStore'
import { useTaxiPackage } from '@/stores/taxisStore'

const flights = reactive([
    { to: 'Jakarta (DXB)', from: 'New York (USA)', date: '12 Jun 2023 - 20 Jun 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img04.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon01.jpg', price: '220', category: 'Business Class' },
    { to: 'Switzerland (SWL)', from: 'New York (USA)', date: '12 Jun 2023 - 19 Jun 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img02.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon02.jpg', price: '800', category: 'Business Class' },
    { to: 'Dubai (DXB)', from: 'New York (USA)', date: '09 Jun 2023 - 16 Jun 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img01.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon01.jpg', price: '195', category: 'Economy' },
    { to: 'Dubai (DXB)', from: 'New York (USA)', date: '12 July 2023 - 20 July 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img05.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon03.jpg', price: '195', category: 'Economy' },
    { to: 'Turkish (SWL)', from: 'New York (USA)', date: '10 Aug 2023 - 19 Aug 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img08.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon02.jpg', price: '350', category: 'Business Class' },
    { to: 'Switzerland (SWL)', from: 'New York (USA)', date: '15 Aug 2023 - 24 Aug 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img07.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon01.jpg', price: '195', category: 'Economy' },
    { to: 'Denmark (DEK)', from: 'New York (USA)', date: '20 Jun 2023 - 28 Jun 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img03.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon03.jpg', price: '350', category: 'Economy' },
    { to: 'Dubai (DXB)', from: 'New York (USA)', date: '15 July 2023 - 24 July 2023', img: 'https://themehut.co/html/geair/assets/img/images/fly_img06.jpg', smallImg: 'https://themehut.co/html/geair/assets/img/icon/fly_icon02.jpg', price: '575', category: 'Business Class' },
])

const storeTwo = useCarPackage()
const storeThree = useTaxiPackage()

onMounted(() => {
    storeTwo.fetchPlaces()
})

onMounted(() => {
    storeThree.fetchPlaces()
})

const tab = ref(null)
</script>