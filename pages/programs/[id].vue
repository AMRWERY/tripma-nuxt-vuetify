<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card flat height="500">
                    <v-img :src="programDetails?.cover" height="500" cover />
                </v-card>
                <p class="text-h6 text-blue-grey-darken-2">Go Trip</p>
                <div class="mt-2">
                    <v-row>
                        <v-col>
                            <p class="font-weight-medium">Flight Line</p>
                            <v-card color="#e2e8f0" height="45" class="justify-center align-center d-flex card" flat>
                                <p class="font-weight-bold">{{ programDetails?.flightLineGo }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Going From</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.goFrom }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival In</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.arrivalIn }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Departure Time</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.departureTime }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival Time</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.arrivalTime }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Allowed Weight (KG)</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">20</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Flight Number</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.flightNumberGo }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <p class="text-h6 text-blue-grey-darken-2 mt-8">Return Trip</p>
                <div class="mt-2">
                    <v-row>
                        <v-col>
                            <p class="font-weight-medium">Flight Line</p>
                            <v-card color="#e2e8f0" height="45" class="justify-center align-center d-flex card" flat>
                                <p class="font-weight-bold">{{ programDetails?.flightLineReturn }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Going From</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.arrivalIn }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival In</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.goFrom }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Departure Time</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">05:00:00</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival Time</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">11:30:00</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Allowed Weight (KG)</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">20</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Flight Number</p>
                            <v-card color="#e2e8f0" height="45" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.flightNumberReturn }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
            </v-col>
            <v-col cols="12" md="6">
                <div class="d-flex">
                    <div>
                        <p class="text-h5 font-weight-bold text-blue-darken-3">{{ programDetails?.title }}</p>
                    </div>
                    <span class="text-subtitle-1 font-weight-medium text-decoration-underline mt-2 ml-auto">{{
                        programDetails?.duration }}</span>
                </div>

                <div class="d-flex my-3">
                    <ratings />
                    <p class="mt-1 ml-2">4 Reviews</p>
                    <v-divider :thickness="3" vertical class="mx-3" />
                    <v-icon icon="mdi-facebook" size="large" color="blue-grey-darken-3" />
                    <v-icon icon="mdi-instagram" size="large" class="mx-2" color="blue-grey-darken-3" />
                    <v-icon icon="mdi-twitter" size="large" color="blue-grey-darken-3" />
                </div>

                <v-row class="mt-4" v-if="programDetails?.dayOne">
                    <v-col>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <div class="day-count">Day 1</div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="ms-5 text-subtitle-1 text-teal-darken-1 text-teal-darken-1 font-weight-bold">{{
                                    programDetails?.dayOne?.title }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <p class="my-16">{{ programDetails?.dayOne?.desc }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="programDetails?.dayOne?.img" class="ms-5" max-width="300" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider inset class="mx-auto my-6" v-if="programDetails?.dayTwo" />
                <v-row class="mt-4" v-if="programDetails?.dayTwo">
                    <v-col>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <div class="day-count">Day 2</div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="ms-5 text-subtitle-1 text-teal-darken-1 text-teal-darken-1 font-weight-bold">{{
                                    programDetails?.dayTwo?.title }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <p class="my-16">{{ programDetails?.dayTwo?.desc }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="programDetails?.dayTwo?.img" class="ms-5" max-width="300" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider inset class="mx-auto my-6" v-if="programDetails?.dayThree" />
                <v-row class="mt-4" v-if="programDetails?.dayThree">
                    <v-col>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <div class="day-count">Day 3</div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="ms-5 text-subtitle-1 text-teal-darken-1 text-teal-darken-1 font-weight-bold">{{
                                    programDetails?.dayThree?.title }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <p class="my-16">{{ programDetails?.dayThree?.desc }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="programDetails?.dayThree?.img" class="ms-5" max-width="300" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider inset class="mx-auto my-6" v-if="programDetails?.dayFour" />
                <v-row class="mt-4" v-if="programDetails?.dayFour">
                    <v-col>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <div class="day-count">Day 4</div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="ms-5 text-subtitle-1 text-teal-darken-1 text-teal-darken-1 font-weight-bold">{{
                                    programDetails?.dayFour?.title }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <p class="my-16">{{ programDetails?.dayFour?.desc }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="programDetails?.dayFour?.img" class="ms-5" max-width="300" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider inset class="mx-auto my-6" v-if="programDetails?.dayFive" />
                <v-row class="mt-4" v-if="programDetails?.dayFive">
                    <v-col>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <div class="day-count">Day 5</div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="ms-5 text-subtitle-1 text-teal-darken-1 text-teal-darken-1 font-weight-bold">{{
                                    programDetails?.dayFive?.title }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <p class="my-16">{{ programDetails?.dayFive?.desc }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="programDetails?.dayFive?.img" class="ms-5" max-width="300" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
                <v-divider inset class="mx-auto my-6" v-if="programDetails?.daySix" />
                <v-row class="mt-4" v-if="programDetails?.daySix">
                    <v-col>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <div class="day-count">Day 6</div>
                            </v-col>
                            <v-col cols="12" md="6">
                                <p class="ms-5 text-subtitle-1 text-teal-darken-1 text-teal-darken-1 font-weight-bold">{{
                                    programDetails?.daySix?.title }}</p>
                            </v-col>
                        </v-row>
                        <v-row dense>
                            <v-col cols="12" md="6">
                                <p class="my-16">{{ programDetails?.daySix?.desc }}</p>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-img :src="programDetails?.daySix?.img" class="ms-5" max-width="300" />
                            </v-col>
                        </v-row>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useProgrammesCards } from '@/stores/programStore'

const store = useProgrammesCards()
const route = useRoute()
const programId = ref('')
const programDetails = ref(null);

onMounted(async () => {
    programId.value = route.params.id;
    programDetails.value = await store.getProgramById(programId.value)
    console.log(programId.value);
});
</script>

<style scoped>
.card {
    border-radius: 8px;
}

.day-count {
    padding: 8px 16px;
    border-radius: 5px 25px 45px;
    background: #9295d1;
    color: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    font-size: 14px;
    width: 80px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>