<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="6">
                <v-card flat height="500">
                    <v-img :src="programDetails?.img" height="500" cover />
                </v-card>
            </v-col>
            <v-col cols="12" md="6">
                <div class="d-flex">
                    <div>
                        <p class="text-h4 font-weight-bold text-blue-darken-3">{{ programDetails?.title }}</p>
                        <p class="text-subtitle-1 font-weight-bold">{{ programDetails?.subtitle }}</p>
                    </div>
                    <span class="text-subtitle-1 font-weight-medium text-decoration-underline mt-2 ml-auto">8 Days & 7
                        Nights</span>
                </div>

                <div class="d-flex my-3">
                    <ratings />
                    <p class="mt-1 ml-2">4 Reviews</p>
                    <v-divider :thickness="3" vertical class="mx-3" />
                    <v-icon icon="mdi-facebook" size="large" color="blue-grey-darken-3" />
                    <v-icon icon="mdi-instagram" size="large" class="mx-2" color="blue-grey-darken-3" />
                    <v-icon icon="mdi-twitter" size="large" color="blue-grey-darken-3" />
                </div>
                <p class="text-h6 text-blue-grey-darken-2">Go Trip</p>
                <div class="mt-2">
                    <v-row>
                        <v-col>
                            <p class="font-weight-medium">Flight Line</p>
                            <v-card color="#e2e8f0" height="35" class="justify-center align-center d-flex card" flat>
                                <p class="font-weight-bold">Fly Jordan</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Going From</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.goFrom }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival In</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.arrivalIn }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Departure Time</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.departureTime }}</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival Time</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">{{ programDetails?.arrivalTime }}</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Allowed Weight (KG)</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">20</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Flight Number</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">FJR500</p>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
                <p class="text-h6 text-blue-grey-darken-2 mt-8">Return Trip</p>
                <div class="mt-2">
                    <v-row>
                        <v-col>
                            <p class="font-weight-medium">Flight Line</p>
                            <v-card color="#e2e8f0" height="35" class="justify-center align-center d-flex card" flat>
                                <p class="font-weight-bold">Fly Jordan</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Going From</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">Amman AMM Airport (AMM)</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival In</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">Batumi Intonational Airport (BUS)</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Departure Time</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">05:00:00</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Arrival Time</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">11:30:00</p>
                            </v-card>
                        </v-col>
                    </v-row>
                    <v-row>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Allowed Weight (KG)</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">20</p>
                            </v-card>
                        </v-col>
                        <v-col cols="12" md="6">
                            <p class="font-weight-medium">Flight Number</p>
                            <v-card color="#e2e8f0" height="35" class="align-center d-flex card" flat>
                                <p class="font-weight-bold ml-2">FJR500</p>
                            </v-card>
                        </v-col>
                    </v-row>
                </div>
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
</style>