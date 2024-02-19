<template>
    <v-row>
        <v-col cols="6">
            <v-select :items="['Show All', 'Include Flight', 'Not Include Flight']" variant="outlined" density="comfortable"
                class="select" v-model="selectedFilter" @change="filterPlaces()" />
        </v-col>
        <v-col cols="6">
            <p class="text-right text-h6">Result: {{ store.filteredPlacesArray.length }}</p>
        </v-col>
    </v-row>
</template>
  
<script setup>
import { useProgrammesCards } from '@/stores/programStore';

const store = useProgrammesCards();
const selectedFilter = ref("Show All");

const filterPlaces = () => {
    store.filteredPlaces(selectedFilter.value)
}

watch(selectedFilter, (newValue) => {
    store.filteredPlaces(newValue);
});
</script>
  
<style scoped>
.select {
    width: 200px;
}
</style>