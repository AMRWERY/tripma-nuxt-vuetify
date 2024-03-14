<template>
    <v-container>
        <v-row dense>
            <v-col class="text-center">
                <p class="text-h4 font-weight-bold">{{ $t('our_service.our_service') }}</p>
                <div class="text-subtitle-1 mt-6">
                    <p>{{
                        $t('our_service.we_offer_you_travel_services_in_order_to_facilitate')
                    }}
                        <span>{{ $t('our_service.everything_on_your_trip_and_provide_full_fun_only_you_have_to') }}</span>
                    </p>
                    <p>{{ $t('our_service.decide_and_we_have_to_meet') }}</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6" v-for="card in cards" :key="card" :to="card">
                <v-card class="mx-auto card" max-width="500" height="420" hover :to="card.route">
                    <v-img :src="card.img" height="300px" cover class="align-end text-indigo">
                        <v-card-title class="font-weight-bold">{{ $t(card.title) }}</v-card-title>
                    </v-img>
                    <v-card-text>
                        {{ card.desc }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col class="text-center my-6">
                <p class="text-h4 font-weight-bold">{{ $t('our_service.tripma_applications') }}</p>
                <div class="text-subtitle-1">
                    <p>{{
                        $t('our_service.you_can_now_enjoy_the_services_of_the_tripma_easily_through_mobile_applications_for_the_tripma_on_the_google_store_and_the_apple_store')
                    }}</p>
                </div>
            </v-col>
        </v-row>
        <v-row align="center" justify="center" class="mx-auto">
            <v-col cols="8" md="3">
                <v-card max-width="400" color="black" flat class="card">
                    <v-img :src="appStoreImage" />
                </v-card>
            </v-col>
            <v-col cols="8" md="3">
                <v-card max-width="400" color="black" flat class="card">
                    <v-img :src="googlePlayImage" />
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <p class="text-center text-blue-grey-darken-2 text-h5 text-decoration-underline cursor-pointer">Read More
                </p>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script setup>
const cards = ref([
    { title: 'our_service.flight_reservation', desc: 'You no longer have to worry about your flight booking, you now have a whole team tasked with fulfilling your request in this regard and making sure that everything is ready for your convenience.', img: 'https://justfields.com/storage/projects/7M5rV059/flights.png', route: '/flight-reservation' },
    { title: 'layout.programs', desc: 'You can choose what suits you from our integrated programs and provide everything you need during your trip, starting from flight reservations, hotel reservations, car rental and all the services you may need during your trip.', img: 'https://justfields.com/storage/projects/7M5rV059/programs.png', route: '/programs' },
    { title: 'our_service.hotel_reservation', desc: 'We are in Seasons Tour. We do not care about anything but your comfort , so we were keen to search for the best hotels with the best offers to make sure that you will get what you deserve from the comfort, privacy and fun during your trip.', img: 'https://justfields.com/storage/projects/7M5rV059/hotels.png', route: '' },
    { title: 'home.car_rentals', desc: 'Car rental service to provide you with comfort, privacy and save time during internal transfers throughout your stay.', img: 'https://justfields.com/storage/projects/7M5rV059/cars.png', route: '' },
])

const appStoreImage = 'https://justfields.com/storage/projects/7M5rV059/appstore.png'
const googlePlayImage = 'https://seasonstours.netlify.app/images/googleplay.png'
</script>
  
<style scoped>
.card {
    border-radius: 20px;
    overflow: hidden;
    transition: transform 0.3s ease-out;
}

.card:hover {
    transform: scale(1.05);
}
</style>