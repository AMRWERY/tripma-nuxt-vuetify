<template>
    <v-container>
        <v-row dense>
            <v-col class="text-center">
                <p class="text-h4 font-weight-bold">Our Service</p>
                <div class="text-subtitle-1 mt-6">
                    <p>We offer you travel services in order to facilitate everything on your trip and provide full fun.
                        Only you have to</p>
                    <p>decide and we have to meet</p>
                </div>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6" v-for="card in cards" :key="card" :to="card">
                <v-card class="mx-auto card" max-width="500" height="420" hover>
                    <v-img :src="card.img" height="300px" cover class="align-end text-indigo">
                        <v-card-title class="font-weight-bold">{{ card.title }}</v-card-title>
                    </v-img>
                    <v-card-text>
                        {{ card.desc }}
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <v-row dense>
            <v-col class="text-center my-6">
                <p class="text-h4 font-weight-bold">Tripma Applications</p>
                <div class="text-subtitle-1">
                    <p>You can now enjoy the services of the SeasonsTour easily through mobile applications for the
                        SeasonsTour on the Google Store and the Apple Store</p>
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
    { title: 'Flight Reservation', desc: 'You no longer have to worry about your flight booking, you now have a whole team tasked with fulfilling your request in this regard and making sure that everything is ready for your convenience.', img: 'https://justfields.com/storage/projects/7M5rV059/flights.png', route: '/forms/flight-reservations-form' },
    { title: 'Programs', desc: 'You can choose what suits you from our integrated programs and provide everything you need during your trip, starting from flight reservations, hotel reservations, car rental and all the services you may need during your trip.', img: 'https://justfields.com/storage/projects/7M5rV059/programs.png', route: '/forms/programs-form' },
    { title: 'Hotel Reservation', desc: 'We are in Seasons Tour. We do not care about anything but your comfort , so we were keen to search for the best hotels with the best offers to make sure that you will get what you deserve from the comfort, privacy and fun during your trip.', img: 'https://justfields.com/storage/projects/7M5rV059/hotels.png', route: '/forms/hotel-reservation-form' },
    { title: 'Car Rental', desc: 'Car rental service to provide you with comfort, privacy and save time during internal transfers throughout your stay.', img: 'https://justfields.com/storage/projects/7M5rV059/cars.png', route: '/forms/car-rental-form' },
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
  