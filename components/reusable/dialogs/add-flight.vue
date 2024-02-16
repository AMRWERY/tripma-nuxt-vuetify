
<template>
    <v-btn color="indigo-darken-1" class="float-right text-capitalize" @click="dialog = true">
        Add Flight
    </v-btn>
    <v-dialog v-model="dialog" width="500">
        <v-card>
            <v-card-text class="pa-3">
                <v-form @submit.prevent="addFlight">
                    <v-text-field label="From" variant="outlined" density="compact" color="blue" v-model="from" />
                    <v-text-field label="Departure Airport Logo" variant="outlined" density="compact" color="blue"
                        v-model="imgFrom" />
                    <v-text-field label="To" variant="outlined" density="compact" color="blue" v-model="to" />
                    <v-text-field label="Arrival Airport Logo" variant="outlined" density="compact" color="blue"
                        v-model="imgTo" />
                    <v-text-field label="Departure Time" variant="outlined" density="compact" color="blue"
                        v-model="departureTime" />
                    <v-text-field label="Arrival Time" variant="outlined" density="compact" color="blue"
                        v-model="arrivalTime" />
                    <v-text-field label="Flight No" variant="outlined" density="compact" color="blue"
                        v-model="flightNumber" />
                    <v-text-field label="Allowed Weight" variant="outlined" density="compact" color="blue"
                        v-model="allowedWeight" />
                    <v-btn type="submit" color="indigo" block class="text-capitalize">Add</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script setup>
import { useFlightsPackage } from '@/stores/flightsStore'

const store = useFlightsPackage()
const dialog = ref(false)
const from = ref('')
const to = ref('')
const imgFrom = ref('')
const imgTo = ref('')
const departureTime = ref('')
const arrivalTime = ref('')
const flightNumber = ref('')
const allowedWeight = ref('')

const addFlight = () => {
    store.addNewFlight({
        from: from.value,
        to: to.value,
        imgFrom: imgFrom.value,
        imgTo: imgTo.value,
        departureTime: departureTime.value,
        arrivalTime: arrivalTime.value,
        flightNumber: flightNumber.value,
        allowedWeight: allowedWeight.value
    });
    dialog.value = false;
};
</script>