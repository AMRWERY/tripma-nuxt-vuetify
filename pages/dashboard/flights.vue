<template>
    <v-container fluid>
        <v-row dense>
            <v-col>
                <add-flight />
            </v-col>
        </v-row>
        <v-row dense>
            <v-col>
                <v-table fixed-header height="300px">
                    <thead>
                        <tr>
                            <th class="text-left">
                                Flight No
                            </th>
                            <th class="text-left">
                                Go From
                            </th>
                            <th class="text-left">
                                Arrival In
                            </th>
                            <th class="text-left">
                                Departure Time
                            </th>
                            <th class="text-left">
                                Arrival Time
                            </th>
                            <th class="text-left">
                                Allowed Weight
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="flight in store.flights" :key="flight">
                            <td>{{ flight.flightNumber }}</td>
                            <td>
                                <div class="d-flex">
                                    <p>{{ flight.from }}</p>
                                    <v-img :src="flight.imgFrom" max-width="30" class="ml-2" />
                                </div>
                            </td>
                            <td>
                                <div class="d-flex">
                                    <p>{{ flight.to }}</p>
                                    <v-img :src="flight.imgTo" max-width="30" class="ml-2" />
                                </div>
                            </td>
                            <td>{{ flight.departureTime }}</td>
                            <td>{{ flight.arrivalTime }}</td>
                            <td>{{ flight.allowedWeight }}KG</td>
                        </tr>
                    </tbody>
                </v-table>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useFlightsPackage } from '@/stores/flightsStore'

const store = useFlightsPackage()

onMounted(() => {
    store.fetchFlights()
})

definePageMeta({
    layout: 'dashboard-layout'
})
</script>