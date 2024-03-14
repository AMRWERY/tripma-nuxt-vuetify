<template>
    <v-container>
        <v-row dense>
            <v-col>
                <p class="text-h4">Search hundreds of flights</p>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" md="6" lg="3">
                <v-select chips label="From?" :items="items" variant="outlined" />
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <v-select chips label="To?" :items="items" variant="outlined" />
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <v-menu v-model="menu" :close-on-content-click="false" transition="scale-transition">
                    <template v-slot:activator="{ props }">
                        <v-select v-model="selectedDate" label="Select Date" variant="outlined" v-bind="props" />
                    </template>
                    <v-date-picker v-model="datePickerModel" @input="setSelectedDate" />
                </v-menu>
            </v-col>
            <v-col cols="12" md="6" lg="3">
                <v-select chips :items="items" variant="outlined" />
            </v-col>
            <v-btn class="mx-auto text-capitalize" color="indigo" rounded="lg" size="x-large">Search</v-btn>
        </v-row>
    </v-container>
</template>
  
<script setup>
import { useDate } from 'vuetify';

const items = reactive(['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']);
const selectedDate = ref('');
const datePickerModel = ref(new Date());
const menu = ref(false);

const { formatDate } = useDate();

const setSelectedDate = (value) => {
    selectedDate.value = formatDate(value, 'yyyy-MM-dd');
};
</script>